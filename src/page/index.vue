<template>
  <div class="mian">
    <div class="df-b">
    <side-nav class = "fn"></side-nav>        
    <router-view class ="fa"/>
    </div>
  </div>
</template>

<script>
import sideNav from "./components/sideNav";
export default {
  components: {sideNav},
  created() {
    console.log(this.$router.options.routes[0].childern);
  }
};
</script>

<style lang ="scss">
.df-b{
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.fn{
    flex:none;
}
.fa{
    flex:auto;
}
</style>
