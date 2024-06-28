import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import dts from "vite-plugin-dts";

// 参考1
// 1、https://segmentfault.com/a/1190000043739133
// 2、https://juejin.cn/post/7257144279050403896

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => ["swiper-container", "swiper-slide"].includes(tag),
        },
      },
    }),
    dts(),
  ],
  build: {
    minify: !false,
    // outDir: "card-animation-comp", // 输出文件名称
    lib: {
      entry: path.resolve(__dirname, "packages/index.ts"), // 指定组件编译入口文件
      name: "picker-date",
      fileName: "picker-date",
      formats: ["es"],
    }, // 库编译模式配置
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ["vue", "dayjs"],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: "Vue",
        },
      },
    }, // rollup打包配置
  },
});
