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
        displayData() {
            this.displayActive = !this.displayActive
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
            <div class = "left-arrow" @click="clickLeftArrow(this.$route.params.id)">
                {{ '<' }}
            </div>
            <div class = "picture-container">
                <div class = "info-button" @click="displayData()">
                    i
                </div>    
                <div :class = "displayActive? 'picture-data display-active': 'picture-data display-inactive'">
                    <div class = "place">
                        Place: {{ photoStore.photos[this.$route.params.id - 1].data.place }}
                    </div>
                    <div class = "date">
                        Date:  
                    </div>
                    <div class = "size">
                        Size: {{ photoStore.photos[this.$route.params.id - 1].data.size }}
                    </div>
                    <div class = "tags">
                        Tags: {{ photoStore.photos[this.$route.params.id - 1].data.tags }}
                    </div>
                </div>
                <img class = "individual-picture" :src = "photoStore.photos[this.$route.params.id - 1].image"/>
            </div>
            <div class = "right-arrow" @click="clickRightArrow(this.$route.params.id)">
                {{ '>' }}
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
.info-button {
    color: white;
    font-size: 24px;
    position: absolute;
    z-index: 2;
    right: 0;
}
.left-arrow {
    position: absolute;
    left: 0;
    margin-left: 20px;
}
.picture-container {
    position: relative;
}
.display-active {
    display: inline;
}
.display-inactive {
    display: none;
}
.picture-data {
    background-color: black;
    color: white;
    position: absolute;
    height: 100%;
    width: 100%;
    opacity: .75;
    z-index: 1;
}
.right-arrow {
    position: absolute;
    right: 0;
    margin-right: 20px;
}
.content {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
}
</style>