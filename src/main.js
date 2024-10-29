import { createApp } from 'vue'
import App from './App.vue'
import router from './Router'

var app = createApp(App);

app.config.globalProperties.$filters = {
  parImpar(num){
    return num % 2 == 0 ? "<h1 style='color:green'>Es par</h1>" : "<h1 style='color:red'>Es impar</h1>";
  }
}


app.use(router).mount('#app')
