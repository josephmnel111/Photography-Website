<script> 
import {defineComponent} from 'vue'
import {usePhotoStore} from '../../assets/store/photoStore'
import {useRoute} from 'vue-router'
export default defineComponent({

    setup() {
        const route = useRoute()
        const photoStore = usePhotoStore()

        return {photoStore}
    },
    data: function() {
        return {
            activePhotoId: this.$route.params.id - 1,
            displayActive: false
        }
    },
    methods: {
        clickLeftArrow(id) {
            if (id == 1) {
                id = this.photoStore.photos.length
            } else {
               id = Number(id) - 1
            }
            this.$router.push({
                name: 'individual-photo-view',
                params: {
                    id: id
                }
            })
        },
        clickRightArrow(id) {
            if (id == this.photoStore.photos.length) {
                id = 1
            } else {
               id = Number(id) + 1
            }
            this.$router.push({
                name: 'individual-photo-view',
                params: {
                    id: id
                }
            })
        }
    }
})

</script>
<template>
    <div class="individual-photo-section">
        <div class = "content">
            <div @click="clickLeftArrow(this.$route.params.id)">
                <font-awesome-icon class="left-arrow" icon="chevron-left"></font-awesome-icon>
            </div>
            <div class = "picture-container">
                <img class = "individual-picture" :src = "photoStore.photos[this.$route.params.id - 1].image"/>
            </div>
            <div class = "right-arrow" @click="clickRightArrow(this.$route.params.id)">
                <font-awesome-icon icon="chevron-right"></font-awesome-icon>
            </div>
        </div>
    </div>
  </template>
<style>
.individual-photo-section {
    display: flex;
    flex-direction: row;
}
.individual-picture {
    height: 60vh;
}
.left-arrow {
    position: absolute;
    font-size: 24px;
    left: 0;
    margin-left: 20vw;
}
.picture-container {
    position: relative;
}
.right-arrow {
    position: absolute;
    font-size: 24px;
    right: 0;
    margin-right: 20vw;
}
.content {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
}
</style>