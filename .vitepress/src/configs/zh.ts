import type { DefaultTheme, UserConfig } from "vitepress";
//引入以上配置 是英文界面需要修改zh为en
import getNavs from "../navs/zh";
import { sidebar } from "../sidebars/zh";
export const zhConfig: UserConfig<DefaultTheme.Config> = {
  themeConfig: {
    lastUpdatedText: "上次更新",
    returnToTopLabel: "返回顶部",
    // 文档页脚文本配置
    docFooter: {
      prev: "上一页",
      next: "下一页",
    },
    logo: "/logo.png",
    nav: getNavs(),
    sidebar,
    outline: {
      level: "deep", // 右侧大纲标题层级
      label: "目录", // 右侧大纲标题文本配置
    },
  },
  markdown: {
    container: {
      tipLabel: "提示",
      warningLabel: "警告",
      dangerLabel: "危险",
      infoLabel: "信息",
      detailsLabel: "详细信息",
    },
    lineNumbers: true, // 开启行号
  },
};
