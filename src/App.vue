<template>
  <div id="app">
    <Header ref="Header"></Header>
    <!-- <MovieList ref="MovieList"></MovieList> -->
    <router-view ref="MovieList"></router-view>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import MovieList from './components/MovieList.vue'
import { moviesState } from './states/movies-state'

export default {
  name: 'app',
  components: {
    Header
  },
  data () {
    return {i: 0}
  },
  created () {
    addEventListener('keydown', this.detectKey)
  },
  methods: {
    detectKey (event) {
      console.log(`input event. you have just inputed "${event.keyCode}"`)
      switch (event.keyCode) {
        case 40: // Down key
          this.$refs.Header.removeFocus()
          this.$refs.MovieList.setFocus(this.i)
          break
        case 38: // Up key
          this.$refs.Header.setFocus()
          this.$refs.MovieList.removeFocus(this.i)
          break
        case 39: // Right key
          if ((this.$refs.Header.isFocused === false) && (this.i < moviesState.numberOfMovies - 1)) {
            this.i++
            this.$refs.MovieList.setFocus(this.i)
            this.$refs.MovieList.removeFocus(this.i - 1)
          } else console.log('reached maximum')
          break
        case 37: // Left key
          if ((this.$refs.Header.isFocused === false) && (this.i > 0)) {
            this.i--
            this.$refs.MovieList.setFocus(this.i)
            this.$refs.MovieList.removeFocus(this.i + 1)
            break
          }
      }
    }
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
  overflow-x: hidden;
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
