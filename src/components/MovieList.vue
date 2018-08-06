<template>
<main :class="{ 'focused': isFocused }">
  <movie-div v-for="(movie, index) in moviesState.movies" :key="index" :movie="movie" ref="Movie"/>
  <modal v-if="moviesState.selectedMovie"/>
</main>
</template>

<script>
import MovieDiv from './MovieDiv.vue'
import Modal from './Modal.vue'
import { moviesState } from '../states/movies-state'
export default {
  name: 'MovieList',
  components: {
    MovieDiv,
    Modal
  },
  data () {
    return {
      moviesState,
      isFocused: false
    }
  },
  methods: {
    setFocus (i) {
      //this.isFocused = true
      this.$refs.Movie[i].setFocus()
    },
    removeFocus (i) {
      //this.isFocused = false
      this.$refs.Movie[i].removeFocus()
    }
  },
  async created () {
    try {
      let response = await fetch('data/moviesTab.json')
      this.moviesState.movies = await response.json() // do not forget the () !!
    } catch (error) {
      console.error(error)
    }
  }
}
</script>

<style scoped lang="less">
main {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  overflow: scroll;
  flex-grow: 1;
  align-content: flex-start;
  padding-top: 5px;
  &.focused {
    background-color: gray
  }
}
</style>
