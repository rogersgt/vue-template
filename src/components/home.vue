<style lang="scss">
.outerSection {
  width: 80%;
  margin: 0 10%;
  top: 5%;
  text-align: center;
  img {
    width: 100%;
  }
}
</style>
<template lang="html">
<section class="outerSection">
  <img src="media/bmurray.jpg" alt="Bill Murray" />
  <h3>He's the king!</h3>
</section>
</template>
<script>
export default {
  data: function() {
    return {};
  },
  created: function() {
    console.log('CREATED HOME VUE');
  }
}
</script>
