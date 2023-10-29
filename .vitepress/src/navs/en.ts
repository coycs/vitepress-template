import type { DefaultTheme } from "vitepress";

export default function getNavs() {
  return [
    { text: "Home", link: "/" },
    {
      text: "Examples",
      items: [
        {
          text: "markdown examples",
          link: "/markdown-examples",
          activeMatch: "/markdown-examples",
        },
        {
          text: "api examples",
          link: "/api-examples",
          activeMatch: "/api-examples",
        },
      ],
      // activeMatch: "/zh/examples/about/", // // 当前页面处于匹配路径下时, 对应导航菜单将突出显示
    },
  ];
}
