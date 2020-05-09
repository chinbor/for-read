<template>
  <div id="home">
    <Navigation />
    <HomeBody />
    
  </div>
</template>

<script>
import Navigation from "components/content/Navigation";
import HomeBody from "views/home/childComp/HomeBody";
export default {
  name: "Home",
  components: {
    Navigation,
    HomeBody,
  }
};
</script>

<style scoped>

</style>