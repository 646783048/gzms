import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import ElementUI from 'element-ui';
import Footer from '@/components/Footer.vue'
import Header from '@/components/Header.vue'
import 'element-ui/lib/theme-chalk/index.css';

axios.defaults.baseURL='http://127.0.0.1:3000'
Vue.prototype.axios = axios;
Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.component("Footer", Footer);
Vue.component("Header", Header);

new Vue({
  router,
  store,
  el: '#app',
  render: h => h(App)
}).$mount('#app')
