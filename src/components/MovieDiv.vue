<template>
    <div @click="selectMovie()" :class="{ 'focused': isFocused }">
        <!-- <a :href="movie.link"> -->
        <loader v-if="loading"/>
        <img :alt="movie.alt" :src="getImgUrl()">
        <p>{{ movie.title }}</p>
        <!-- </a> -->
    </div>
</template>

<script>
import { moviesState } from '../states/movies-state'
import Loader from './Loader'

export default {
  name: 'MovieDiv',
  components: {
    Loader
  },
  props: {
    movie: { type: Object, required: true }
  },
  methods: {
    getImgUrl () {
      return `/posters/${this.movie.poster}`
    },
    async selectMovie () {
      try {
        // console.log('http://localhost:5000/movie/' + this.movie.id)
        // this.moviesState.selectedMovie = this.movie
        this.loading = true
        let response = await fetch('http://localhost:5000/movie/' + this.movie.id)
        console.log(this.moviesState.selectedMovie)
        this.moviesState.selectedMovie = await response.json() // do not forget the () !!
        this.loading = false
      } catch (error) {
        console.error(error)
      }
    },
    setFocus () {
      this.isFocused = true
    },
    removeFocus () {
      this.isFocused = false
    }
  },
  data () {
    return {
      moviesState,
      isFocused: false,
      loading: false
    }
  }
}
</script>

<style scoped lang="less">
div {
  position: relative;
  padding: 15px;
  width: 150px;
  height: fit-content;
  a {
    color: inherit;
    text-decoration-line: none;
    text-align: center;
  }
  img {
    border-radius: 5%;
    box-shadow: 5px 5px black;
    width: 150px;
    transition: scale 1s;
    &:hover {
      border-style: solid;
      border-color: #2b71d8;
      transform: scale(1.05);
      cursor: pointer;
    }
  }
  p {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: center;
  }
  &.focused {
    background-color:gray
  }
}
</style>
