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
  margin-top: 1px;
  margin-bottom: 1px;
  background-color: white;
}
</style>
  