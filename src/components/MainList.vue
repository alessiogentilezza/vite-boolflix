<template>
  <div class="my-container">

    <!-- CICLO ARRAY FILM -->
    <h2 v-if="store.movies.length == 0">Cerca il tuo film</h2>
    <h2 v-else>work in progress... FILMS</h2>
    <div class="container">
      <div class="row">
        <div class="col-3" v-for="(movie, index) in store.movies" :key="index">
          <!-- SI PUO PASSARE UN UNICA PROP OBJECT "MOVIE"     <MovieCard :movie="movie"/> -->
          <MovieCard :titolo="movie.title" :titoloOriginale="movie.title" :lingua="movie.original_language"
            :voto="movie.vote_average" :image="imagelink + movie.backdrop_path" :path="movie.backdrop_path" />
          <!-- :bandiera="bandiera()"/> -->
        </div>
      </div>
    </div>



    <!-- CICLO ARRAY SERIE -->

    <h2 v-show="store.series.length > 0">work in progress... SERIES</h2>
    <div v-for="(serie, index) in store.series" :key="index">
      <SeriesCard :titolo="serie.name" :titoloOriginale="serie.original_name" :lingua="serie.original_language"
        :voto="serie.vote_average" :image="imagelink + serie.backdrop_path" :path="serie.backdrop_path" />

    </div>

  </div>
</template>

<script>
import { store } from '../store.js';
import MovieCard from './MovieCard.vue';
import SeriesCard from './SeriesCard.vue';


export default {
  name: 'MainList',

  data() {
    return {
      store,
      imagelink: "https://image.tmdb.org/t/p/original"
    }
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
  },

  components: {
    MovieCard,
    SeriesCard,
  }


}
</script>

<style lang="scss" scoped>
.my-container {
  color: white;
  height: 100%;
  width: 90%;
}

h2 {
  margin: 1rem 0;
  color: darkorange;
}
</style>