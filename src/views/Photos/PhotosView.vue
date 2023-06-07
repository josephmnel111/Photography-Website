<script>
    import {defineComponent} from 'vue'
    import {usePhotoStore} from '../../assets/store/photoStore'
    import OrderDropdown from './OrderDropdown/OrderDropdown.vue'
    import OrderDropdownContent from './OrderDropdown/OrderDropdownContent.vue'
    import OrderDropdownItem from './OrderDropdown/OrderDropdownItem.vue'
    import FilterDropdown from './FilterDropdown/FilterDropdown.vue'
    import FilterDropdownContent from './FilterDropdown/FilterDropdownContent.vue'
    import FilterDropdownItem from './FilterDropdown/FilterDropdownItem.vue'

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
                console.log(option)
                if (option == "Date") {
                    this.photoStore.orderByDate()
                } else {
                    this.photoStore.orderByPlace()
                }
                console.log(this.photoStore.photos)
            },
            filterPhotos(option) {
                console.log(option)
            }
        },
        data: function() {
            return {
                photoTags: ["forest", "waterfall", "nature", "city", "outlook", "hey", "there",
                "is", "a", "person", "to", "look", "out", "for", "what", "do", "you", "know"
            ]
            }
        },
        components: {
    OrderDropdown,
    OrderDropdownContent,
    OrderDropdownItem,
    FilterDropdown,
    FilterDropdownContent,
    FilterDropdownItem
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
                    <OrderDropdownItem @click = "orderPhotos('Date')">Date</OrderDropdownItem>
                    <OrderDropdownItem @click = "orderPhotos('Place')">Place</OrderDropdownItem>
                </OrderDropdownContent>
            </OrderDropdown>
        </div>
        <div class = "filter-by-container">
            <FilterDropdown>
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
                <FilterDropdownContent>
                    <div class = "filter-by-items">                    
                        <FilterDropdownItem  v-for = "tag in photoTags"  @click = "filterPhotos(tag)">{{ tag }}</FilterDropdownItem>
                    </div>
                </FilterDropdownContent>
            </FilterDropdown>
        </div>
        
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
.filter-by-container {
    border: 2px solid rgba(0, 0, 0, .4);
    margin-left: 2px;
}
.filter-by-items {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      grid-template-rows: 50px 50px 50px 50px;
      grid-auto-flow: row;
      place-items: center;

}
</style>
