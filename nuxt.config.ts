// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules:[['@pinia/nuxt',{disableVuex:true}]],
    ssr: false, // default value,
    buildDir: 'nuxt-dist',
    
    app: {
      head: {
    link: [
      // <link rel="stylesheet" href="https://myawesome-lib.css">
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css' }
    ],}},
   css: [
      '@fortawesome/fontawesome-svg-core/styles.css',
      
        // Load a Node.js module directly (here it's a Sass file)
        
        // CSS file in the project
        '~/assets/style/main.scss',
        // SCSS file in the project
        '~/assets/style/style.css'
      ],
  
      build: {
        transpile: [
          '@fortawesome/vue-fontawesome',
          '@fortawesome/fontawesome-svg-core',
          '@fortawesome/pro-solid-svg-icons',
          '@fortawesome/pro-regular-svg-icons',
          '@fortawesome/free-brands-svg-icons'
        ]
      }

      
      
})
