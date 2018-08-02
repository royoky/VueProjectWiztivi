<template>
    <div @click="selectMovie()">
        <!-- <a :href="movie.link"> -->
        <img :alt="movie.alt" :src="getImgUrl()">
        <p>{{ movie.title }}</p>
        <!-- </a> -->
    </div>
</template>

<script>
import { moviesState } from '../states/movies-state'

export default {
  name: 'MovieDiv',
  props: {
    movie: { type: Object, required: true }
  },
  methods: {
    getImgUrl () {
      return `/posters/${this.movie.poster}`
    },
    selectMovie () {
      this.moviesState.selectedMovie = this.movie
    }
  },
  data () {
    return { moviesState }
  }
}
</script>

<style scoped lang="less">
div {
  padding: 15px;
  width: 150px;
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
  }
}
</style>
