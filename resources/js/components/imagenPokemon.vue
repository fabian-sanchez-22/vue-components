<template lang="">
    <div>
        <h1>Imagen</h1>
        <img :src="imagen" style="width: 20%">
        <p>{{ saludar }}</p>
        <p>{{ saludar }}</p>
        <p>{{ saludar }}</p>
        <img :src="foto">
    </div>
</template>


<script>
export default {

    props: {
        imagen: '',
        foto: ''
    },

    data() {
        return {
            numero: 5
        }
    },

    methods: {

    },

    computed: {
        saludar() {
            console.log("Hola");
            return this.numero * 3;
        }
    }
}
</script>
