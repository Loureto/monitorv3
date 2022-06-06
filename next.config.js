/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  env: {
    BASE_API_URL: "https://dev-services.labpetz.com.br",
  },
};

module.exports = nextConfig;

// https://dev-services.labpetz.com.br
// https://prd-services.petz.com.br
