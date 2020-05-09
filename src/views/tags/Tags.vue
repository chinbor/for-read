<template>
  <div id="tags">
    <Navigation whichActive='/tags' />
    <div class="tags">tags</div>
  </div>
</template>

<script>
  import Navigation from "components/content/Navigation";
  export default {
    name: "Tags",
    components: {
      Navigation
    }
  }
</script>

<style scoped>
.tags {
  position: relative;
  top: 100px;
}
</style>