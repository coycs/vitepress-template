import type { HeadConfig } from "vitepress";

export const head: HeadConfig[] = [
  // 32x32
  ["link", {
    rel: "icon",
    href: "/favicons/favicon.ico",
  }],
  ["link", {
    rel: "icon",
    type: "image/svg+xml",
    href: "/favicons/favicon.svg",
  }],
  // 180×180
  ["link", {
    rel: "apple-touch-icon",
    sizes: "180x180",
    href: "/favicons/apple-touch-icon.png",
  }],
  ["link", { rel: "manifest", href: "/favicons/manifest.webmanifest" }],
];
