<template>
  <div id="app">
    <Header></Header>
    <MovieList></MovieList>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import MovieList from './components/MovieList.vue'

export default {
  name: 'app',
  components: {
    Header,
    MovieList
  }
}
</script>

<style lang="less">
@import "~normalize.css";
#app {
  background-color: #17181b;
  font-style: Verdana, sans-serif;
  color: white;
  height: 100vh; /*Body height 100% Viewport height*/
  flex-direction: column;
  display: flex;
  @media only screen and (max-width: 400px) { /* Extra small devices (phones, 400px and down) */
    img {
      width: 80px
      }
    div {
      width: 80px
    }
    p {
      font-size: 60%
    }
  }
}
</style>
