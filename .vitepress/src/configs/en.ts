import type { DefaultTheme, UserConfig } from "vitepress";
import getNavs from "../navs/en";
import { sidebar } from "../sidebars/en";
export const enConfig: UserConfig<DefaultTheme.Config> = {
  themeConfig: {
    lastUpdatedText: "Last Updated",
    returnToTopLabel: "Return To Top",
    // 文档页脚文本配置
    docFooter: {
      prev: "Prev",
      next: "Next",
    },
    logo: "/logo.png",
    nav: getNavs(),
    sidebar,
    outline: {
      level: "deep", // 右侧大纲标题层级
      label: "Contents", // 右侧大纲标题文本配置
    },
  },
  markdown: {
    lineNumbers: true, // 开启行号
  },
};
