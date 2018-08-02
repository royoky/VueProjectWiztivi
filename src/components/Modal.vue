<template>
    <div id='myModal' class='modal'>
        <div class='modal-content'>
            <span class='close' @click="closePopup">&times;</span>
            <p>{{ moviesState.selectedMovie.synopsis }}</p>
            <img :src="getImgUrl()" :alt="moviesState.selectedMovie.alt">
        </div>
    </div>
</template>

<script>
import { moviesState } from '../states/movies-state'
export default {
  name: 'Modal',
  data () {
    return { moviesState }
  },
  methods: {
    getImgUrl () {
      return `/posters/${moviesState.selectedMovie.poster}`
    },
    closePopup () {
      moviesState.selectedMovie = null
    },
    // Function to detect the Escape key and close the popup
    detectEscapeKey (event) {
      console.log(`input event. you have just inputed "${event.keyCode}"`)
      if (event.keyCode === 27) {
        this.closePopup()
      }
    }
  },
  created () {
    addEventListener('keydown', this.detectEscapeKey)
    //addEventListener('keydown', console.log)
  },
  beforeDestroy () {
    removeEventListener('keydown', this.detectEscapeKey)
  }

}
</script>

<style lang='less' scoped>
  /* The Modal (background) */
.modal {
    /*display: none; /* Hidden by default */
    position: fixed; /* Stay in place */
    z-index: 1; /* Sit on top */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: rgba(10, 3, 3, 0); /* Fallback color */
    background-color: rgba(0,0,0,0.8); /* Black w/ opacity */
}
/* Modal Content/Box */
.modal-content {
    background-color: black;
    margin-left: auto; /* 15% from the top and centered */
    margin-right: auto;
    margin-top: 70px;
    padding: 20px;
    border: 1px solid #888;
    width: 80vw; /* Could be more or less, depending on screen size */
    justify-content: center
}
/* The Close Button */
.close {
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
}
.close:hover,
.close:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
}
</style>
