<template>
    <div>
        <h1>picsum</h1>
        <label>ancho</label>
        <input v-model="ancho" type="text" @input="cambio">
        <label>alto</label>
        <input v-model="alto" type="text" @input="cambio">
        <label>escala de grises</label>
        <input v-model="escalaGrises" type="checkbox" @input="cambio">
        <label>blur</label>
        <input v-model="efectoBlur" type="number" min="1" max="10" @input="cambio">
        {{ urlPicsum }}
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            urlPicsum: '',
            ancho: '',
            alto: '',
            escalaGrises: false,
            efectoBlur: ''
        }
    },

    methods: {
        picsums() {
            let concat = `${this.ancho}/${this.alto}`;

            if (this.escalaGrises) {
                concat += "?grayscale";
            }

            if (this.efectoBlur) {
                if (this.escalaGrises) {
                    concat += `&blur=${this.efectoBlur}`;
                } else {
                    concat += `?blur=${this.efectoBlur}`;
                }
            }

            axios.get(`https://picsum.photos/${concat}`)
                .then(res => {
                    console.log(res);
                    this.urlPicsum = res.request.responseURL;
                    this.setFoto()
                })
                .catch(err => {
                    console.log(err);
                });
        },

        setFoto() {
            this.$emit("foto", this.urlPicsum)
        },

        cambio() {
            this.picsums();
        }
    },

    mounted() {
        this.picsums();
    }
}
</script>
