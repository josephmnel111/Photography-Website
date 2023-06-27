<template>
    <div>
      <slot name="toggler">
        <button class = "filter-by-button" @click="toggle">Filter</button>
      </slot>
      <slot/>
    </div>
  </template>
  
  <script>
    export default {
      name: 'FilterDropdown',
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
  
  .filter-by-button {
    border: 1px solid rgba(0, 0, 0, .2);
    margin-left: 2px;
    font-size: 16px;
    padding: 2px;
    height: 30px;
    width: 90px;
    background-color: white;
  }
  </style>