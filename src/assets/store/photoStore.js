import {RouterView} from 'vue-router'
import {defineStore} from 'pinia'
import picture from './imgs/download.jpg'

    export const usePhotoStore = defineStore({
        id: "photoStore",
        state: () => ({
            photos:[{id: 1, image: picture}, {id: 2, image: picture}, {id: 3, image: picture}, {id: 4, image: picture}, {id: 5, image: picture}, {id: 6, image: picture}, {id: 7, image: picture}
                , {id: 8, image: picture}, {id: 9, image: picture}, {id: 10, image: picture}, {id: 11, image: picture}, {id: 12, image: picture}, {id: 13, image: picture}, {id: 14, image: picture}
                , {id: 15, image: picture}, {id: 16, image: picture}, {id: 17, image: picture}, {id: 18, image: picture}, {id: 19, image: picture}, {id: 20, image: picture}, {id: 21, image: picture}
                , {id: 22, image: picture}, {id: 23, image: picture}, {id: 24, image: picture}, {id: 25, image: picture}, {id: 26, image: picture}, {id: 27, image: picture}, {id: 28, image: picture}
                , {id: 29, image: picture}, {id: 30, image: picture}, {id: 31, image: picture}, {id: 32, image: picture}, {id: 33, image: picture}, {id: 34, image: picture}, {id: 35, image: picture}
                , {id: 36, image: picture}, {id: 37, image: picture}, {id: 38, image: picture}, {id: 39, image: picture}, {id: 40, image: picture}, {id: 41, image: picture}, {id: 42, image: picture}
                , {id: 43, image: picture}, {id: 44, image: picture}, {id: 45, image: picture}, {id: 46, image: picture}, {id: 47, image: picture}, {id: 48, image: picture}, {id: 49, image: picture}
                , {id: 50, image: picture}, {id: 51, image: picture}, {id: 52, image: picture}, {id: 53, image: picture}, {id: 54, image: picture}, {id: 55, image: picture}, {id: 56, image: picture}
                
            ]
        })
    })