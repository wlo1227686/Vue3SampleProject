# Vue3_Sample_Project

## 專案描述

1. 使用 Vue3 、 Vuetify3 、 Vue-Router4 、Pinia 實現單頁應用,數據管理,畫面樣式呈現。
2. 使用 axios 處理API調用

### 組件版本

```
node-js -> v20.11.0
npm     ->  10.2.4
```

### 使用Vite搭建專案項目

[Vue3相關資源](https://vuejs.org/guide/quick-start)

### 常用指令

```

/** 開發環境 */
  npm install             // 專案構建
  npm cache clean --force // 清除NPM緩存

/** HMR */

  npm run dev            // 載入(.env.preprod)    開啟本地伺服器，並提供Hot Module Replacement(HMR)
  npm run preprod        // 載入(.env.preprod)    開啟本地伺服器，並提供Hot Module Replacement(HMR)

/** 打包 */

  npm run build:preprod  //  載入(.env.preprod)    打包產製dist
  npm run build          //  載入(.env.production) 打包產製dist

/** Preview */

  npm run preview        //  預覽打包後的(dist)專案內容
```

### 目錄結構

```
[Vue3_Sample_Project]
  |--- dist/            執行打包build生成的結果內容
  |--- node_modules/    node.js相關文件夾
  |--- public/
  |---   src/           程式源碼文件夾
          |--- App.vue  應用組件
          |--- main.ts  入口js
  |--- .env.preprod     vite參數配置文件(preprod環境)
  |--- .env.prod        vite參數配置文件(prod環境)
  |--- .eslintrc.cjs    eslint檢查配置文件
  |--- .gitignore       git版本控制忽略配置文件
  |--- index.html       主頁面文件
  |--- package.json     第三方套件配置文件
  |--- README.md        專案說明描述的readme文件
  |--- vite.config.ts   vite配置文件
  |--- vitest.config.ts vitest配置文件

[src/]
  |--- api/        與後台API交互模塊
  |--- assets/     靜態資源項目
  |--- components/ 共用組件模塊(.vue)
  |--- router/     路由器文件模塊(vue-router)
  |--- script/     共用Script(.ts)
  |--- store/      數據模塊(pinia)
  |--- view/       頁面畫面(.vue與路由表相呼應)
  |--- App.vue     應用組件
  |--- main.ts     入口ts
```

### 備註小記

(1) local開發時,瀏覽器需做設置跨域設定 目標: --disable-web-security --user-data-dir=c:\my\data
