<template>
  <headerCom />
  <router-view></router-view>
</template>

<script>
import headerCom from './components/headerCom.vue';

export default {
  name: 'App',
  components: {
    headerCom,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
