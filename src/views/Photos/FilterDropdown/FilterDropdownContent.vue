<template>
     <transition name = "slide">
      <div 
        v-if="active"
        class="filter-dropdown-items"
        >
        <slot/>
      </div>
    </transition>
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
    .filter-dropdown-items {
      margin-top: 5px;
      margin-left: 2px;
      position: absolute;
      z-index: 5;
      align-items: center;
      color: black;
      background-color: white;
      font-family: 'Gotham';
      border: 1px solid rgba(0, 0, 0, .2);
      border-radius: 12px;
      width: 400px;
      transform-origin: top;
      transition: transform .3s ease-in-out;
      overflow: hidden;
    }
    .slide-enter, .slide-leave-to{
      transform: scaleY(0);
    }
  </style>
  