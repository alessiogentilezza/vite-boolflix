<template>
  <div class="container">
    <h1>BOOLFLIX</h1>
    <div>
      <input type="text" placeholder="Search movie" v-model="store.search" @keyup.enter="$emit('doSearch')">
      <button @click="$emit('doSearch')">Search</button>

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
.container {
  height: 100%;
  width: 90%;
  color: red;
  display: flex;
  justify-content: space-between;
  align-items: center;

}
</style>