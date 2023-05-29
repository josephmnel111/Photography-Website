<script>
    import {defineComponent} from 'vue'
    import {usePhotoStore} from '../../assets/store/photoStore'
    import OrderDropdown from './OrderDropdown/OrderDropdown.vue'
    import OrderDropdownContent from './OrderDropdown/OrderDropdownContent.vue'
    import OrderDropdownItem from './OrderDropdown/OrderDropdownItem.vue'

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
            },
            orderPhotos(option) {
                if (option == "Date") {
                    this.photoStore.orderByDate()
                } else {
                    this.photoStore.orderByPlace()
                }
            }
        },
        components: {
            OrderDropdown,
            OrderDropdownContent,
            OrderDropdownItem
        }
    })

</script>
<template>
  <div class="photos-section">
    <div class = "photos-management">
        <div class = "order-by-container">
            <OrderDropdown>
                <template slot="toggler">
                <button
                    class = "order-by-button"
                >
                    Click me
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    >
                    <path
                        d="M15.3 9.3a1 1 0 0 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.4l3.3 3.29 3.3-3.3z"
                    ></path>
                    </svg>
                </button>
                </template>
                <OrderDropdownContent>
                <OrderDropdownItem>Date</OrderDropdownItem>
                <OrderDropdownItem>Place</OrderDropdownItem>
                </OrderDropdownContent>
            </OrderDropdown>
        </div>
        
    </div>
        <div class = "filter-by">
            Filter by
        </div>
    <div class = "grid">
        <div>
            <img class = "picture" v-for = "photo in photoStore.photos" @click="goToPhoto(photo.id)" :src = "photo.image"/>
        </div>
        <RouterView></RouterView>
    </div>
  </div>
</template>

<style>
grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
}
.photos-management {
    display: flex;
    flex-direction: row;
    width: 100vw;
}
.order-by {
    margin-right: 5%;
    margin-left: 2%;
    border: 2px solid rgba(0, 0, 0, .4);
    border-radius: 15%;
    padding: 2px;
}
.filter-by {
    border: 2px solid rgba(0, 0, 0, .4);
    border-radius: 15%;
    padding: 2px;
}
.photos-section {
    margin: auto;
    margin-top: 50px;
}
.picture {
    height: 40vh;
    margin: 5px;
}
.order-by-container {
    border: 2px solid rgba(0, 0, 0, .4);
    margin-left: 2px;
}
</style>
