import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Zameel Docs",
  description: "Technical docs for Zameel, your never-be-absent classmate.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "/logo.svg",
    nav: [
      { text: "Home", link: "/" },
      { text: "Frontend", link: "/frontend/setup" },
    ],
    outline: "deep",
    sidebar: {
      "/frontend/": [
        {
          text: "Guide",
          items: [
            { text: "Introduction", link: "/frontend/" },
            { text: "Setup", link: "/frontend/setup" },
            { text: "Contribution", link: "/frontend/CONTRIBUTING" },
            { text: "Style Guide", link: "/frontend/style-guide" },
          ],
        },
        {
          text: "API Reference",
          // collapsed: false,
          items: [
            { text: "Compontents", link: "/frontend/components" },
            { text: "Hooks", link: "/frontend/hooks" },
            { text: "Utils", link: "/frontend/utils" },
            { text: "Types", link: "/frontend/types" },
          ],
        },
      ],
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/khateeboveskey/zameel" },
    ],
    footer: {
      message: "Released under the MIT License.",
      copyright:
        "Copyright © 2024-present A.Rahman Al-Khateeb and Zameel Contributors",
    },
  },
  base: "/zameel-docs/",
  lastUpdated: true,
  head: [["link", { rel: "icon", href: "/zameel-docs/logo.svg" }]],
  srcDir: "src",
  cleanUrls: true,
});
