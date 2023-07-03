<template>
    <div class = "order-item">
      <div>
        <slot/>
      </div>
    </div>
  </template>
  
  <script>
    export default {
        name: "TagDropdownItem",
        
    };
  </script>
<style>
.order-item {
  background-color: white;
}
</style>
  