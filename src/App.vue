<script>
import axios from 'axios';

//ARRAY FILMS///
import { store } from './store.js';

import TheHeader from './components/TheHeader.vue';
import MovieList from './components/MovieList.vue';

export default {
  data() {
    return {
      store
    }
  },
  methods: {
    //ARRAY FILMS///
    getMovies() {


      // let urlApi = "https://api.themoviedb.org/3/search/movie?api_key=6d55564c6ea75d27119d87e52f2f5d40&query=ciclone";
      let urlApi = "https://api.themoviedb.org/3/search/movie?api_key=6d55564c6ea75d27119d87e52f2f5d40";

      if (store.search.length > 0) {
        urlApi += `&query=${store.search}`;
        console.log(store.search);
        console.log(urlApi);
      }

      axios.get(urlApi)
        .then(response => {

          this.store.movies = response.data.results;
          console.log(this.store.movies)
        })


    },

  },
  created() {
    //ARRAY FILMS///
    this.getMovies();

  },
  computed: {
  },
  components: {
    TheHeader,
    MovieList
  }
}

</script>

<template>
  <header>
      <TheHeader @doSearch="getMovies" />
  </header>
  <main>
    <MovieList />

  </main>





</template>

<style lang="scss">
@use './styles/general.scss' as *;


header {
    height: 70px;
    background-color: black;
    display: flex;
    justify-content: center;
}
body{
  background-color: #434343;

}
main{
  display: flex;
    justify-content: center;

}
</style>
