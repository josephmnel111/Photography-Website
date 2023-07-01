<template>
  <transition name = "slide">
  <div 
    v-if="active"
    class="order-dropdown-items"
    >
    <slot/>
  </div>
</transition>
</template>

<script>
  export default {
    name: 'OrderDropdownContent',
    inject: ['sharedState'],
    computed: {
      active () {
        return this.sharedState.active
      }
    }
  }
</script>
<style>
  .order-dropdown-items {
    margin-top: 5px;
    z-index: 5;
    position: absolute;
    display: flex;
    flex-direction: column;
    color: black;
    font-family: 'Gotham';
    background-color: white;
    border: 1px solid rgba(0, 0, 0, .2);
    border-radius: 8px;
    width: 13vw;
    height: 12vh;
    transform-origin: top;
    transition: transform .3s ease-in-out;
    overflow: hidden;
  }
  .slide-enter, .slide-leave-to{
    transform: scaleY(0);
  }
</style>
