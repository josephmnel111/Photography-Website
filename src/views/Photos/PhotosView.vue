<script>
    import {defineComponent} from 'vue'
    import {usePhotoStore} from '../../assets/store/photoStore'
    export default defineComponent({

        setup() {
            const photoStore = usePhotoStore()

            return {photoStore}
        },

        methods: {
            goToPhoto(id) {
                this.$router.push({
                    name: 'individual-photo-view',
                    params: {
                        id: id,
                    }
                })
            }
        }
    })

</script>
<template>
  <div class="photos-section">
    <div class = "grid">
        <div v-for = "photo in photoStore.photos">
            <img @click="goToPhoto(photo.id)" src = "./imgs/download.jpg"/>
            {{ photo.id }}
            <RouterView></RouterView>
        </div>
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
