# Next.js 16 requires Node.js 20.9+. Pin the base image for reproducible builds.
ARG NODE_VERSION=24-alpine

# ============================================
# Stage 1: Dependencies
# ============================================
FROM node:${NODE_VERSION} AS deps

# libc6-compat is required for some native modules on Alpine.
RUN apk add --no-cache libc6-compat

WORKDIR /app

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

RUN npm ci --no-audit --no-fund --ignore-scripts

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

RUN addgroup --system --gid 1001 nodejs \
    && adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public

RUN mkdir .next && chown nextjs:nodejs .next

# Standalone output already includes traced production node_modules.
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

CMD ["node", "server.js"]
