<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  created(){
    console.log(this.$store);
  }
}
</script>

<style>
body,html,div,ul,li,h1,h2,h3,h4,h5,h6,ol{
  margin:0;
  padding:0;
}
li{
  list-style: none;
}
</style>
