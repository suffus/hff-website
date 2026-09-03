#!/usr/bin/env bash
set -euo pipefail

IMAGE="${IMAGE:-registry.fanjango.com.hk/hff/website:latest}"
NPM_CACHE="${NPM_CACHE:-${HOME}/.npm}"
HOST_NODE_MODULES="${HOST_NODE_MODULES:-$(pwd)/node_modules}"

mkdir -p "$NPM_CACHE"

# Warm the host npm cache when node_modules is missing (optional; local npm ci is fast).
if [ ! -d "$HOST_NODE_MODULES" ] || [ -z "$(ls -A "$HOST_NODE_MODULES" 2>/dev/null)" ]; then
  echo "No local node_modules — warming ${NPM_CACHE} from lockfile..."
  npm ci --no-audit --no-fund
fi

# Empty dir fallback so build contexts always exist when node_modules is absent.
HOSTNODE_CTX="$(mktemp -d)"
trap 'rm -rf "$HOSTNODE_CTX"' EXIT
if [ -d "$HOST_NODE_MODULES" ] && [ -n "$(ls -A "$HOST_NODE_MODULES" 2>/dev/null)" ]; then
  echo "Docker build will reuse local node_modules (no registry downloads in deps stage)."
  HOSTNODE_CTX="$HOST_NODE_MODULES"
  trap - EXIT
fi

sudo docker buildx build \
  --build-context npmcache="${NPM_CACHE}" \
  --build-context hostnode="${HOSTNODE_CTX}" \
  -t "$IMAGE" \
  --load \
  .

sudo docker push "$IMAGE"
