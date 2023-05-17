<script>
    export default {
        data() {
            return {
                photos:[
                './imgs/download.jpg', './imgs/download.jpg', './imgs/download.jpg', 
                './imgs/download.jpg', './imgs/download.jpg', './imgs/download.jpg',
                './imgs/download.jpg', './imgs/download.jpg', './imgs/download.jpg',
                './imgs/download.jpg', './imgs/download.jpg', './imgs/download.jpg', 
                './imgs/download.jpg', './imgs/download.jpg', './imgs/download.jpg',
                './imgs/download.jpg', './imgs/download.jpg', './imgs/download.jpg',
                './imgs/download.jpg', './imgs/download.jpg', './imgs/download.jpg', 
                './imgs/download.jpg', './imgs/download.jpg', './imgs/download.jpg',
                './imgs/download.jpg', './imgs/download.jpg', './imgs/download.jpg',
                ]
            }
        }
    }
</script>
<template>
  <div class="photos-section">
    <div class = "grid">
        <img v-for = "photo in photos" src = "./imgs/download.jpg"/>
    </div>
  </div>
</template>

<style>
grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
}
.photos-section {
    display: flex;
    margin: auto;
    height: 100%;
    width: 100vw;
    margin-top: 50px;
}
.picture {

}
</style>
