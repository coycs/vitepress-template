import type { DefaultTheme } from "vitepress";

export default function getNavs() {
  return [
    { text: "主页", link: "/" },
    {
      text: "例子",
      items: [
        {
          text: "markdown例子",
          link: "/zh/markdown-examples",
          activeMatch: "/markdown-examples",
        },
        {
          text: "api例子",
          link: "/zh/api-examples",
          activeMatch: "/api-examples",
        },
      ],
      // activeMatch: "/zh/examples/about/", // // 当前页面处于匹配路径下时, 对应导航菜单将突出显示
    },
  ];
}
