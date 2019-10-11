import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  // actions: {
  //   // ctx 上下文， city 是传过来的参数
  //   changeCity (ctx, city) {
  //     // 这个ctx 和store起着相同的作用
  //     ctx.commit('changeCity', city)
  //   }
  // },
  mutations
})
