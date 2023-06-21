<template>
  <div @click="toggle">
    <slot name="toggler">
      <button class = "order-by-button">Order</button>
    </slot>
    <slot/>
  </div>
</template>

<script>
  export default {
    name: 'OrderDropdown',
    provide () {
      return {
        sharedState: this.sharedState
      }
    },
    data () {
      return {
        sharedState: {
          active: false
        }
      }
    },
    methods: {
      toggle () {
        this.sharedState.active = !this.sharedState.active
      }
    }
  }
</script>
<style>

.order-by-button {
    border: 1px solid rgba(0, 0, 0, .2);
    font-size: 16px;
    padding: 2px;
    height: 30px;
    width: 90px;
    background-color: white;
}
</style>