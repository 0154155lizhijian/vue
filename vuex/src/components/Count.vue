<template>
  <div>
    <h2>{{msg}}</h2>
    <h3>你的代号是：{{count}}</h3>
    <p>
      <button @click="add(10)"> + </button>
      <button @click="reduce(5)"> - </button>
      <button @click="addAction(100)"> 异步+ </button>
      <button @click="reduceAction(100)"> 异步- </button>
    </p>
  </div>
</template>

<script>
import store from '@/vuex/store'
import {mapState, mapMutations, mapGetters, mapActions} from 'vuex'
export default {
  name: 'Count',
  data () {
    return {
      msg: '召唤师，欢迎来到Vuex'
    }
  },
  store,
  // 1.直接取值的方式
  // computed: {
  //   count () {
  //     return this.$store.state.count
  //   }
  // }
  // 2.mapState
  // computed: mapState({
  //   count: state => state.count
  // })
  // 3.大招
  computed: {...mapState(['count']), ...mapGetters(['count'])},
  methods: {...mapMutations(['add', 'reduce']), ...mapActions(['addAction', 'reduceAction'])}
}
</script>

<style>

</style>
