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
  .dropdown-content-enter-active,
  .dropdown-content-leave-active {
    transition: all 0.2s;
  }
  .dropdown-content-enter,
  .dropdown-content-leave-to {
    opacity: 0;
    transform: translateY(-5px);
  }
  .order-dropdown-items {
    z-index: 5;
    position: absolute;
    align-items: center;
    display: flex;
    flex-direction: column;
    color: black;
    background-color: white;
    width: 90px;

  }
</style>
