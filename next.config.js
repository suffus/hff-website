/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  turbopack: {
    root: __dirname,
  },
  // News articles are read from ./content at build time. All news routes are
  // statically generated, but include the directory in the standalone trace as
  // a safeguard so the runner never lacks the source files.
  outputFileTracingIncludes: {
    '/news/**': ['./content/**/*'],
    '/news': ['./content/**/*'],
    '/': ['./content/**/*'],
  },
};

module.exports = nextConfig;



