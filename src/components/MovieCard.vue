<template>
    <div class="wrap">
        <h3>titolo film {{ titolo }}</h3>
        <h3>titolo originale {{ titoloOriginale }}</h3>
        <h3>lingua {{ lingua }}</h3>
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
        }
    }
</script>


<style>
.wrap {
    border-bottom: 1px red solid;
    margin: 1px;

}
</style>