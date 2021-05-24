<template>
  <div id="app">
    <div class="background"></div>
    <myHeader></myHeader>
    <router-view></router-view>
  </div>
</template>

<script>
import myHeader from "./components/header.vue"
export default {
  name: 'App',
  components:{
    myHeader
  }
}
</script>

<style>
@import './assets/bootstrap.min.css';
@import './assets/common.css'

</style>