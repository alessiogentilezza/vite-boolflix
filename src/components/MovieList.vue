<template>
  <div class="container">

    <h2 v-if="store.movies.length == 0" class="text-center">Cerca il tuo film</h2>
    <h2 v-else>work in progress...</h2>

    <div v-for="(movie, index) in store.movies" :key="index">
      <MovieCard 
      :titolo="movie.title" 
      :titoloOriginale="movie.title" 
      :lingua="movie.original_language"
      :voto="movie.vote_average" />
    </div>

    <!-- <div v-for="(serie, index) in store.series" :key="index">
      <MovieCard 
      :titolo="serie.title" 
      :titoloOriginale="serie.title" 
      :lingua="serie.original_language"
      :voto="serie.vote_average" />
    </div> -->

  </div>
</template>

<script>
import { store } from '../store.js';
import MovieCard from './MovieCard.vue';


export default {
  name: 'MovieList',

  data() {
    return {
      store
    }
  },
  components: {
    MovieCard,
  }


}
</script>

<style scoped >
.container {
  color: white;
  height: 100%;
  width: 90%;

}
</style>