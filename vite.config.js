import { defineConfig } from "vite";
import vue from '@vitejs/plugin-vue'
 
export default defineConfig({
  plugins: [
    // 使用vite构建vue的插件
    vue(),
  ],
})