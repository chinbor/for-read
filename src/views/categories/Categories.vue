<template>
  <div id="categories">
    <Navigation whichActive='/categories' />
    <div class="categories">categories</div>
  </div>
</template>

<script>
  import Navigation from "components/content/Navigation";

  export default {
    name: "Categories",
    components: {
      Navigation
    }
  }
</script>

<style scoped>
.categories {
  position: relative;
  top: 100px;
}
</style>