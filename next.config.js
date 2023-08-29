/** @type {import('next').NextConfig} */

const nextConfig = () => {
  return {
    env: {
      USRENAME: process.env.USRENAME,
      PASSWORD: process.env.PASSWORD,
      CLUSTERNAME: process.env.CLUSTERNAME,
      DATABASE: process.env.DATABASE,
    },
  };
};

module.exports = nextConfig;
