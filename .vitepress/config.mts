import { defineConfig } from "vitepress";
import { docsConfig } from "./src/docs";
import { themeConfig } from "./src/theme";
import { head } from "./src/head";
//配置的英文文档设置
import { enConfig } from "./src/configs/en";
//配置的中文文档设置
import { zhConfig } from "./src/configs/zh";
export default defineConfig({
  /* 文档配置 */
  ...docsConfig,
  /* 标头配置 */
  head,
  /* 主题配置 */
  themeConfig,
  /* 语言配置 */
  locales: {
    // zh: { label: "简体中文", lang: "zh-CN", link: "/zh/", ...zhConfig },
    // en: { label: "English", lang: "en-US", link: "/index", ...enConfig },
    root: {
      label: "English",
      lang: "en",
      ...enConfig,
    },
    zh: {
      label: "简体中文",
      lang: "zh-CN", // optional, will be added  as `lang` attribute on `html` tag
      link: "/zh/", // default /fr/ -- shows on navbar translations menu, can be external
      // other locale specific properties...
      ...zhConfig,
    },
  },
});
