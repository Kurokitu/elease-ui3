import { resolve } from 'path'
import { defineConfig, externalizeDepsPlugin } from 'electron-vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'

export default defineConfig({
  main: {
    plugins: [externalizeDepsPlugin()]
  },
  preload: {
    plugins: [externalizeDepsPlugin()]
  },
  renderer: {
    resolve: {
      alias: {
        '@renderer': resolve('src/renderer/src')
      }
    },
    plugins: [
      vue(),
      AutoImport({
        // 可以自定义文件生成的位置，默认是根目录下，使用ts的建议放src目录下
        dts: true,
        imports: ['vue', 'vue-router']
      }),
      Components({
        dts: true // enabled by default if `typescript` is installed
      })
    ],
    css: {
      preprocessorOptions: {
        scss: {}
      }
    }
  }
})
