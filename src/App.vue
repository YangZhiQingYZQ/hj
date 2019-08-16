<template>
  <div id="app">
    <!-- <el-input v-model = "num"></el-input>
    <div>{{num * 750/414}}</div> -->
    <router-view/>
  </div>
</template>

<script>
import axios from "axios"
export default {
  name: 'App',
  data(){
    return {
      num :""
    }
  },
  created(){
    axios.post("/rst-contract/contractManagement/findByContractCode",{aa:"11"}).then(res=>{
      console.log(res);
    })
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
