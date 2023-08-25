import './bootstrap';
import { createApp, ref } from 'vue/dist/vue.esm-bundler.js'


import Example from '@/pages/example.vue'
import Pokemon from '@/pages/pokemon.vue'


window.app = createApp({
    setup() {
        const selectedcomponent = ref(Pokemon)
        return {
            selectedcomponent
            }
    },
    components: {
        Example,
        Pokemon
    }
}).mount("#app")


