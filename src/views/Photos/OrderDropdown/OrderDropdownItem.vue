<template>
    <div @click = "OrderByValue()" class = "order-item">
      <div>
        <slot/>
      </div>
    </div>
  </template>
  
  <script>
    export default {
        name: "OrderDropdownItem",
        methods: {
          OrderByValue() {
            console.log('hi')
          }
        }
    };
  </script>
<style>
.order-item {
  background-color: white;
  display: flex;
  align-items: center;
}
</style>
  