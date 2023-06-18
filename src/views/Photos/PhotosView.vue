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
                if (option == "Date") {
                    this.photoStore.orderByDate()
                } else {
                    this.photoStore.orderByPlace()
                }
            },
            filterPhotos(index) {
                if (this.photoTags[index].active == true) {
                    this.photoTags[index].active = false
                    this.activeTags.delete(this.photoTags[index].name)
                    this.photoStore.AddPictureByTag(this.activeTags)
                } else {
                    this.photoTags[index].active = true
                    this.activeTags.set(this.photoTags[index].name, index)
                    this.photoStore.AddPictureByTag(this.activeTags)
                }
            }
        },
        data: function() {
            return {
                photoTags: [{id: 0, name: "forest", active: false}, {id: 1, name: "waterfall", active: false}, 
                {id: 2, name: "nature", active: false}, {id: 3, name: "city", active: false},
                {id: 4, name: "outlook", active: false}, {id: 5, name: "hey", active: false},
                {id: 6, name: "there", active: false}, {id: 7, name: "is", active: false},
                {id: 8, name: "a", active: false}, {id: 9, name: "person", active: false},
                {id: 10, name: "to", active: false}, {id: 11, name: "look", active: false},
                {id: 12, name: "out", active: false}, {id: 13, name: "for", active: false},
                {id: 14, name: "what", active: false}, {id: 15, name: "do", active: false},
                {id: 16, name: "you", active: false}, {id: 17, name: "know", active: false},
                ],
                activeTags : new Map()
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
        <div class = "buttons-container">
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
                        <FilterDropdownItem  v-for = "tag in photoTags" :style = "{'background-color': tag.active ? 'black': 'white'}" @click = "filterPhotos(tag.id)">{{ tag.name }}</FilterDropdownItem>
                    </div>
                </FilterDropdownContent>
            </FilterDropdown>
        </div>

        </div>
    </div>
    <div class = "grid">
        <div>
            <img class = "picture" v-for = "photo in photoStore.photos" :style = "{'display': photo.display ? 'inline-block': 'none' }" @click="goToPhoto(photo.id)" :src = "photo.image"/>
        </div>
        <RouterView></RouterView>
    </div>
  </div>
</template>

<style>
.photos-management {
    display: flex;
    flex-direction: row;
    max-width: 100%;
}
.buttons-container {
    display: flex;
    flex-direction: row;
    margin-left: auto;
}
.photos-section {
    margin: auto;
    margin-top: 50px;
}
.picture {
    height: 40vh;
    margin: 3px;
}
.active-tag {
    background-color: black;
}
.inactive-tag {
    background-color: white;
}
button {
    font-family: 'Gotham';
    font-weight: 500;
}
</style>
