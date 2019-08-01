<template>
  <ul class="side-nav">
    <router-link
      :to="item.path"
      tag="li"
      class="side-item"
      v-for="(item,idx) in $router.options.routes[0].children"
      :key="'side_'+idx"
    >{{item.meta.name}}</router-link>
  </ul>
</template>

<script>
export default {
  name: "sideNav"
};
</script>

<style scoped lang = "scss">
.side-nav {
  width: 150px;
  background: yellow;
}
</style>
