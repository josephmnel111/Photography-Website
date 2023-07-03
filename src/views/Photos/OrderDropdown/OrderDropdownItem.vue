<template>
    <div class = "order-item">
      <div>
        <slot/>
      </div>
    </div>
  </template>
  
  <script>
    export default {
        name: "OrderDropdownItem",
        methods: {
        }
    };
  </script>
<style>
.order-item {
  background-color: white;
  display: flex;
  align-self: center;
}
</style>
  