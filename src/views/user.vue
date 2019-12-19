<template>
  <div id="user">
   <span>这里是user.vue</span>
    <img alt="Vue logo" src="@/assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App(通过user.vue展示)"/>
  </div>
</template>

<script>
import HelloWorld from '../components/HelloWorld.vue'
export default {
  name: 'index',
  components: {
    HelloWorld
  }
}
</script>

<style>
#user{
    border:1px solid red;
}
</style>
