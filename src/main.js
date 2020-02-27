import Vue from 'vue'
import App from './App'
import router from './router/index.js'
import store from './libs/store/store.js'
//全局引入element
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// 引入时间处理插件moment.js
import moment from 'moment'
//引入全局的默认样式  common.css
import './assets/common.css'
// 引入二次封装的具体的接口调用函数
import {server} from './libs/axios/http-server.js'
import {URL} from './libs/axios/api.js'
//定义全局的ajax变量
Vue.prototype.$server = server;
Vue.prototype.$moment  = moment;
Vue.prototype.$BASE_URL = URL;
Vue.config.productionTip = false;
Vue.use(ElementUI);

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
