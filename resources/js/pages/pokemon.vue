<template>
    <div>
        <h1>pokemon</h1>
        <!-- recibiendo de un componente hijo -->
        <Lista @imagen="getImage"></Lista>

        <!-- enviamos al componente de imagen -->
        <imagen :imagen="urlImagenP"></imagen>

        <picsum @foto="getFoto"></picsum>

        <imagen :foto="urlFoto"></imagen>

    </div>
</template>
<script>
import Lista from '@/components/listpokemon.vue'
import imagen from '@/components/imagenPokemon.vue'
import picsum from '@/components/picsum.vue'

export default {
    components: {
        Lista,
        imagen,
        picsum
    },
    data() {
        return {
            urlImagenP: '',
            urlFoto: ''
        }
    },

    methods: {
        getImage(data) {
            this.urlImagenP = data
        },

        getFoto(data) {
            this.urlFoto = data
        }
    },
}
</script>