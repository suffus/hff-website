#!/usr/bin/env bash
set -euo pipefail

IMAGE="${IMAGE:-registry.fanjango.com.hk/hff/website:latest}"
NPM_CACHE="${NPM_CACHE:-${HOME}/.npm}"

mkdir -p "$NPM_CACHE"

# Populate ~/.npm on the host so Docker npm ci can use --prefer-offline.
echo "Warming host npm cache at ${NPM_CACHE}..."
npm ci --no-audit --no-fund

sudo docker buildx build \
  --build-context npmcache="${NPM_CACHE}" \
  -t "$IMAGE" \
  --load \
  .

sudo docker push "$IMAGE"
