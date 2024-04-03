import { defineConfig } from "vitepress";

export default defineConfig({
  title: "CoralBot.Doc",
  base: "/CoralBot.Doc/",
  description: "A VitePress Site",
  themeConfig: {
    editLink: {
      pattern: "https://github.com/BoyChai/CoralBot.Doc/edit/main/:path",
    },
    logo: "/icon.png",
    nav: [
      { text: "Home", link: "/" },
      { text: "Guide", link: "/Guide/readme" },
    ],
    search: {
      provider: "local",
    },
    sidebar: [
      {
        text: "Guide",
        collapsed: false,
        items: [
          {
            text: "简介",
            link: "/Guide/readme",
          },
          {
            text: "开始",
            link: "/Guide/start",
            collapsed: true,
            items: [
              { text: "快速上手", link: "" },
              { text: "创建 Bot 实例", link: "" },
            ],
          },
          { text: "配置", link: "/Guide/config" },
        ],
      },
      {
        text: "OneBot11",
        collapsed: true,
        items: [
          { text: "简介", link: "/markdown-examples" },
          { text: "开始", link: "/markdown-examples" },
          { text: "事件", link: "/markdown-examples" },
          { text: "行为", link: "/api-examples" },
        ],
      },
      {
        text: "DingDing",
        collapsed: true,
        items: [
          { text: "简介", link: "/markdown-examples" },
          { text: "开始", link: "/markdown-examples" },
          { text: "事件", link: "/markdown-examples" },
          { text: "行为", link: "/api-examples" },
        ],
      },
      {
        text: "Telegram",
        collapsed: true,
        items: [
          { text: "简介", link: "/markdown-examples" },
          { text: "开始", link: "/markdown-examples" },
          { text: "事件", link: "/markdown-examples" },
          { text: "行为", link: "/api-examples" },
        ],
      },
      {
        text: "Other",
        collapsed: true,
        items: [
          { text: "常见问题", link: "/markdown-examples" },
          { text: "客户端构建", link: "/markdown-examples" },
          { text: "事件", link: "/markdown-examples" },
          { text: "行为", link: "/api-examples" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/BoyChai/CoralBot" },
    ],
  },
});
