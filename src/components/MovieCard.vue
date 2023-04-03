<template>
    <div class="text">
        <h4>Titolo film: {{ titolo }}</h4>
        <h5 v-if="titoloOriginale !== titolo">Titolo originale: {{ titoloOriginale }}</h5>
        <!-- <img v-if="lingua === 'it'" src="/it.png" alt="Bandiera italiana">   //SOLO ITALIANA// -->
        <!-- <h6>Voto {{ numeroIntero(voto) }} </h6> -->
    </div>
    <img v-if="path !== null" :src=image class="cover">
    <!-- <h4 v-else> NESSUNA IMAGINE</h4> -->
    <img v-else src="/No_Image_Available.jpg" class="no-image">

    <img v-if="lingua == 'it' || lingua == 'en'" :src="bandiera()" class="flag">
    <h6 v-else>Lingua: {{ lingua }} </h6>
    <div>
        <span v-for="i in 5">
            <i class="fa-solid fa-star yellow" v-if="stella >= i"></i>
            <i class="fa-regular fa-star" v-else></i>
        </span>
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
    width: 100%;
    margin: 1rem 0;
}

.no-image {
    width: 100%;
    height: 166px;
    margin: 1rem 0;

}

.text {
    height: 100px;
    overflow-y: hidden;
}

.yellow {
    color: yellow;
}
</style>

