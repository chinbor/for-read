<template>
  <div id="app">
    <!-- 其他的路由将会在这里显示 -->
    <router-view name='notbackstage'></router-view>
    <!-- 后台路由将会在这里显示（我将后台做成的打开新窗口） -->
    <router-view name='backstage'></router-view>
  </div>
</template>

<script>
// import Navigation from "components/content/Navigation";
export default {
  name: "App",
};
</script>

<style>

</style>
