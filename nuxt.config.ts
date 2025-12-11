// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/ui'],
  css: ['~/assets/css/main.css'],
  //pages: false, // 禁用基于文件的路由系统
  
  // GitHub Pages 部署配置
  ssr: false,
  app: {
    baseURL: '/K-QuantAI/',
    buildAssetsDir: '/_nuxt/',
    head: {
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1, viewport-fit=cover' },
        { name: 'theme-color', content: '#020617' }, // slate-950
        { name: 'apple-mobile-web-app-capable', content: 'yes' },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
      ],
    }
  },
  nitro: {
    preset: 'static'
  }
})

