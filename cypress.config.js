// import { defineConfig } from "cypress";

// export default defineConfig({
//   component: {
//     devServer: {
//       framework: "react",
//       bundler: "webpack",
//     },
//   },
// });

import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:5173/",
    supportFile: false,
  },

  viewportWidth: 1024,
  viewportHeight: 768,
  video: false,

  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
  },
});
