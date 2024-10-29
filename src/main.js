import { createApp } from 'vue'
import App from './App.vue'
import router from './Router'

var app = createApp(App);

app.config.globalProperties.$filters = {
  evaluarNumero(num) {
    if (num % 2 == 0) {
      return "<span style='color:green'>" + num + "</span>";
    } else {
      return "<span style='color:red'>" + num + "</span>";
    }
  },

  getOperacion(numero, index){
    return `${numero} * ${index}`;
  },

  getMultiplicacion(numero, index){
    return numero * index;
  }
}

app.use(router).mount('#app')
