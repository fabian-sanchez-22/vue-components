// import './bootstrap';
// import { createApp, ref } from 'vue/dist/vue.esm-bundler.js'


// import Example from '@/pages/example.vue'
// import Pokemon from '@/pages/pokemon.vue'


// window.app = createApp({
//     setup() {
//         const selectedcomponent = ref(Pokemon)
//         return {
//             selectedcomponent
//             }
//     },
//     components: {
//         Example,
//         Pokemon
//     }
// }).mount("#app")


// con vue routes
import './bootstrap';
import {createApp} from 'vue/dist/vue.esm-bundler.js'
import {createRouter, createWebHashHistory} from 'vue-router'


import Example from '@/pages/example.vue'
import Pokemon from '@/pages/pokemon.vue'


const routes = [
{path: '/example', component: Example},
{path: '/pokemon', component: Pokemon}
]


const router = createRouter({
history: createWebHashHistory(),
routes
})


const app = createApp ()
app.use(router)
app.mount("#app")




// window.app = createApp({
//     setup() {
//         const selectedcomponent = ref(Pokemon)
//         return {
//             selectedcomponent
//             }
//     },
//     components: {
//         Example,
//         Pokemon
//     }
// }).mount("#app")


