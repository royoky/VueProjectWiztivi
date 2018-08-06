<template>
  <div id="app">
    <Header ref="Header"></Header>
    <MovieList ref="MovieList"></MovieList>
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
  },
  data() {
    return {i: 0}
  },
  created () {
    addEventListener('keydown', this.detectKey)
  },
  methods: {
    detectKey (event) {
      console.log(`input event. you have just inputed "${event.keyCode}"`)
      switch (event.keyCode) {
        case 40:
          this.$refs.Header.removeFocus()
          this.$refs.MovieList.setFocus(this.i)
          break
       // Down key
        case 38:
          this.$refs.Header.setFocus()
          this.$refs.MovieList.removeFocus(this.i)
          break
        case 39:
          if (this.$refs.Header.isFocused === false) {
            this.i++
            this.$refs.MovieList.setFocus(this.i)
            this.$refs.MovieList.removeFocus(this.i-1)
            break}
        case 37:
          if (this.$refs.Header.isFocused === false) {
            this.i--
            this.$refs.MovieList.setFocus(this.i)
            this.$refs.MovieList.removeFocus(this.i+1)
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
