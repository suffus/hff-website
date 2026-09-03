# Next.js 16 requires Node.js 20.9+. Pin the base image for reproducible builds.
ARG NODE_VERSION=24-slim

# ============================================
# Stage 1: Dependencies
# ============================================
FROM node:${NODE_VERSION} AS deps

WORKDIR /app

# Avoid IPv6 black holes in Docker (common on AWS EC2): Node tries IPv6 first by
# default, which can stall for minutes before falling back to IPv4.
ENV NODE_OPTIONS="--dns-result-order=ipv4first"

COPY package.json package-lock.json .npmrc ./

# ESLint is only needed for `npm run lint` locally/CI — not for `next build`.
# Omitting it cuts npm ci from ~365 packages to ~59, which is much faster on ARM.
RUN node -e "\
  const fs = require('fs'); \
  const pkg = JSON.parse(fs.readFileSync('package.json', 'utf8')); \
  delete pkg.devDependencies.eslint; \
  delete pkg.devDependencies['eslint-config-next']; \
  fs.writeFileSync('package.json', JSON.stringify(pkg, null, 2)); \
"

RUN --mount=type=cache,target=/root/.npm \
    npm ci --no-audit --no-fund --ignore-scripts

# ============================================
# Stage 2: Build
# ============================================
FROM node:${NODE_VERSION} AS builder

WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

RUN npm run build

# ============================================
# Stage 3: Production runner
# ============================================
FROM node:${NODE_VERSION} AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

RUN groupadd --system --gid 1001 nodejs \
    && useradd --system --uid 1001 --gid nodejs nextjs

COPY --from=builder /app/public ./public

RUN mkdir .next && chown nextjs:nodejs .next

# Standalone output already includes traced production node_modules.
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

CMD ["node", "server.js"]
