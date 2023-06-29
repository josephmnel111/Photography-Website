<template>
  <transition name = "dropdown-content"></transition>
  <div 
    v-if="active"
    class="order-dropdown-items"
    >
    <slot/>
  </div>
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
    z-index: 5;
    position: absolute;
    align-items: center;
    display: flex;
    flex-direction: column;
    color: black;
    font-family: 'Gotham';
    background-color: white;
    border: 1px solid rgba(0, 0, 0, .2);
    width: 13vw;
    height: 12vh;

  }
</style>
