<script>
import axios from 'axios';

//ARRAY FILMS///
import { store } from './store.js';

import TheHeader from './components/TheHeader.vue';

export default {
  data() {
    return {
      store
    }
  },
  methods: {
    //ARRAY FILMS///
    getMovies() {

      let urlApi = "https://api.themoviedb.org/3/search/movie?api_key=6d55564c6ea75d27119d87e52f2f5d40";

      if (store.movies.length > 0) {
        urlApi += `&query=${store.input}`;
        console.log(store.input);
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
    TheHeader
  }
}

</script>

<template>
  <TheHeader />
</template>

<style lang="scss">
@use './styles/general.scss' as *;
</style>
