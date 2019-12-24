<template>
  <div id="index">
   <span>这里是index.vue</span>
    <img alt="Vue logo" src="@/assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App(通过index.vue展示)"/>
  </div>
</template>

<script>
import HelloWorld from '../../components/HelloWorld.vue'
export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>

<style>
#index{
    border:1px solid red;
}
</style>
