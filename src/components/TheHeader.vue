<template>
  <div class="container d-flex justify-content-between align-items-center text-danger">
    <h1 class="mb-0">BOOLFLIX</h1>
    <div>
      <input type="text" placeholder="Search movie" v-model="store.search" @keyup.enter="$emit('doSearch')">
      <button class="ms-1" @click="$emit('doSearch')">Search</button>

    </div>


  </div>
</template>

<script>
import { store } from '../store.js';

export default {
  name: 'TheHeader',

  data() {
    return {
      store
    }
  },

}
</script>

<style lang="scss" scoped>

</style>