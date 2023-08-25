<template>
    <div>prueba vue js Sena</div>
    <br>
    <p>{{ message }}</p>
    <input :class="[tipodato == 'text' ? 'green' : 'rojo']" :type="tipodato" v-model="message">
    <button @click="saludar()">click</button>
    <button @click="numero++">click</button>
    <button @click="numero--">click</button>
    <label for="">texto</label>
    <input v-model="tipodato" type="radio" name="tipo" value="text" id="">
    <label for="">password</label>
    <input v-model="tipodato" type="radio" name="tipo" value="password" id="">
    <ul>
        <li v-for="element in frutas" v-text="element"></li>
    </ul>
    <br>
    <select v-model="frutasseleccion" name="" id="">
        <option v-for="frutas in frutas" v-text="frutas" value=""></option>

    </select>
    <h1>{{ frutasseleccion }}</h1>

    <br>
    <input v-model="frutass" type="text">
    <button v-on:click="frutas.push(frutass)">s</button>
    <br>
    <select name="" id="">
        <option v-for="element in listpokemon" v-text="element.name" value=""></option>
    </select>
</template>

<script>
export default {
    data() {
        return {
            message: 'Hola Vue JS',
            nombre: "",
            numero: 0,
            tipodato: "",
            frutas: ['mora', 'fresa', 'mango'],
            frutasseleccion: '',
            listpokemon: []
        }
    },
    methods: {
        saludar() {
            this.message = "SENA"
            this.numero = 1
            this.frutass = ""

        },

        

    },
    mounted() {
        // this.listapokemo()
    },

}


</script>
<style scoped>
.rojo {
    background-color: red;
}

.green {
    background-color: green;
}
</style>
