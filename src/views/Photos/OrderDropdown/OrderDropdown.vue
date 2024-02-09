<template>
  <div @click="toggle">
    <slot name="toggler">
      <button class = "order-by-button">
        <div class = "word-container">
            Order
        </div>
        <div class = "symbol-container">
          <font-awesome-icon class = "toggleUpDown" :class='{"rotate": this.sharedState.active}' icon="caret-down"></font-awesome-icon>
        </div>
      </button>
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
        },

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
  display: flex;
  flex-direction: row;
  border: 1px solid rgba(0, 0, 0, .2);
  font-size: 16px;
  padding: 2px;
  height: 6vh;
  width: 13vw;
  background-color: white;
  border-radius: 8px;
  align-items: center;
}
</style>