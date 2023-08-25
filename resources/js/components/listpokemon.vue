<template lang="">
    <div>
        <h1>Lista</h1>
        <select v-model="urlPokemon">
            <option v-for="{ name, url } in listaPokemon" :value="url" v-text="name"></option>
        </select>
    </div>
</template>

<script>
export default {
    data() {
        return {
            listaPokemon: [],
            urlPokemon: '',
            urlImagenPokemon: ''
        };
    },
    methods: {
        pokemons() {
            axios.get('https://pokeapi.co/api/v2/pokemon')
            .then(res => {
                console.table(res.data.results);
                this.listaPokemon = res.data.results;
            })
            .catch(err => {
                console.log(err);
            });
        },
        imagenPokemon() {
            axios.get(this.urlPokemon)
            .then(res => {
                console.table(res.data.sprites.other['official-artwork'].front_default);
                this.urlImagenPokemon = res.data.sprites.other['official-artwork'].front_default
                this.setImage()
            })
            .catch(err => {
                console.log(err);
            })
        },

        setImage(){
        this.$emit("imagen", this.urlImagenPokemon)
        }
    },
    mounted() {
        this.pokemons();
    },
    watch: {
        urlPokemon() {
            this.imagenPokemon();
        }
    }
};
</script>