<template>
  <div>
    <form @submit.prevent="submit">
      <p>Movie Title</p>
      <input type="text" v-model="title" placeholder="Movie title">
      <p>Movie Poster</p>
      <input type="text" v-model="poster" placeholder="Movie poster">
      <p>Image alternative text</p>
      <input type="text" v-model="alt" placeholder="Alternative text">
      <p>Movie link</p>
      <input type="text" v-model="link" placeholder="Movie link">
      <p>Synopsis</p>
      <input id="synopsis" type="text" v-model="synopsis" placeholder="Synopsis">
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
      title: '',
      poster: '',
      alt: '',
      link:'',
      synopsis:'',
      id:0,
      errorMessages: null
    }
  },
  methods: {
    submit () {
/*       console.log('title', this.title)
      console.log('link', this.link)
      console.log('synopsis', this.synopsis) */
      this.errorMessages = null
      this.sendForm()
    },
    async sendForm () {
      try {
        let response = await fetch('http://localhost:5000/MovieForm', {
          method: 'post',
          headers: {
            "Content-type": "application/json; charset=UTF-8"
          },
          body: JSON.stringify ({
            title: this.title,
            poster: this.poster,
            alt: this.alt,
            link: this.link,
            synopsis: this.synopsis,
            id:0
          })
        })
        if (!response.ok) {
          if (response.status == 400) {
            this.errorMessages = await response.json()
            }
            else {
              this.errorMessages = ['unexpected error, try again']
            }
        } else { this.$router.push('/')}
        
      } catch (error) {
      this.errorMessages = [error.message]
      }
    }
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
  input[type=text] {
    padding:5px;
    border:2px solid #ccc;
    -webkit-border-radius: 5px;
    border-radius: 5px;
    &#synopsis {
      height: 300px;
      word-wrap: break-word;
      word-break: break-all;
    }
  }
  input[type=text]:focus {border-color:rgb(23, 73, 211) ; }

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

