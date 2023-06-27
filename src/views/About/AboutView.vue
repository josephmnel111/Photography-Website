<script>
  export default {
    data () {
      return {
        aboutStory: "Kylie JOnes"

      }
    }
  }
</script>
<template>
  <div class="about-container">
    <div class="about">
      <div class = "about-story">
        {{ aboutStory }}
      </div>
      <div class = "about-image">

      </div>
    </div>
  </div>
</template>

<style>
  .about-container {
    position: relative;
    height: 100vh;
    width: 100vw;
  }
  .about-story {
    left: 50%;
  }
  .about-image {
    right: 50%;
  }
  .about {
    font-size: 15px;
    font-family: 'Gotham';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

</style>