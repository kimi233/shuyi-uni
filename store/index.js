import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
		//token
        token:"",
		//用户信息
        userinfo:{},
		//用户配置信息
        config:{},
		//需要全局共享的逻辑状态
		data: {},
    },
    getters: {
    },
    mutations: {
		setUserInfo(state, userinfo){
			state.userinfo = userinfo
			uni.setStorageSync("userinfo",userinfo)
		}
    },
    actions: {}
})
export default store