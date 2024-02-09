<script>
    import {defineComponent} from 'vue'
    import {usePhotoStore} from '../../assets/store/photoStore'
    import OrderDropdown from './OrderDropdown/OrderDropdown.vue'
    import OrderDropdownContent from './OrderDropdown/OrderDropdownContent.vue'
    import OrderDropdownItem from './OrderDropdown/OrderDropdownItem.vue'
    import TagDropdown from './TagDropdown/TagDropdown.vue'
    import TagDropdownContent from './TagDropdown/TagDropdownContent.vue'
    import TagDropdownItem from './TagDropdown/TagDropdownItem.vue'
    import PlaceDropdown from './PlaceDropdown/PlaceDropdown.vue'
    import PlaceDropdownContent from './PlaceDropdown/PlaceDropdownContent.vue'
    import PlaceDropdownItem from './PlaceDropdown/PlaceDropdownItem.vue'

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
                    this.dateOrderActive = true
                    this.placeOrderActive = false
                    this.photoStore.orderByDate()
                } else {
                    this.dateOrderActive = false
                    this.placeOrderActive = true
                    this.photoStore.orderByPlace()
                }
            },
            filterPhotoItems(index) {
                console.log('hi')
                if (this.photoItems[index].active == true) {
                    this.photoItems[index].active = false
                    this.activeItems.delete(this.photoItems[index].name)
                    this.photoStore.addPictureByTag(this.activeItems, this.activePlaces)
                } else {
                    this.photoItems[index].active = true
                    this.activeItems.set(this.photoItems[index].name)
                    this.photoStore.addPictureByTag(this.activeItems, this.activePlaces)
                }
            },
            filterPhotoPlaces(index) {
                if (this.photoPlaces[index].active == true) {
                    this.photoPlaces[index].active = false
                    this.activePlaces.delete(this.photoPlaces[index].name)
                    this.photoStore.addPictureByTag(this.activeItems, this.activePlaces)
                } else {
                    this.photoPlaces[index].active = true
                    this.activePlaces.set(this.photoPlaces[index].name)
                    this.photoStore.addPictureByTag(this.activeItems, this.activePlaces)
                }

            }
        },
        data: function() {
            return {
                photoItems: [{id: 0, name: "forest", active: false}, {id: 1, name: "waterfall", active: false}, 
                            {id: 2, name: "nature", active: false}, {id: 3, name: "city", active: false},
                            {id: 4, name: "outlook", active: false}, {id: 5, name: "hey", active: false},
                            {id: 6, name: "there", active: false}, {id: 7, name: "is", active: false},
                            {id: 8, name: "a", active: false}, {id: 9, name: "person", active: false},
                            {id: 10, name: "to", active: false}, {id: 11, name: "look", active: false},
                            {id: 12, name: "out", active: false}, {id: 13, name: "for", active: false},
                            {id: 14, name: "what", active: false}, {id: 15, name: "do", active: false},
                            {id: 16, name: "you", active: false}, {id: 17, name: "know", active: false},
                ],
                photoPlaces: [{id: 0, name: "Tokyo", active: false},{id: 1, name: "San Francisco", active: false},
                              {id: 2, name: "New York City", active: false},{id: 3, name: "Los Angeles", active: false},
                              {id: 4, name: "Washington D.C.", active: false},{id: 5, name: "Miami", active: false},
                ],
                dateOrderActive: true,
                placeOrderActive: false,
                activeItems : new Map(),
                activePlaces: new Map()
            }
        },
        components: {
    OrderDropdown,
    OrderDropdownContent,
    OrderDropdownItem,
    TagDropdown,
    TagDropdownContent,
    TagDropdownItem,
    PlaceDropdown,
    PlaceDropdownContent,
    PlaceDropdownItem,
}
    })

</script>
<template>
  <div class="photos-section">
    <div class = "photos-management">
        <div class = "buttons-container">
            <div class = "order-by-container">
            <OrderDropdown>
                <OrderDropdownContent>
                    <OrderDropdownItem @click = "orderPhotos('Date')" :class="dateOrderActive? 'order-active': 'order-inactive'">
                        <div class = "order-item-values">
                            Date
                        </div>
                    </OrderDropdownItem>
                    <OrderDropdownItem @click = "orderPhotos('Place')" :class="placeOrderActive? 'order-active': 'order-inactive'">
                        <div class = "order-item-values">
                            Place
                        </div>
                    </OrderDropdownItem>
                </OrderDropdownContent>
            </OrderDropdown>
        </div>
        <div class = "filter-by-container">
            <TagDropdown>
                <TagDropdownContent>
                    <div class = "filter-options">
                        <div class = "filter-items-container">
                            <div class = "filter-by-items">                    
                                <TagDropdownItem v-for = "item in photoItems" :class="item.active? 'filter-item-active': 'filter-item-inactive'" @click = "filterPhotoItems(item.id)">
                                        {{ item.name }}
                                </TagDropdownItem>
                            </div>
                        </div>
                    </div>
                </TagDropdownContent>
            </TagDropdown>
        </div>

        <div class = "order-by-container">
            <PlaceDropdown>
                <PlaceDropdownContent>
                    <div class = "filter-options">
                        <div class = "filter-items-container">
                            <div class = "filter-item-values">                    
                                <PlaceDropdownItem v-for = "item in photoPlaces" :class="item.active? 'order-active': 'order-inactive'" @click = "filterPhotoPlaces(item.id)">
                                    <div class = "order-item-values">
                                        {{ item.name }}
                                    </div>
                                </PlaceDropdownItem>
                            </div>
                        </div>
                    </div>
                </PlaceDropdownContent>
            </PlaceDropdown>
        </div>

        </div>
    </div>
    <div class = "picture-container">
        <div class = "picture-div">
            <img class = "picture" v-for = "photo in photoStore.photos" :style = "{'display': photo.display ? 'inline-block': 'none'}" @click="goToPhoto(photo.id)" :src = "photo.image"/>
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
    margin-top: 5px;
    margin-bottom: 5px;
}
.order-by-container {
    margin-left: 10px;
}
.filter-by-container {
    margin-left: 20px;
}
.filter-by-items {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 50px 50px 50px 50px 50px;
    grid-auto-flow: row;
    place-items: center;
}
.filter-by-place {
    place-items: center;
}
.filter-title {
    text-align: center;
}
.picture-container {
    display: flex;
}
.picture-div {
    text-align: center;
}

.filter-places-container {
    text-align: center;
}
.filter-separator-container {
    width: 2px;
    color: black;
    background-color: black;
    height: 100%;
}
.order-item-values {
    display: flex;
    align-items: center;
    padding-left: 15px;
    height: 5vh;
}
.order-item-values:hover {
    background-color: #eeeee4;
}
.order-active {
    height: 100%;
    width: 100%;
    background-color: #e6e6db;
}
.order-inactive {
    height: 100%;
    width: 100%;
    background-color: white;
}
.filter-item-active:hover 
{
    border-radius: 10px;
    background-color: #eeeee4
}
.filter-item-inactive:hover
{
    border-radius: 10px;
    background-color: #eeeee4
}
.filter-item-active {
    background-color: #e6e6db;
    border-radius: 10px;
    padding: 5px;
}
.filter-item-inactive {
    background-color: white;
    padding: 5px;
}
.filter-place-active {
    background-color: #eeeee4;
    border-radius: 10px;
    padding: 5px;
}
.filter-place-inactive {
    background-color: white;
    padding: 5px;
}
.photos-section {
    margin: auto;
    margin-top: 50px;
    background-color: #F9F9F9;
    height: 100vh;
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
