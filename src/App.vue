<template>
  <div id="app">
    <link rel="stylesheet" href="./assets/bootstrap-5.0.0-beta2-dist/css/bootstrap.css">
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
