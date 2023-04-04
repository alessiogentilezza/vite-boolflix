<template>
    <h6>Parte:</h6>
    <p>{{ ruolo }}</p>
    <h6>Attore:</h6>
    <p>{{ attore }}</p>
</template>

<script>

export default {
    name: 'CastFilm',

    data() {
        return {
        }
    },

    props: {
        attore: String,
        ruolo: String,
    },
    methods: {
    },
}
</script>

<style lang="scss" scoped>
p {
    color: white;
}
</style>

