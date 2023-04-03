<template>
        <div class="flip-card">
        <div class="flip-card-inner">
            <div class="flip-card-front">
                <img v-if="path !== null" :src=image class="cover">
                <img v-else src="/No_Image_Available.jpg" class="cover">
            </div>
            <div class="flip-card-back">
                <div class="wrap">
                <h4>Titolo film: {{ titolo }}</h4>
                <p v-if="titoloOriginale !== titolo">Titolo originale: {{ titoloOriginale }}</p>
                <img v-if="lingua == 'it' || lingua == 'en'" :src="bandiera()" class="flag">
                <p v-else>Lingua: {{ lingua }} </p>
                    <span v-for="i in 5">
                        <i class="fa-solid fa-star yellow" v-if="stella >= i"></i>
                        <i class="fa-regular fa-star" v-else></i>
                    </span>
                </div>
            </div>
        </div>
    </div>









<!-- 
    <div class="wrap">
        <h3>Titolo film: {{ titolo }}</h3>
        <h4 v-if="titoloOriginale !== titolo">Titolo originale: {{ titoloOriginale }}</h4>
        <img v-if="lingua == 'it' || lingua == 'en'" :src="bandiera()" class="flag">
        <h5 v-else>Lingua: {{ lingua }} </h5>
        <h5>Voto {{ numeroIntero(voto) }} </h5>
        <img v-if="path !== null" :src=image class="cover">
        <img v-else src="/No_Image_Available.jpg" class="cover">

        <div>
            <span v-for="i in 5">
                <i class="fa-solid fa-star yellow" v-if="stella >= i"></i>
                <i class="fa-regular fa-star" v-else></i>
            </span>
        </div>

    </div>

 -->
</template>

<script>

export default {
    name: 'SeriesCard',

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
.yellow{
    color: yellow;
}
</style>

