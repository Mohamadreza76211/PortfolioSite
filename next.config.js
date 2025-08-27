/** @type {import('next').NextConfig} */
const withTM = require("next-transpile-modules")([
  "@fullcalendar/common",
  "@fullcalendar/daygrid",
  "@fullcalendar/interaction",
  "@fullcalendar/list",
  "@fullcalendar/react",
  "@fullcalendar/timegrid",
  "@fullcalendar/timeline",
]);
const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === "development",
  runtimeCaching: [
    {
      urlPattern: /^https?:\/\/localhost:5154\/(Files|CDN)\/.*/,
      handler: "CacheFirst",
      options: {
        cacheName: "static-assets",
        expiration: {
          maxEntries: 200,
          maxAgeSeconds: 30 * 24 * 60 * 60, // 30 days
        },
      },
    },
    {
      urlPattern: /^https?.*/,
      handler: "NetworkFirst",
      options: {
        cacheName: "offlineCache",
        networkTimeoutSeconds: 3,
        expiration: {
          maxEntries: 100,
          maxAgeSeconds: 24 * 60 * 60, // 1 day
        },
        cacheableResponse: {
          statuses: [0, 200],
        },
      },
    },
  ],
  buildExcludes: [/middleware-manifest\.json$/],
  fallbacks: {
    document: "/offline",
  },
});

module.exports = withPWA(
  withTM({
    async rewrites() {
      return [
        {
          source: "/api/:path*",
          destination: "http://localhost:5154/api/:path*",
        },
        {
          source: "/Files/:path*",
          destination: "http://localhost:5154/Files/:path*",
        },
        {
          source: "/CDN/:path*",
          destination: "http://localhost:5154/CDN/:path*",
        },
        {
          source: "/ChatHub/:path*",
          destination: "http://localhost:5154/ChatHub/:path*",
        },
      ];
    },
    reactStrictMode: true,
    swcMinify: true,
  })
);
