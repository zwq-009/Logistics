//存放Vuex的代码
import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
Vue.use(Vuex);

var store = new Vuex.Store({
  //当我们调用了mutations中的方法之后，才会把修改后的数据存到localstorage
  plugins: [createPersistedState()],
  // Authorization: localStorage.getItem('Authorization') ? localStorage.getItem('Authorization') : '',
  state: {
    products: [
        {
          id: 13,
          no: "101794", //订单编号
          loading: "2020-10-07",
          arrival: "2020-10-17",
          startp: "广东省广州市黄埔区广保大道",
          endp: "深圳宝安国际机场",
          needcar: "高栏车", //车型
          carlen: "9.6", //车长
          carnum: "粤AS8323",
          state: "空闲",
          weight: "30",
        },
        {
          id: 15,
          no: "114724", //订单编号
          loading: "2020-02-07",
          arrival: "2021-02-25",
          startp: "广州番禺广场",
          endp: "江门万达广场",
          needcar: "平板车", //车型
          carlen: "7.6", //车长
          carnum: "粤A14065",
          state: "空闲",
          weight: "25",
        },
        {
          id: 14,
          no: "101774", //订单编号
          loading: "2020-02-25",
          arrival: "2020-02-30",
          startp: "南沙湿地",
          endp: "深圳龙岗华夏动漫产业园",
          needcar: "厢式车", //车型
          carlen: "9.6", //车长
          carnum: "粤AS8343",
          state: "已接单",
          weight: "35",
        },
        {
          id: 16,
          no: "168097", //订单编号
          loading: "2020-11-19",
          arrival: "2020-11-23",
          startp: "广东省广州市黄埔区广保大道",
          endp: "珠海拱北口岸",
          needcar: "平板车", //车型
          carlen: "17", //车长
          carnum: "粤A74045",
          state: "空闲",
          weight: "30",
        },
        {
          id: 17,
          no: "109374", //订单编号
          loading: "2020-04-21",
          arrival: "2020-04-25",
          startp: "广东省广州市黄埔区广保大道",
          endp: "珠海拱北口岸",
          needcar: "高栏车", //车型
          carlen: "9.6", //车长
          carnum: "粤AS8673",
          state: "已接单",
          weight: "20",
        },
        {
          id: 18,
          no: "183974", //订单编号
          loading: "2020-05-07",
          arrival: "2020-05-21",
          startp: "广州番禺广场",
          endp: "广东省深圳市宝安区深圳宝安国际机场",
          needcar: "平板车", //车型
          carlen: "13", //车长
          carnum: "粤A10575",
          state: "空闲",
          weight: "25",
        },
        {
          id: 19,
          no: "237674", //订单编号
          loading: "2020-05-25",
          arrival: "2020-05-30",
          startp: "广东省广州市黄埔区广保大道",
          endp: "珠海拱北口岸",
          needcar: "厢式车", //车型
          carlen: "12", //车长
          carnum: "粤AS8323",
          state: "空闲",
          weight: "35",
        },
        {
          id: 20,
          no: "109422", //订单编号
          loading: "2020-11-16",
          arrival: "2020-11-23",
          startp: "广州番禺广场",
          endp: "广东省深圳市宝安区深圳宝安国际机场",
          needcar: "高栏车", //车型
          carlen: "13", //车长
          carnum: "粤A10575",
          state: "已接单",
          weight: "30",
        },
        {
          id: 21,
          no: "102154", //订单编号
          loading: "2020-05-14",
          arrival: "2020-05-17",
          startp: "广东省广州市黄埔区广保大道",
          endp: "广东省深圳市宝安区深圳宝安国际机场",
          needcar: "高栏车", //车型
          carlen: "12", //车长
          carnum: "粤AS8323",
          state: "空闲",
          weight: "20",
        },
        {
          id: 22,
          no: "101893", //订单编号
          loading: "2020-06-10",
          arrival: "2020-06-15",
          startp: "广东省广州市黄埔区广保大道",
          endp: "珠海拱北口岸",
          needcar: "平板车", //车型
          carlen: "7.6", //车长
          carnum: "粤A13555",
          state: "空闲",
          weight: "25",
        },
        {
          id: 23,
          no: "102934", //订单编号
          loading: "2020-01-26",
          arrival: "2020-01-31",
          startp: "广州番禺广场",
          endp: "广东省深圳市宝安区深圳宝安国际机场",
          needcar: "高栏车", //车型
          carlen: "13", //车长
          carnum: "粤AS8212",
          state: "已接单",
          weight: "20",
        },
        {
          id: 24,
          no: "116974", //订单编号
          loading: "2020-11-15",
          arrival: "2020-11-17",
          startp: "广东省广州市黄埔区广保大道",
          endp: "广东省深圳市宝安区深圳宝安国际机场",
          needcar: "平板车", //车型
          carlen: "9.6", //车长
          carnum: "粤A1.289325",
          state: "空闲",
          weight: "30",
        },
        {
          id: 25,
          no: "102564", //订单编号
          loading: "2020-04-27",
          arrival: "2020-05-01",
          startp: "广州番禺广场",
          endp: "珠海拱北口岸",
          needcar: "厢式车", //车型
          carlen: "12", //车长
          carnum: "粤AS8323",
          state: "已接单",
          weight: "20",
        },
        {
          id: 26,
          no: "102974", //订单编号
          loading: "2020-03-26",
          arrival: "2020-03-31",
          startp: "广州番禺广场",
          endp: "南宁高新技术产业开发区",
          needcar: "高栏车", //车型
          carlen: "9.6", //车长
          carnum: "粤A13445",
          state: "已接单",
          weight: "25",
        },
        {
          id: 27,
          no: "194974", //订单编号
          loading: "2020-05-14",
          arrival: "2020-05-19",
          startp: "广东省广州市黄埔区广保大道",
          endp: "南宁高新技术产业开发区",
          needcar: "平板车", //车型
          carlen: "13", //车长
          carnum: "粤AS8323",
          state: "空闲",
          weight: "30",
        },
        {
          id: 28,
          no: "102194", //订单编号
          loading: "2020-04-28",
          arrival: "2020-05-02",
          startp: "广州番禺广场",
          endp: "珠海拱北口岸",
          needcar: "厢式车", //车型
          carlen: "17", //车长
          carnum: "粤A72545",
          state: "空闲",
          weight: "35",
        },
        {
          id: 29,
          no: "195274", //订单编号
          loading: "2020-05-07",
          arrival: "2020-05-14",
          startp: "广东省广州市黄埔区广保大道",
          endp: "南宁高新技术产业开发区",
          needcar: "高栏车", //车型
          carlen: "13", //车长
          carnum: "粤AS8323",
          state: "空闲",
          weight: "15",
        },
        {
          id: 30,
          no: "123974", //订单编号
          loading: "2020-04-24",
          arrival: "2020-04-28",
          startp: "广州番禺广场",
          endp: "珠海拱北口岸",
          needcar: "平板车", //车型
          carlen: "12", //车长
          carnum: "粤A93345",
          state: "已接单",
          weight: "15",
        },
        {
          id: 31,
          no: "102874", //订单编号
          loading: "2020-04-21",
          arrival: "2020-04-25",
          startp: "南宁高新技术产业开发区",
          endp: "东圃汽车客运站",
          needcar: "高栏车", //车型
          carlen: "9.6", //车长
          carnum: "粤AS8933",
          state: "空闲",
          weight: "30",
        },
        {
          id: 32,
          no: "102134", //订单编号
          loading: "2020-07-16",
          arrival: "2020-07-21",
          startp: "广东省广州市黄埔区广保大道",
          endp: "东圃汽车客运站",
          needcar: "高栏车", //车型
          carlen: "7.6", //车长
          carnum: "粤A18445",
          state: "空闲",
          weight: "25",
        },
        {
          id: 33,
          no: "102097", //订单编号
          loading: "2020-10-07",
          arrival: "2020-10-17",
          startp: "东圃汽车客运站",
          endp: "南宁高新技术产业开发区",
          needcar: "平板车", //车型
          carlen: "9.6", //车长
          carnum: "粤A18645",
          state: "空闲",
          weight: "25",
        },
        {
          id: 34,
          no: "102062", //订单编号
          loading: "2020-06-24",
          arrival: "2020-06-28",
          startp: "南宁高新技术产业开发区",
          endp: "珠海拱北口岸",
          needcar: "高栏车", //车型
          carlen: "17", //车长
          carnum: "粤A19355",
          state: "空闲",
          weight: "25",
        },
        {
          id: 35,
          no: "143277", //订单编号
          loading: "2020-04-27",
          arrival: "2020-04-30",
          startp: "广东省广州市黄埔区广保大道",
          endp: "东圃汽车客运站",
          needcar: "平板车", //车型
          carlen: "12", //车长
          carnum: "粤A63345",
          state: "已接单",
          weight: "25",
        },

    ],
  },
  mutations: {

    commitComment(state, payload) {
      var good = state.products.find(item => {
        if (item.id == payload.id) {
          return item;
        }
      })
      good.comments.push(payload.content)
    }

    // 修改token，并将token存入localStorage
    // changeLogin (state, user) {
    //   state.Authorization = user.Authorization;
    //   localStorage.setItem('Authorization', user.Authorization);
    // }
  },
});



export default store;

/*
 总结：
 1. state中的数据，不能直接修改，如果想要修改，必须通过 mutations
 2. 如果组件想要直接 从 state 上获取数据： 需要 this.$store.state.***
 3. 如果组件想要修改数据，必须使用 mutations 提供的方法，需要通过 this.$store.commit('方法的名称'， 唯一的一个参数)
 4. store中state上的数据在对外提供的时候建议做一层包装，推荐使用 getters。调用的时候则用this.$store.getters.***
*/
