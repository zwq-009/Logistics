import Vue from 'vue'
import router from  './router'
import App from './App.vue'

import 'vant/lib/index.css';

//组件运用
import { Button,Rate,Picker   } from 'vant';
Vue.use(Button).use(Rate).use(Picker)


new Vue({
  el:"#app",
  router,
  render(c){
    return c(App)
  }
})


/*
Vue的核心：数据驱动、组件化、Vuex

Vue学过的知识点：
1.Vue指令、插值表达式
2.Vue过滤器、自定义指令、事件按键修饰符
3.Vue组件 ： 可以自己封装、也可以使用第三方的UI组件库
4.Vue路由
5.Vue动画


第三方的UI组件库有哪些：
1.PC端的UI组件库：Ant Design、Element UI(核心团队已经被挖)、Bootstrap Vue、iview
2.移动端的UI组件库：Vant UI 、Mint UI、BUI、vux
*/