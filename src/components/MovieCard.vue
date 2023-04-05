<template>
    <div class="flip-card">
        <div class="flip-card-inner">

            <div class="flip-card-front">
                <img v-if="path !== null" :src=image class="cover">
                <img v-else src="/No_Image_Available.jpg" class="cover">
            </div>

            <div class="flip-card-back">
                <div class="wrap">
                    <h5 class="text-red">Titolo film:</h5>
                    <p>{{ titolo }}</p>
                    <div v-if="titoloOriginale !== titolo">
                        <h5 class="text-red">Titolo originale:</h5>
                        <p>{{ titoloOriginale }}</p>
                    </div>

                    <!-- SOLUZIONE ALTERNATIVA BANDIERINE CON INCLUDES-->

                    <img v-if="lingua == 'it' || lingua == 'en' || lingua == 'fr'" :src="bandiera()" class="flag">
                    <div v-else>
                        <h5>Lingua: </h5>
                        {{ lingua }}
                    </div>

                    <!-- VALUTAZIONE STELLE -->
                    <!-- SOLUZIONE ALTERNATIVA con V-BIND DI CLASSI-->
                    <div>
                        <span v-for="i in 5" :key="i">
                            <i class="fa-solid fa-star yellow" v-if="stella >= i"></i>
                            <i class="fa-regular fa-star" v-else></i>
                        </span>
                    </div>

                    <h5 class="text-red">Trama</h5>
                    <p>{{ trama.substring(0, 150) }}...</p>

                    <!-- CICLO ARRAY CAST  -->
                    <div v-for="(attore, index) in cast" :key="index">
                        <div v-if="attore.character !== ''">
                            <span class="text-red">Ruolo:</span> {{ attore.character }}
                        </div>
                        <div v-if="attore.name !== ''">
                            <span class="text-red">Attore:</span> {{ attore.name }}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { store } from '../store.js';

export default {
    name: 'MovieCard',

    data() {
        return {
            store,
            stella: this.numeroIntero(this.voto),

            /**            
             * bandierine: ["it", "en", "fr"] //SOLUZIONE ALTERNATIVA BANDIERINE
             */

        }

    },

    props: {
        titolo: String,
        titoloOriginale: String,
        lingua: String,
        voto: Number,
        image: String,
        path: String,
        trama: String,
        cast: Array
    },
    methods: {
        bandiera() {
            let bandiera = "";
            if (this.lingua == "it") {
                bandiera = "/it.png"
            } else if (this.lingua == "en") {
                bandiera = "/en.png"
            } else if (this.lingua == "fr") {
                bandiera = "/fr.png"
            }
            return bandiera
        },
        numeroIntero(numero) {
            return Math.ceil(numero / 2);
        },
    },
}
</script>

<style lang="scss" scoped></style>

