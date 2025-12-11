// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig: import('next').NextConfig = {
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },

  async redirects() {
    return [
      // 1) Forcer le domaine sans www
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "www.webcresson.com",
          },
        ],
        destination: "https://webcresson.com/:path*",
        permanent: true,
      },

      // 2) Nettoyer les URLs /contact?model=...
      {
        source: "/contact",
        has: [
          {
            type: "query",
            key: "model",
          },
        ],
        destination: "/contact",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
