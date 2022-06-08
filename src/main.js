/*
    Author: Moshe Corcias
    vue Version: 3.0
    UI kit: Element Plus
    Notes: I didnt use in VUEX because in VUE 3.0 I can use in 
    functions and variables from other js files and This is good alternative to VUEX
    work like PINIA but the cons are that you can't see any changes in vue devtools
*/ 

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import {organize_data_from_api} from './functions/Breweries_api'
import './assets/main.css'; // global styles


// Init data from the Api when the app starts
organize_data_from_api()

const app = createApp(App)
app.use(store)
app.use(router)
app.use(ElementPlus)
app.mount('#app')



