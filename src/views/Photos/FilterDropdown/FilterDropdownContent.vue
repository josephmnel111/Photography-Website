<template>
    <transition name = "dropdown-content"></transition>
    <div 
      v-if="active"
      class="filter-dropdown-items"
      >
      <slot/>
    </div>
  </template>
  
  <script>
    export default {
      name: 'FilterDropdownContent',
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
    .filter-dropdown-items {
      position: absolute;
      z-index: 5;
      align-items: center;
      color: black;
      background-color: white;
      border: 1px solid rgba(0, 0, 0, .4);
      border-top-right-radius: 8px;
      border-bottom-left-radius: 8px;
      border-bottom-right-radius: 8px;
      width: 300px;
    }
  </style>
  