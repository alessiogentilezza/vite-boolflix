<template>
  <div class="container">

    <!-- CICLO ARRAY FILM -->
    <section>
      <h2 v-if="store.movies.length == 0">Cerca il tuo film</h2>
      <h2 v-else>LISTA FILMS</h2>
      <div class="row">
        <div class="col-3" v-for="(movie, index) in store.movies" :key="index">
          <!-- SI PUO PASSARE UN UNICA PROP OBJECT "MOVIE"     <MovieCard :movie="movie"/> -->
          <MovieCard :titolo="movie.title" :titoloOriginale="movie.title" :lingua="movie.original_language"
            :voto="movie.vote_average" :image="imagelink + movie.poster_path" :path="movie.poster_path"
            :trama="movie.overview" :cast="movie.cast" />
        </div>
      </div>
    </section>

    <!-- CICLO ARRAY SERIE -->
    <section>
      <h2 v-show="store.series.length > 0">LISTA SERIES</h2>
      <div class="row">
        <div class="col-3" v-for="(serie, index) in store.series" :key="index">
          <MovieCard :titolo="serie.name" :titoloOriginale="serie.original_name" :lingua="serie.original_language"
            :voto="serie.vote_average" :image="imagelink + serie.poster_path" :path="serie.poster_path"
            :trama="serie.overview" :cast="serie.cast" />
        </div>
      </div>
    </section>

  </div>
</template>

<script>
import { store } from '../store.js';
import MovieCard from './MovieCard.vue';

export default {
  name: 'MainList',

  data() {
    return {
      store,
      imagelink: "https://image.tmdb.org/t/p/w342"
    }
  },

  components: {
    MovieCard,
  }
}
</script>

<style lang="scss" scoped></style>