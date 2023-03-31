<template>
    <div class="container">

        <h2 v-if="store.movies.length == 0" class="text-center">Cerca il tuo film</h2>
        <h2 v-else>work in progress...</h2>

    </div>
</template>

<script>
import { store } from '../store.js';

export default {
    name: 'MovieList',

    data() {
    return {
      store
    }
  },

}
</script>

<style scoped >
.container {
    color: white;
    height: 100%;
    width: 90%;

}</style>