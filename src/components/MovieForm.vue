<template>
  <div>
    <form @submit.prevent="submit">
      <p>Movie Title</p>
      <input type="text" v-model="movie.title" placeholder="Movie title">
      <p>Movie Poster</p>
      <input type="text" v-model="movie.poster" placeholder="Movie poster">
      <p>Image alternative text</p>
      <input type="text" v-model="movie.alt" placeholder="Alternative text">
      <p>Movie link</p>
      <input type="text" v-model="movie.link" placeholder="Movie link">
      <p>Synopsis</p>
      <textarea id="synopsis" type="text" v-model="movie.synopsis" placeholder="Synopsis"/>
      <div v-if="errorMessages" class="errors">
        <p v-for="(msg, index) in errorMessages" :key="index">{{ msg }}</p>
      </div>
      <br>
      <input type="submit" value="Submit"/>
    </form>
  </div>
</template>

<script>
import { moviesState } from '../states/movies-state'
export default {
  name: 'MovieForm',
  data () {
    return {
      movie: {
        title: null,
        poster: null,
        alt: null,
        link: null,
        synopsis: null
      },
      errorMessages: null
    }
  },
  methods: {
    submit () {
      this.errorMessages = null
      this.sendForm()
    },
    async sendForm () {
      try {
        let response = await fetch(`http://localhost:5000/MovieForm/${this.movie._id || ''}`, {
          method: 'post',
          headers: {
            'Content-type': 'application/json; charset=UTF-8'
          },
          body: JSON.stringify(this.movie)
        })
        if (!response.ok) {
          if (response.status === 400) {
            this.errorMessages = await response.json()
          } else {
            this.errorMessages = ['unexpected error, try again']
          }
        } else {
          // moviesState.selectedMovie = null
          this.$router.push('/')
        }
      } catch (error) {
        this.errorMessages = [error.message]
        console.log(error.stack)
      }
    }
  },
  created () {
    Object.assign(this.movie, moviesState.selectedMovie)
  },
  destroyed () {
    if (moviesState.selectedMovie) moviesState.selectedMovie = null
  }
}
</script>

<style lang="less" scoped>
div {
  form {
    display: flex;
    flex-direction: column;
    align-items: center
  }
  &.errors {
    background-color: red;
    width:fit-content;
    padding-left: 1px;
    padding-right: 1px;
    padding-top : 5px;
    padding-bottom: 5px;
    }
  [type=text] {
    padding:5px;
    border:2px solid #ccc;
    -webkit-border-radius: 5px;
    border-radius: 5px;
  }
  [type=text]:focus {
    border-color:rgb(23, 73, 211) ;
    }
  textarea#synopsis {
      height: 250px;
      width: 250px;
      word-wrap: break-word;
      word-break: break-all;
    }
  input[type=submit] {
    padding:5px 15px;
    background:#ccc;
    border:0 none;
    cursor:pointer;
    -webkit-border-radius: 5px;
    border-radius: 5px;
    margin: 5px 15px;
    }
}
</style>
