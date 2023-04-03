<template>
    <div class="flip-card">
        <div class="flip-card-inner">
            <div class="flip-card-front">
                <img v-if="path !== null" :src=image class="cover">
                <img v-else src="/No_Image_Available.jpg" class="cover">
            </div>
            <div class="flip-card-back">
                <div class="wrap">
                    <h4>Titolo film: </h4>
                    <p>{{ titolo }}</p>
                    <p v-if="titoloOriginale !== titolo">Titolo originale: {{ titoloOriginale }}</p>
                    <img v-if="lingua == 'it' || lingua == 'en' || lingua == 'fr'" :src="bandiera()" class="flag">
                    <p v-else>Lingua: {{ lingua }} </p>
                    <div>
                        <span v-for="i in 5">
                            <i class="fa-solid fa-star yellow" v-if="stella >= i"></i>
                            <i class="fa-regular fa-star" v-else></i>
                        </span>
                    </div>
                    <h4>Trama</h4>
                    <p>{{ trama }}</p>
                </div>
            </div>
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
        trama: String
        // banidera: Function,
    },
    methods: {
        bandiera() {
            let bandiera = "";
            if (this.lingua == "it") {
                bandiera = "/it.png"
            } else if (this.lingua == "en") {
                bandiera = "/gb.png"
            } else if (this.lingua == "fr") {
                bandiera = "/fr.png"
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

<style lang="scss" scoped></style>



