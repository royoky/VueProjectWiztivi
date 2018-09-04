<template>
<main :class="{ 'animated': moviesState.selectedMovie }">
  <div class='screen'>
    <movie-div v-for="(movie, index) in moviesState.movies" :key="index" :movie="movie" ref="Movie"/>
    <!-- <button onclick="location.href='/MovieForm'" type="button">Administration</button> -->
    <router-link to="/MovieForm" class='form'>Administration</router-link>
  </div>
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
      isFocused: false,
      numberOfMovies: 0
    }
  },
  methods: {
    setFocus (i) {
      this.$refs.Movie[i].setFocus()
    },
    removeFocus (i) {
      this.$refs.Movie[i].removeFocus()
    }
  },
  async created () {
    try {
      let response = await fetch('http://localhost:5000/movies')
      this.moviesState.movies = await response.json() // do not forget the () !!
      this.moviesState.numberOfMovies = this.moviesState.movies.length
    } catch (error) {
      console.error(error)
    }
  },
  sockets: {
    'insert-movie': function (movie) {
      this.moviesState.movies.push(movie)
    },
    'update-movie': function (updatedMovie) {
      const movie = this.moviesState.movies.find(movie => {
        return movie._id === updatedMovie._id
      })
      Object.assign(movie, updatedMovie)
    },
    'delete-movie': function (deletedMovie) {
      const ind = this.moviesState.movies.findIndex(movie => {
        return movie._id === deletedMovie._id
      })
      ind && this.moviesState.movies.splice(ind, 1)
    }
  }
}
</script>

<style scoped lang="less">
main {
  width: 200vw;
  height: 100%;
  display: flex;
  flex-grow: 1;
  padding-top: 5px;
  &.animated{
    transform: translate3d(-100vw,0, 0);
    transition: transform 1s;
}
  .screen {
    width: 100vw;
    height: auto;
    display: flex;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
    overflow-y: scroll;
    align-content: flex-start;
  }
  .form {
    position:absolute;
    bottom: 0;
  }
}
</style>
