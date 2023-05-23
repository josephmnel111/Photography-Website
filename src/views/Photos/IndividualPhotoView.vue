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
            activePhotoId: this.$route.params.id - 1
        }
    },
    methods: {
        clickLeftArrow() {
            if (this.activePhotoId == 0) {
                this.activePhotoId = this.photoStore.photos.length - 1
            } else {
                this.activePhotoId = this.activePhotoId - 1
            }
        },
        clickRightArrow() {
            if (this.activePhotoId == this.photoStore.photos.length - 1) {
                this.activePhotoId = 0
            } else {
                this.activePhotoId = this.activePhotoId + 1
            }
        }
    }
})

</script>
<template>
    <div class="individual-photo-section">
        <div class = "left-arrow" @click="clickLeftArrow()">
            {{ '<' }}
        </div>
        <div class = "content">
            <img :src = "photoStore.photos[activePhotoId].image"/>
        </div>
        <div class = "right-arrow" @click="clickRightArrow()">
            {{ '>' }}
        </div>
    </div>
  </template>
<style>
.individual-photo-section {
    display: flex;
    flex-direction: row;
}
.content {
}
</style>