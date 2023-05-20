import {RouterView} from 'vue-router'
import {defineStore} from 'pinia'

    export const usePhotoStore = defineStore({
        id: "photoStore",
        state: () => ({
            photos:[
                './imgs/download.jpg', './imgs/download.jpg', './imgs/download.jpg',
                './imgs/download.jpg', './imgs/download.jpg', './imgs/download.jpg', 
                './imgs/download.jpg', './imgs/download.jpg', './imgs/download.jpg', 
                './imgs/download.jpg', './imgs/download.jpg', './imgs/download.jpg', 
                './imgs/download.jpg', './imgs/download.jpg', './imgs/download.jpg', 
                './imgs/download.jpg', './imgs/download.jpg', './imgs/download.jpg', 
                './imgs/download.jpg', './imgs/download.jpg', './imgs/download.jpg', 
                './imgs/download.jpg', './imgs/download.jpg', './imgs/download.jpg', 
                './imgs/download.jpg', './imgs/download.jpg', './imgs/download.jpg', 
                './imgs/download.jpg', './imgs/download.jpg', './imgs/download.jpg', 
                './imgs/download.jpg', './imgs/download.jpg', './imgs/download.jpg',
                './imgs/download.jpg', './imgs/download.jpg', './imgs/download.jpg', 
                './imgs/download.jpg', './imgs/download.jpg', './imgs/download.jpg',
                './imgs/download.jpg', './imgs/download.jpg', './imgs/download.jpg',
                './imgs/download.jpg', './imgs/download.jpg', './imgs/download.jpg', 
                './imgs/download.jpg', './imgs/download.jpg', './imgs/download.jpg',
                './imgs/download.jpg', './imgs/download.jpg', './imgs/download.jpg',
            ]
        })
    })