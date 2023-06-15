<script setup>
</script>
<template>
  <div class="about-container">
    <div class="about">
      <h1>This is an about page</h1>
      <DocumentationIcon/>
    </div>
  </div>
</template>

<style>
  .about-container {
    position: relative;
    height: 100vh;
    width: 100vw;
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