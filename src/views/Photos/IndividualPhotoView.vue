<script> 
import {defineComponent} from 'vue'
import {usePhotoStore} from '../../assets/store/photoStore'
import {useRoute} from 'vue-router'
export default defineComponent({

    setup() {
        const route = useRoute()

        const photoStore = usePhotoStore()

        return {photoStore}
    }
})

</script>
<template>
    <div class="individual-photo-section">
        <div class = "content">
            {{ this.$route.params.id }}
        </div>
    </div>
  </template>
<style>
.content {
    height: 50px;
    width: 50px;
}
</style>