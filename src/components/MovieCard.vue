<template>
    <div class="wrap">
        <h3>titolo film {{ titolo }}</h3>
        <h3>titolo originale {{ titoloOriginale }}</h3>
        <!-- <img v-if="lingua === 'it'" src="/it.png" alt="Bandiera italiana">   //SOLO ITALIANA// -->
        <img v-if="lingua == 'it' || lingua == 'en'" :src="bandiera()">
        <h3 v-else>lingua {{ lingua }} </h3>
        <h3>voto {{ voto }}</h3>
    </div>
</template>
  
<script>
export default {
    name: 'MovieCard',
    props: {
        titolo: String,
        titoloOriginale: String,
        lingua: String,
        voto: Number,
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

<style>
.wrap {
    border-top: 1px red solid;
    margin: 1px;
}

img {
    height: 20px;
    width: 40px;
}
</style>