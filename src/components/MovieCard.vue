<template>
    <div class="wrap">
        <h3>titolo film {{ titolo }}</h3>
        <h3>titolo originale {{ titoloOriginale }}</h3>
        <div>
            <h3>lingua {{ lingua }} </h3>
            {{ bandiera() }}
        </div>
        <h3>voto {{ voto }}</h3>
        <!-- <img src="../assets/it.png"> -->

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
                bandiera = "../assets/it.png"
            } else {

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
}
</style>