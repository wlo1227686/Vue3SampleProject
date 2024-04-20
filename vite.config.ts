import { fileURLToPath, URL } from 'node:url'
import { defineConfig, loadEnv, } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

export default defineConfig(({ command, mode }) => {
  // 根據當前工作目錄中 mode 加載 .env 文件
  // 設置第三個參數為 '' 來加載所有環境變量,不管是否有 'VITE_' 前綴
  const env = loadEnv(mode, process.cwd(), '')

  const isProd = env.PROD ? '正式環境' : '測試環境';
  console.log(` 環境變數檔 : ${env.VITE_ENV_DISPLAY_TITLE} `)
  console.log(` env.PROD : ${env.PROD} `) // 應用程式運行模式
  console.log(` 服務啟動 NODE_ENV : ${env.NODE_ENV} (${env.PROD ? '正式環境' : '測試環境'})`) // 應用程式運行模式
  console.log(` 服務啟動 isProd : ${isProd} `) // 應用程式運行模式
  console.log(` 服務啟動 isProd : ${env.PROD} `) // 應用程式運行模式
  console.log(` VITE_GLOBAL_VALUE : ${env.VITE_GLOBAL_VALUE} `) //


  console.log(`VITE_ENV_PASSWORD : ${env.VITE_ENV_PASSWORD}`)
  console.log(`ENV_PASSWORD : ${env.ENV_PASSWORD}`)

  return {
    build: {
      minify: 'esbuild' // 程式碼極簡化 預設為true
    },
    resolve: {
      alias: {
        /**
         * 當程式碼在import檔案時可以使用 '@/xxx/xxx.vue'做修改
         */
        '@': fileURLToPath(new URL('./src', import.meta.url)),
        /**
         * 用別名的方式引入圖片
         */
        '/images': 'src/assets/images',
      },
    },
    plugins: [vue(), vueJsx(),],
    server: {
      host: 'localhost',
      port: 8787
    },
    base: env.VITE_BASE,  // 依照不同環境變數設置不同路徑
  }
})


