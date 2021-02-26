import Vue from 'vue'
import Vuex from 'vuex'
import galleries from './galleries'
import auth from './auth'

Vue.use(Vuex)

export default new Vuex.Store({
  
  modules: {
    galleries,
    auth
  }
})
