<template>
    <div class="wrap">
        <h3>Titolo serie: {{ titolo }}</h3>
        <h4 v-if="titoloOriginale !== titolo" >Titolo originale: {{ titoloOriginale }}</h4>
        <!-- <img v-if="lingua === 'it'" src="/it.png" alt="Bandiera italiana">   //SOLO ITALIANA// -->
        <img v-if="lingua == 'it' || lingua == 'en'" :src="bandiera()">
        <h5 v-else>Lingua: {{ lingua }} </h5>
        <h5>Voto {{ voto }}</h5>
        <img :src=image alt="" class="cover">
    </div>
</template>

<script>
export default {
    name: 'SeriesCard',
    props: {
        // movie:Object,

        titolo: String,
        titoloOriginale: String,
        lingua: String,
        voto: Number,
        img: String,
    },
    methods: {
        bandiera() {
            let bandiera = "";
            if (this.lingua == "it") {
                bandiera = "/it.png"
            } else if (this.lingua == "en") {
                bandiera = "/gb.png"
            }
            return bandiera
        },
    }
}
</script>

<style lang="scss" scoped>
.wrap {
    border-top: 1px orange solid;
    margin: 1px;
}

img {
    height: 20px;
    width: 40px;
    margin: 0.3rem 0;
}

h3,
h4,
h5 {
    padding: .3rem 0;
}
</style>