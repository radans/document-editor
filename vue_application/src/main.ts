import {createApp} from 'vue'
import './style.css'
import {createRouter, createWebHistory} from 'vue-router';

import VuePapaParse from 'vue-papa-parse';
// @ts-ignore
import App from "./App.vue"
// @ts-ignore
import Home from "./Pages/Home/Home.vue";
import {OhVueIcon} from "oh-vue-icons";
import store from "./store";
import Vue3Toasity, {type ToastContainerOptions} from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
// @ts-ignore
import vueDraggableResizableTs from "vue-draggable-resizable-ts"
import 'vue-draggable-resizable-ts/dist/VueDraggableResizableTs.css'
// @ts-ignore
import Login from "./Pages/Login.vue";
// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
const routes = [
    {
        path: '/',
        component: Home,
        name: 'home',
    },
    {
        path: '/home',
        component: Home,
    },
    {
        path: '/iframe/app-homepage',
        component: Home,
    }
]


// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = createRouter({
    history: createWebHistory(),
    routes, // short for `routes: routes`
})


const app = createApp(App)
app.use(router);
app.component("v-icon", OhVueIcon);

app.component('vue-draggable-resizable-ts', vueDraggableResizableTs)
app.use(VuePapaParse);
app.provide("store", store)
app.use(
    Vue3Toasity,
    {
        autoClose: 3000,
        // ...
    } as ToastContainerOptions,
)
app.mount('#app')
