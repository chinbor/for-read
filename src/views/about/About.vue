<template>
  <div id="about">
    <Navigation whichActive='/about'/>
    <div class="about">about</div>
  </div>
</template>

<script>
  import Navigation from "components/content/Navigation";

  export default {
    name: "About",
    components: {
      Navigation
    }
  }
</script>

<style scoped>
.about {
  position: relative;
  top: 100px;
}
</style>