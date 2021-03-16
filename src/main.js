import Vue from 'vue'
import router from  './router'
import App from './App.vue'
import store from './store'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
//引入并调用
// import eventBus from './eventBus'
// Bus(Vue)
// Vue.prototype.$eventBus = eventBus;
// Vue.prototype.$eventBus = new Vue();
// Vue.use(eventBus)


// 调接口相当于ajax
// import axios from 'axios' //导入axios
// Vue.prototype.$axios = axios //修改原始数据

//配置POST请求头
// axios.defaults.headers.post["Content-Type"] =
//   "application/x-www-form-urlencoded";


new Vue({
  el:"#app",
  router,
  store,
  render(c){
    return c(App)
  },
 
  //计算属性
  computed: {
    search: function () {
      return this.list.filter((item) => {
        if (item.name.includes(this.keywords)) {
          return true;
        }
      });
    },
  },

})