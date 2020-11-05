import Vue from 'vue'
import App from './App'
import uView from "uview-ui"
import store from "./store"

import "./tools"

import Tabs from "./components/tabs"
import share from 'pages/Bdetail/share.vue'
import Sbook from 'pages/sousuo/Sbook.vue'
import Sping from 'pages/sousuo/Sping.vue'

Vue.config.productionTip = false
Vue.use(uView)
App.mpType = 'app'
Vue.use(Tabs)
Vue.component("share",share)
Vue.component("Sbook",Sbook)
Vue.component("Sping",Sping)
const app = new Vue({
	store,
    ...App
})
app.$mount()
