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
    margin-left: 2px;
    z-index: 5;
    position: absolute;
    align-items: center;
    display: flex;
    flex-direction: column;
    color: black;
    font-family: 'Gotham';
    background-color: white;
    border: 2px solid rgba(0, 0, 0, .4);
    width: 90px;

  }
</style>
