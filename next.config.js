/** @type {import('next').NextConfig} */
const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

const nextConfig = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      reactStrictMode: true,
      env: {
        USRENAME: process.env.USRENAME,
        PASSWORD: process.env.PASSWORD,
        CLUSTERNAME: process.env.CLUSTERNAME,
        DATABASE: process.env.DATABASE,
      },
    };
  }
  return {
    reactStrictMode: true,
    env: {
      USRENAME: process.env.USRENAME,
      PASSWORD: process.env.PASSWORD,
      CLUSTERNAME: process.env.CLUSTERNAME,
      DATABASE: process.env.DATABASE,
    },
  };
};

module.exports = nextConfig;
