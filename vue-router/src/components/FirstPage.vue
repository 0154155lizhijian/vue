<template>
  <div>
    <h1>
      欢迎来到vue，欢迎您，召唤师
    </h1>
    <router-link :to="{name:'Moni',params:{username:'傲视勿念'}}">进入vue王者模拟战 </router-link> |
    <router-link to='/firstPage/daluandou/傲视勿念'>进入vue王者大乱斗 </router-link>
    
    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
