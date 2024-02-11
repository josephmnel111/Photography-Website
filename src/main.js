import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCaretDown, faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import './assets/main.css'

library.add(faChevronLeft);
library.add(faChevronRight);
library.add(faCaretDown);

const app = createApp(App).component("font-awesome-icon", FontAwesomeIcon)

app.use(router)
app.use(createPinia())

app.mount('#app')
