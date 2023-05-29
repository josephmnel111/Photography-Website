<template>
  <div @click="toggle">
    <slot name="toggler">
      <button class = "order-by-button">Toggle</button>
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
    margin-left: 3px;
    font-size: 16px;
    padding: 2px;
    height: 30px;
    width: 90px;
    border: none;
    background-color: white;
}
</style>