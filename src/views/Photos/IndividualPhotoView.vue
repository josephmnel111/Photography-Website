<script>
</script>
<template>
    <div class="individual-photo-section">
        hey
        <div class = "content">
            id: {{ $route.params.id }}
            username: {{ $history.state }}
        </div>
    </div>
  </template>
<style>
.content {
    height: 50px;
    width: 50px;
}
</style>