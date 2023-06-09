import {RouterView} from 'vue-router'
import {defineStore} from 'pinia'
import picture from './imgs/download.jpg'
import picture2 from './imgs/download2.jpg'

    export const usePhotoStore = defineStore({
        id: "photoStore",
        state: () => ({
            photos:[{id: 1, image: picture, display: true, data: {size: "", place: "Tokyo", tags: ['forest'], date: "5/30/2023"}}, {id: 2, image: picture2, display: true, data: {size: "", place: "San Francisco", tags: ['forest'], date: "5/19/2023"}}, {id: 3, image: picture, display: true, data: {size: "", place: "America", tags: [], date: "5/15/2023"}}, {id: 4, image: picture, display: true, data: {size: "", place: "America", tags: [], date: "5/15/2023"}}, {id: 5, image: picture, display: true, data: {size: "", place: "America", tags: [], date: "5/15/2023"}}, {id: 6, image: picture, display: true, data: {size: "", place: "America", tags: [], date: "5/15/2023"}}, {id: 7, image: picture, display: true, data: {size: "", place: "America", tags: [], date: "5/15/2023"}}
                , {id: 8, image: picture, display: true, data: {size: "", place: "America", tags: ['waterfall'], date: "5/15/2023"}}, {id: 9, image: picture, display: true, data: {size: "", place: "America", tags: [], date: "5/15/2023"}}, {id: 10, image: picture, display: true, data: {size: "", place: "America", tags: [], date: "5/15/2023"}}, {id: 11, image: picture, display: true, data: {size: "", place: "America", tags: [], date: "5/15/2023"}}, {id: 12, image: picture, display: true, data: {size: "", place: "America", tags: [], date: "5/15/2023"}}, {id: 13, image: picture, display: true, data: {size: "", place: "America", tags: [], date: "5/15/2023"}}, {id: 14, image: picture, display: true, data: {size: "", place: "America", tags: [], date: "5/15/2023"}}
                , {id: 15, image: picture, display: true, data: {size: "", place: "America", tags: [], date: "5/15/2023"}}, {id: 16, image: picture, display: true, data: {size: "", place: "America", tags: [], date: "5/15/2023"}}, {id: 17, image: picture, display: true, data: {size: "", place: "America", tags: [], date: "5/15/2023"}}, {id: 18, image: picture, display: true, data: {size: "", place: "America", tags: [], date: "5/15/2023"}}, {id: 19, image: picture, display: true, data: {size: "", place: "America", tags: [], date: "5/15/2023"}}, {id: 20, image: picture, display: true, data: {size: "", place: "America", tags: [], date: "5/15/2023"}}, {id: 21, image: picture, display: true, data: {size: "", place: "America", tags: [], date: "5/15/2023"}}
                , {id: 22, image: picture, display: true, data: {size: "", place: "America", tags: [], date: "5/15/2023"}}, {id: 23, image: picture, display: true, data: {size: "", place: "America", tags: [], date: "5/15/2023"}}, {id: 24, image: picture, display: true, data: {size: "", place: "America", tags: [], date: "5/15/2023"}}, {id: 25, image: picture, display: true, data: {size: "", place: "America", tags: [], date: "5/15/2023"}}, {id: 26, image: picture, display: true, data: {size: "", place: "America", tags: [], date: "5/15/2023"}}, {id: 27, image: picture, display: true, data: {size: "", place: "America", tags: [], date: "5/15/2023"}}, {id: 28, image: picture, display: true, data: {size: "", place: "America", tags: [], date: "5/15/2023"}}
                , {id: 29, image: picture, display: true, data: {size: "", place: "America", tags: [], date: "5/15/2023"}}, {id: 30, image: picture, display: true, data: {size: "", place: "America", tags: [], date: "5/15/2023"}}, {id: 31, image: picture, display: true, data: {size: "", place: "America", tags: [], date: "5/15/2023"}}, {id: 32, image: picture, display: true, data: {size: "", place: "America", tags: [], date: "5/15/2023"}}, {id: 33, image: picture, display: true, data: {size: "", place: "America", tags: [], date: "5/15/2023"}}, {id: 34, image: picture, display: true, data: {size: "", place: "America", tags: [], date: "5/15/2023"}}, {id: 35, image: picture, display: true, data: {size: "", place: "America", tags: [], date: "5/15/2023"}}
                , {id: 36, image: picture, display: true, data: {size: "", place: "America", tags: [], date: "5/15/2023"}}, {id: 37, image: picture, display: true, data: {size: "", place: "America", tags: [], date: "5/15/2023"}}, {id: 38, image: picture, display: true, data: {size: "", place: "America", tags: [], date: "5/15/2023"}}, {id: 39, image: picture, display: true, data: {size: "", place: "America", tags: [], date: "5/15/2023"}}, {id: 40, image: picture, display: true, data: {size: "", place: "America", tags: [], date: "5/15/2023"}}, {id: 41, image: picture, display: true, data: {size: "", place: "America", tags: [], date: "5/15/2023"}}, {id: 42, image: picture, display: true, data: {size: "", place: "America", tags: [], date: "5/15/2023"}}
                , {id: 43, image: picture, display: true, data: {size: "", place: "America", tags: [], date: "5/15/2023"}}, {id: 44, image: picture, display: true, data: {size: "", place: "America", tags: [], date: "5/15/2023"}}, {id: 45, image: picture, display: true, data: {size: "", place: "America", tags: [], date: "5/15/2023"}}, {id: 46, image: picture, display: true, data: {size: "", place: "America", tags: [], date: "5/15/2023"}}, {id: 47, image: picture, display: true, data: {size: "", place: "America", tags: [], date: "5/15/2023"}}, {id: 48, image: picture, display: true, data: {size: "", place: "America", tags: [], date: "5/15/2023"}}, {id: 49, image: picture, display: true, data: {size: "", place: "America", tags: [], date: "5/15/2023"}}
                , {id: 50, image: picture, display: true, data: {size: "", place: "America", tags: [], date: "5/15/2023"}}, {id: 51, image: picture, display: true, data: {size: "", place: "America", tags: [], date: "5/15/2023"}}, {id: 52, image: picture, display: true, data: {size: "", place: "America", tags: [], date: "5/15/2023"}}, {id: 53, image: picture, display: true, data: {size: "", place: "America", tags: [], date: "5/15/2023"}}, {id: 54, image: picture, display: true, data: {size: "", place: "America", tags: [], date: "5/15/2023"}}, {id: 55, image: picture, display: true, data: {size: "", place: "America", tags: [], date: "5/15/2023"}}, {id: 56, image: picture, display: true, data: {size: "", place: "America", tags: [], date: "5/15/2023"}}
                
            ]
        }),
        actions: {
            addPictureByTag(items, places) {
                if ((items.size > 0) && (places.size > 0)) { //If there is a filter, otherwise the last filter has been removed
                    for (let i = 0; i < this.photos.length; ++i) {
                        this.photos[i].display = false
                        for (let j = 0; j < this.photos[i].data.tags.length; ++j) {
                            if ((items.has(this.photos[i].data.tags[j])) && (places.has(this.photos[i].data.place))) {
                                this.photos[i].display = true
                                break
                            }
                        }
                    }
                } else if ((items.size > 0) && (places.size == 0)) {
                    for (let i = 0; i < this.photos.length; ++i) {
                        this.photos[i].display = false
                        for (let j = 0; j < this.photos[i].data.tags.length; ++j) {
                            if (items.has(this.photos[i].data.tags[j])) {
                                this.photos[i].display = true
                                break
                            }
                        }
                    }
                } else if ((items.size == 0) && (places.size > 0)) {
                    for (let i = 0; i < this.photos.length; ++i) {
                        this.photos[i].display = false
                        if (places.has(this.photos[i].data.place)) {
                            this.photos[i].display = true
                        }
                    }
                } else { // If last filter is removed, display all images
                    for (let i = 0; i < this.photos.length; ++i) {
                        this.photos[i].display = true
                    }
                }
            },
            orderByDate() {
                function compare(a, b) {
                    if (a.data.place < b.data.place) {
                        return 1;
                    }
                    if (a.data.place > b.data.place) {
                        return -1;
                    }
                    return 0;
                }
                this.photos.sort(compare)

            },
            orderByPlace() {
                function compare(a, b) {
                    if (a.data.place < b.data.place) {
                        return -1;
                    }
                    if (a.data.place > b.data.place) {
                        return 1;
                    }
                    return 0;
                }
                this.photos.sort(compare)
            }
        }
    })