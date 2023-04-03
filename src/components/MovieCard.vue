<template>
    <div class="wrap">
        <h3>Titolo film: {{ titolo }}</h3>
        <h4 v-if="titoloOriginale !== titolo">Titolo originale: {{ titoloOriginale }}</h4>
        <!-- <img v-if="lingua === 'it'" src="/it.png" alt="Bandiera italiana">   //SOLO ITALIANA// -->
        <img v-if="lingua == 'it' || lingua == 'en'" :src="bandiera()" class="flag">
        <h5 v-else>Lingua: {{ lingua }} </h5>
        <h5>Voto {{ numeroIntero(voto) }} </h5>
        <img v-if="path !== null" :src=image class="cover">
        <img v-else src="/No_Image_Available.jpg" class="cover">

        <div>
            <span v-for="i in stella">
                <i class="fa-solid fa-star"></i>
                <!-- <i class="fa-regular fa-star"></i> -->
            </span>
        </div>

    </div>
</template>

<script>

export default {
    name: 'MovieCard',

    data() {
        return {
            stella: this.numeroIntero(this.voto)
        }
    },

    props: {
        titolo: String,
        titoloOriginale: String,
        lingua: String,
        voto: Number,
        image: String,
        path: String,
        // banidera: Function,
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
        numeroIntero(numero) {
            return Math.ceil(numero / 2);
        },
    },
}
</script>

<style lang="scss" scoped>
.cover {
    height: 200px;
}

.noImage {
    height: 200px;
}
</style>

