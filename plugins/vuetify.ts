// import this after install `@mdi/font` package
import '@mdi/font/css/materialdesignicons.css'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'

const customTheme = {
  dark : false,
  colors: {
    background: '#1867C0'
  }
}

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    // ... your configuration

    // theme: {
    //   defaultTheme: 'customTheme',
    //   themes: {
    //     customTheme,
    //   },
    // },
    
  })
  app.vueApp.use(vuetify)

})