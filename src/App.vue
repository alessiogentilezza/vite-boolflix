<script>
import axios from 'axios';

//STORE GENERALE
import { store } from './store.js';

import TheHeader from './components/TheHeader.vue';
import MainList from './components/MainList.vue';

export default {
  data() {
    return {
      store
    }
  },
  methods: {

    //ARRAY FILMS
    getMovies() {
      let urlApiMovie = "https://api.themoviedb.org/3/search/movie?api_key=6d55564c6ea75d27119d87e52f2f5d40";

      if (store.search.length > 0) {
        urlApiMovie += `&query=${store.search}`;
        console.log(store.search);
      }

      axios.get(urlApiMovie)
        .then(response => {
          this.store.movies = response.data.results;
          console.log(this.store.movies)
        })
    },

    //ARRAY SERIES///
    getSeries() {
      let urlApiSeries = "https://api.themoviedb.org/3/search/tv?api_key=e99307154c6dfb0b4750f6603256716d";

      if (store.search.length > 0) {
        urlApiSeries += `&query=${store.search}`;
        console.log(urlApiSeries);
      }

      axios.get(urlApiSeries)
        .then(response => {
          this.store.series = response.data.results;
          console.log(this.store.series)
        })
    },

  },
  //  created(){
  //    this.getMovies();
  //  },

  components: {
    TheHeader,
    MainList
  }
}

</script>

<template>
  <header>
    <TheHeader @doSearch="getMovies(), getSeries()" />
  </header>
  <main>
    <MainList />

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

body {
  background-color: #434343;

}

main {
  display: flex;
  justify-content: center;

}
</style>
