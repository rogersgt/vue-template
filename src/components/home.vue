<style lang="scss">
.outerSection {
  width: 80%;
  margin: 0 10%;
  top: 5%;
  text-align: center;
  img {
    width: 50%;
  }
}
</style>
<template lang="html">
<section class="outerSection">
  <img v-bind:src="imgSrc" alt="Bill Murray" />
  <h3>He's the king!</h3>
</section>
</template>
<script>
import bmurray from '../media/bmurray.jpg';

export default {
  data: function() {
    return {
      imgSrc: bmurray,
    };
  },
  created: function() {
    console.log('CREATED HOME VUE');
  }
}
</script>
