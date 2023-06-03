import { createApp } from 'vue'
import App from './App.vue'
// 全局注册组件
// import HelloWorld from './components/HelloWorld.vue'
const app = createApp(App)
// app.component('HelloWorld', HelloWorld)
app.mount('#app')
