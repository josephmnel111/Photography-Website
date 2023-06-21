<template>
    <div @click = "FilterByValue()" class = "order-item">
      <div>
        <slot/>
      </div>
    </div>
  </template>
  
  <script>
    export default {
        name: "FilterDropdownItem",
        methods: {
          FilterByValue() {
            
          }
        }
    };
  </script>
<style>
.order-item {
  background-color: white;
}
</style>
  