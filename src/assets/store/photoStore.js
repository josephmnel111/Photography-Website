import {RouterView} from 'vue-router'
import {defineStore} from 'pinia'
import picture from './imgs/download.jpg'
import picture2 from './imgs/download2.jpg'

    export const usePhotoStore = defineStore({
        id: "photoStore",
        state: () => ({
            photos:[{id: 1, image: picture, display: true, data: {size: "", place: "", tags: "", date: ""}}, {id: 2, image: picture2, data: {size: "", place: "", tags: "", date: ""}}, {id: 3, image: picture, display: true, data: {size: "", place: "", tags: "", date: ""}}, {id: 4, image: picture, display: true, data: {size: "", place: "", tags: "", date: ""}}, {id: 5, image: picture, display: true, data: {size: "", place: "", tags: "", date: ""}}, {id: 6, image: picture, display: true, data: {size: "", place: "", tags: "", date: ""}}, {id: 7, image: picture, display: true, data: {size: "", place: "", tags: "", date: ""}}
                , {id: 8, image: picture, display: true, data: {size: "", place: "", tags: "", date: ""}}, {id: 9, image: picture, display: true, data: {size: "", place: "", tags: "", date: ""}}, {id: 10, image: picture, display: true, data: {size: "", place: "", tags: "", date: ""}}, {id: 11, image: picture, display: true, data: {size: "", place: "", tags: "", date: ""}}, {id: 12, image: picture, display: true, data: {size: "", place: "", tags: "", date: ""}}, {id: 13, image: picture, display: true, data: {size: "", place: "", tags: "", date: ""}}, {id: 14, image: picture, display: true, data: {size: "", place: "", tags: "", date: ""}}
                , {id: 15, image: picture, display: true, data: {size: "", place: "", tags: "", date: ""}}, {id: 16, image: picture, display: true, data: {size: "", place: "", tags: "", date: ""}}, {id: 17, image: picture, display: true, data: {size: "", place: "", tags: "", date: ""}}, {id: 18, image: picture, display: true, data: {size: "", place: "", tags: "", date: ""}}, {id: 19, image: picture, display: true, data: {size: "", place: "", tags: "", date: ""}}, {id: 20, image: picture, display: true, data: {size: "", place: "", tags: "", date: ""}}, {id: 21, image: picture, display: true, data: {size: "", place: "", tags: "", date: ""}}
                , {id: 22, image: picture, display: true, data: {size: "", place: "", tags: "", date: ""}}, {id: 23, image: picture, display: true, data: {size: "", place: "", tags: "", date: ""}}, {id: 24, image: picture, display: true, data: {size: "", place: "", tags: "", date: ""}}, {id: 25, image: picture, display: true, data: {size: "", place: "", tags: "", date: ""}}, {id: 26, image: picture, display: true, data: {size: "", place: "", tags: "", date: ""}}, {id: 27, image: picture, display: true, data: {size: "", place: "", tags: "", date: ""}}, {id: 28, image: picture, display: true, data: {size: "", place: "", tags: "", date: ""}}
                , {id: 29, image: picture, display: true, data: {size: "", place: "", tags: "", date: ""}}, {id: 30, image: picture, display: true, data: {size: "", place: "", tags: "", date: ""}}, {id: 31, image: picture, display: true, data: {size: "", place: "", tags: "", date: ""}}, {id: 32, image: picture, display: true, data: {size: "", place: "", tags: "", date: ""}}, {id: 33, image: picture, display: true, data: {size: "", place: "", tags: "", date: ""}}, {id: 34, image: picture, display: true, data: {size: "", place: "", tags: "", date: ""}}, {id: 35, image: picture, display: true, data: {size: "", place: "", tags: "", date: ""}}
                , {id: 36, image: picture, display: true, data: {size: "", place: "", tags: "", date: ""}}, {id: 37, image: picture, display: true, data: {size: "", place: "", tags: "", date: ""}}, {id: 38, image: picture, display: true, data: {size: "", place: "", tags: "", date: ""}}, {id: 39, image: picture, display: true, data: {size: "", place: "", tags: "", date: ""}}, {id: 40, image: picture, display: true, data: {size: "", place: "", tags: "", date: ""}}, {id: 41, image: picture, display: true, data: {size: "", place: "", tags: "", date: ""}}, {id: 42, image: picture, display: true, data: {size: "", place: "", tags: "", date: ""}}
                , {id: 43, image: picture, display: true, data: {size: "", place: "", tags: "", date: ""}}, {id: 44, image: picture, display: true, data: {size: "", place: "", tags: "", date: ""}}, {id: 45, image: picture, display: true, data: {size: "", place: "", tags: "", date: ""}}, {id: 46, image: picture, display: true, data: {size: "", place: "", tags: "", date: ""}}, {id: 47, image: picture, display: true, data: {size: "", place: "", tags: "", date: ""}}, {id: 48, image: picture, display: true, data: {size: "", place: "", tags: "", date: ""}}, {id: 49, image: picture, display: true, data: {size: "", place: "", tags: "", date: ""}}
                , {id: 50, image: picture, display: true, data: {size: "", place: "", tags: "", date: ""}}, {id: 51, image: picture, display: true, data: {size: "", place: "", tags: "", date: ""}}, {id: 52, image: picture, display: true, data: {size: "", place: "", tags: "", date: ""}}, {id: 53, image: picture, display: true, data: {size: "", place: "", tags: "", date: ""}}, {id: 54, image: picture, display: true, data: {size: "", place: "", tags: "", date: ""}}, {id: 55, image: picture, display: true, data: {size: "", place: "", tags: "", date: ""}}, {id: 56, image: picture, display: true, data: {size: "", place: "", tags: "", date: ""}}
                
            ]
        }),
        actions: {
            RemovePicturesByTag(tags) {
                for (let i = 0; i < this.photos.length; ++i) {
                    for (let j = 0; j < this.photos[i].data.tags.length; ++j) {
                        if (this.photos[i].data.tags[j] in tags) {
                            this.photos[i].display = false
                        }
                    }
                }
            },
            AddPictureByTag(tags) {
                for (let i = 0; i < this.photos.length; ++i) {
                    for (let j = 0; j < this.photos[i].data.tags.length; ++j) {
                        if (this.photos[i].data.tags[j] in tags) {
                            this.photos[i].display = true
                        }
                    }
                }
            },
            orderByDate() {
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

            },
            orderByPlace() {
                function compare(a, b) {
                    if (a.data.date < b.data.date) {
                        return -1;
                    }
                    if (a.data.date > b.data.date) {
                        return 1;
                    }
                    return 0;
                }
                this.photos.sort(compare)
            }
        }
    })