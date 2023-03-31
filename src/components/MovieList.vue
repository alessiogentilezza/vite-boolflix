<template>
  <div class="container">

    <h2 v-if="store.movies.length == 0">Cerca il tuo film</h2>
    <h2 v-else>work in progress... FILMS</h2>

    <div v-for="(movie, index) in store.movies" :key="index">
      <MovieCard 
      :titolo="movie.title" 
      :titoloOriginale="movie.title" 
      :lingua="movie.original_language"
      :voto="movie.vote_average" />
    </div>

    <h2 v-show="store.series.length > 0">work in progress... SERIES</h2>

    <div v-for="(serie, index) in store.series" :key="index">
      <MovieCard 
      :titolo="serie.name" 
      :titoloOriginale="serie.original_name" 
      :lingua="serie.original_language"
      :voto="serie.vote_average" />
    </div> 

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

h2{
  margin: 1rem 0;
  color: darkorange;
}
</style>