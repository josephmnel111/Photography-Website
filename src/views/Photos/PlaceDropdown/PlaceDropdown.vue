<template>
    <div>
      <slot name="toggler">
        <button class = "filter-by-button" @click="toggle">
          <div class = "word-container">
            Place
          </div>
          <div class = "symbol-container">
            <font-awesome-icon class = "toggleUpDown" :class='{"rotate": buttonActive}' icon="caret-down"></font-awesome-icon>
          </div>
        </button>
      </slot>
      <slot/>
    </div>
  </template>
  
  <script>
    export default {
      name: 'PlaceDropdown',
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
          buttonActive: false
        }
      },
      methods: {
        toggle () {
          this.sharedState.active = !this.sharedState.active
          this.buttonActive = !this.buttonActive
        }
      }
    }
  </script>
  <style>
  
  .filter-by-button {
    display: flex;
    flex-direction: row;
    border: 1px solid rgba(0, 0, 0, .2);
    margin-left: 2px;
    font-size: 16px;
    padding: 2px;
    height: 6vh;
    width: 13vw;
    background-color: white;
    text-align: left;
    border-radius: 8px;
    align-items: center;
  }
  .word-container {
    width: 50%;
    margin-left: 15px;
  }
  .symbol-container {
    width: 50%;
    text-align: right;
    margin-right: 15px;
    font-size: 18px;
  }
  .toggleUpDown {
    transition: transform .3s ease-in-out !important;  
  }
  .toggleUpDown.rotate {
    transform: rotate(180deg);
  }
  </style>