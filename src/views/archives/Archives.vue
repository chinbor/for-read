<template>
  <div id="archives">
    <Navigation whichActive='/archives'/>
    <div class="archives">archives</div>
  </div>
</template>

<script>
  import Navigation from "components/content/Navigation";
  export default {
    name: "Archives",
    components: {
      Navigation
    }
  }
</script>

<style scoped>
.archives {
  position: relative;
  top: 100px;
}
</style>