import Vue from 'vue'
import App from './App.vue'
import Example from './components/Example.vue'

// instead of setting whole object as second argument. Just set ComponentName
Vue.component('app-example', Example);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
