<template>
    <div class="flip-card">
        <div class="flip-card-inner">
            <div class="flip-card-front">
                <img v-if="path !== null" :src=image class="cover">
                <img v-else src="/No_Image_Available.jpg" class="cover">
            </div>
            <div class="flip-card-back">
                <div class="wrap">
                    <h5>Titolo film:</h5>
                    <p>{{ titolo }}</p>
                    <div v-if="titoloOriginale !== titolo">
                        <h5>Titolo originale:</h5>
                        <p>{{ titoloOriginale }}</p>
                    </div>
                    <img v-if="lingua == 'it' || lingua == 'en' || lingua == 'fr'" :src="bandiera()" class="flag">
                    <div v-else>
                        <h5>Lingua: </h5>
                        {{ lingua }}
                    </div>
                    <div>
                        <span v-for="i in 5">
                            <i class="fa-solid fa-star yellow" v-if="stella >= i"></i>
                            <i class="fa-regular fa-star" v-else></i>
                        </span>
                    </div>
                    <h5>Trama</h5>
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



