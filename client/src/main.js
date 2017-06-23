// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import { sync } from 'vuex-router-sync'
import VueMaterial from 'vue-material'
import Vue from 'vue'
import Root from './Root'

/**
 * This is the Vuex store and it is
 * avaible to all your components
 */
import store from './store'

/**
 * This is the Router
 */
import router from './router'

/**
 * $http plugin based on axios
 */
import httpPlugin from './plugins/http'

/**
 * Eventbus plugin
 */
import eventbus from './plugins/eventbus'

/**
 * Vue Material
 */
Vue.use(VueMaterial)

/**
 * Make $http avaible to all components
 * Send store and router to httpPlugin (injection)
 */
Vue.use(httpPlugin, { store, router })

/**
 * Make $bus avaible to all components
 */
Vue.use(eventbus)

/**
 * Keep vue-router and vuex store in sync.*
 * https://github.com/vuejs/vuex-router-sync/tree/next
 */
sync(store, router)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  store, // injects the Store into all components
  router, // make Router work with the application
  el: '#app',
  render: h => h(Root)
})
