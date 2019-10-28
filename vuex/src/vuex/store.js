import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  count: 1
}

const mutations = {
  add (state, n) {
    state.count += n
  },
  reduce (state, n) {
    state.count -= n
  }
}

// 在数据渲染前，对数据进行处理,每次都会触发
const getters = {
  count: function (state) {
    return (state.count += 100)
  }
}

const actions = {
  addAction (context, n) {
    context.commit('add', n)
    setTimeout(() => {
      console.log('就给你加上200')
      context.commit('add', 200)
    }, 3000)
    console.log('怎么说')
  },
  reduceAction ({ commit }, n) {
    commit('reduce', n)
    setTimeout(() => {
      console.log('你减200')
      commit('reduce', 200)
    }, 3000)
  }
}

export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions
})
