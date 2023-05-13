<script>
import { RouterLink, RouterView } from 'vue-router'

</script>
<template>
    <div class="header">
        <nav>
            <RouterLink to="/" class = "router-link">Home</RouterLink>
            <RouterLink to="/about" class = "router-link">About</RouterLink>
            <RouterLink to="/photos" class = "router-link">Photos</RouterLink>
            <RouterLink to="/contact-me" class = "router-link">Contact Me</RouterLink>
        </nav>
    </div>
  <RouterView />
  </template>
<style>
    .header {
        text-align: center;
        display: flex;
        justify-content: space-around;
        position: fixed;
        font-family: 'Poppins';
        top: 0;
        left: 0;
        width: 100%;
        font-weight: bold;
        height: 50px;
        line-height: 50px;
        z-index: 10;
        background-color: white;
        border-bottom: 2px solid rgba(0, 0, 0, .2);
    }
    .router-link {
        margin: 5vw;
        color: black;
        font-size: 20px;
    }
</style>