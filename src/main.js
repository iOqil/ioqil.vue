import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import store from './store'
import uiComponents from './ui-components'

const app = createApp(App)

uiComponents.map(component => {
  app.component(component.name, component)
})

app.use(createPinia())
app.use(router)

app.mount('#app')
