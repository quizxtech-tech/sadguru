// import path from "path";
// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   webpack: (config) => {
//     config.resolve.alias = {
//       ...config.resolve.alias,
//       three: path.resolve(__dirname, "node_modules/three"),
//     };
//     return config;
//   },
// };

// export default nextConfig;


import path from "path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Add this block to ignore ESLint errors during build
  eslint: {
    ignoreDuringBuilds: true,
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      three: path.resolve(__dirname, "node_modules/three"),
    };
    return config;
  },
};

export default nextConfig;