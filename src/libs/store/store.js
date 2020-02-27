import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
const store = new Vuex.Store({
  state:{
    userInfo:{
      //用户的网络状态
      networkStatus:true,
    },
    // 全局模糊背景
    filter_modal:false,
    visibilityDialog:false,
    isLoading:false,
  },
  mutations: {
    USER_STATUS: (state,value) => {
      state.userInfo.networkStatus = value;
    },
    FILTER_OPEN: (state) => {
      state.filter_modal = true;
    },
    FILTER_CLOSE: (state) => {
      state.filter_modal = false;
    },
    SHOW_VISIBILITY_DIALOG(state,value){
      state.visibilityDialog=value
    },
    SHOW_LOADING(state,value) {
      state.isLoading = value
    }
  }, 
  actions: {
    // 设置用户网络状态
    getUserNetworkStatus:({commit},value) => {
      commit("USER_STATUS",value)
    },
    // 模糊背景弹窗打开
    open_filter:({commit}) => {
      commit("FILTER_OPEN")
    },
    // 模糊背景弹窗关闭
    close_filter:({commit}) => {
      commit("FILTER_CLOSE")
    }
  }
})

export default store
