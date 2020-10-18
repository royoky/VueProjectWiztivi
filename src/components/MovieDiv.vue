<template>

    <div :class="{ 'focused': isFocused }">
        <div class='container'>
          <!-- <a :href="movie.link"> -->
          <loader v-if="loading"/>
          <img :alt="movie.alt" :src="getImgUrl()" @click="selectMovie()" class="poster">
          <div class='middle'>
            <img src="http://localhost:5000/icons/DeleteIcon.png" alt="Delete" @click="deleteMovie()" class="delete">
            <div class='filler'></div>
            <img src="http://localhost:5000/icons/RefreshIcon.png" alt="Update" @click="updateMovie()" class="update">
          </div>
          <!-- </a> -->
      </div>
      <p>{{ movie.title }}</p>
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
      if (this.movie.poster.includes('http')) {
        return this.movie.poster
      } else {
        return `http://localhost:5000/posters/${this.movie.poster}`
      }
    },
    async selectMovie () {
      try {
        this.loading = true
        let response = await fetch(`http://localhost:5000/movie/${this.movie._id}`
        )
        this.moviesState.selectedMovie = await response.json() // do not forget the () !!
        this.loading = false
      } catch (error) {
        console.log(error)
      }
    },
    async deleteMovie () {
      try {
        this.loading = true
        await fetch(`http://localhost:5000/movie/${this.movie._id}`, {
          method: 'delete'
        })
        let ind = this.moviesState.movies.findIndex(movie => {
          return movie._id === this.movie._id
        })
        // if (ind === -1) return res.status(404).send(`No existing movie with the id ${req.params.id}`)
        this.moviesState.movies.splice(ind, 1)
        this.loading = false
        this.$router.push('/')
      } catch (error) {
        console.log(error)
      }
    },
    async updateMovie () {
      try {
        // get movie information
        let response = await fetch(`http://localhost:5000/movie/${this.movie._id}`)
        this.moviesState.selectedMovie = await response.json()
        this.$router.push('/MovieForm/' + this.movie._id)
      } catch (error) {
        this.errorMessages = [error.message]
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
  img.poster {
    border-radius: 5%;
    box-shadow: 5px 5px black;
    width: 150px;
    transition: 0.5s;
  }
  &.container:hover img.poster {
    border-style: solid;
    border-color: #2b71d8;
    transform: scale(1.05);
    cursor: pointer;
  }
  &.container:hover .middle {
    opacity: 1;
    cursor: pointer;
  }
  p {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: center;
  }
  &.focused {
    background-color: gray;
  }
  &.middle {
    transition: 0.5s ease;
    opacity: 0;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    display:flex;
    flex-direction: row;
  }
  img.delete {
    height: 40px;
    background-color: white;
    justify-self: left;
  }
  img.update {
    height: 40px;
    background-color: white;
    justify-self: flex-end;
  }
}
</style>
