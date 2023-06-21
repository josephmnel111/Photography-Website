<template>
    <div @click = "FilterByValue()" class = "order-item">
      <div>
        <slot/>
      </div>
    </div>
  </template>
  
  <script>
    export default {
        name: "FilterDropdownPlace",
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
  