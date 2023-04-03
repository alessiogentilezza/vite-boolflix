<template>
    <div class="wrap">
        <h3>Titolo film: {{ titolo }}</h3>
        <h4 v-if="titoloOriginale !== titolo">Titolo originale: {{ titoloOriginale }}</h4>
        <!-- <img v-if="lingua === 'it'" src="/it.png" alt="Bandiera italiana">   //SOLO ITALIANA// -->
        <img v-if="lingua == 'it' || lingua == 'en'" :src="bandiera()" class="flag">
        <h5 v-else>Lingua: {{ lingua }} </h5>
        <h5>Voto {{ voto }}</h5>
        <img v-if="path !== null" :src=image class="cover">
        <img v-else src="/No_Image_Available.jpg" class="cover">

    </div>
</template>

<script>
export default {
    name: 'MovieCard',
    props: {
        // movie:Object,

        titolo: String,
        titoloOriginale: String,
        lingua: String,
        voto: Number,
        image: String,
        path: String,
        // banidera: Function,

        /**         
         * bandiera: {
             type: Function,
             default() {
            return bandiera
             }
         }
        */

    },
    methods: {
        bandiera() {
            let bandiera = "";
            if (this.lingua == "it") {
                bandiera = "/it.png"
            } else if (this.lingua == "en") {
                bandiera = "/gb.png"
            }
            console.log(bandiera);
            return bandiera
        },

    }
}
</script>

<style lang="scss" scoped>
.cover {
    height: 200px;
}
.noImage{
    height: 200px;
}
</style>