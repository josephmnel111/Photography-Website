<script>
import { RouterLink, RouterView } from 'vue-router'

</script>
<template>
    <div class="header">
        <div class = "header-left">

        </div>
        <div class = "header-right">
            <nav>
                <RouterLink to="/" class = "router-link">Home</RouterLink>
                <RouterLink to="/about" class = "router-link">About</RouterLink>
                <RouterLink to="/photos" class = "router-link">Photos</RouterLink>
                <RouterLink to="/contact-me" class = "router-link">Contact Me</RouterLink>
            </nav>
        </div>
    </div>
  <RouterView />
  </template>
<style>
    .header {
        text-align: center;
        display: flex;
        justify-content: space-around;
        position: fixed;
        font-family: 'Gotham';
        top: 0;
        left: 0;
        width: 100%;
        height: 50px;
        line-height: 50px;
        z-index: 10;
        background-color: white;
        border-bottom: 2px solid rgba(0, 0, 0, .2);
    }
    .router-link:hover {
        background-color: white;
    }
    .router-link {
        margin: 2vw;
        color: black;
        font-weight: 1000;
        font-size: 14px;
    }
    .header-left {
        width: 50%;
    }
    .header-right {
        width: 50%;
    }
</style>