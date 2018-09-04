<template>
    <div id='myModal' class='modal'>
        <div class='modal-content'>
            <span class='close' @click="closePopup">&times;</span>
            <div id='img-synop-container'>
              <div id='img-container'>
                <h4>{{ moviesState.selectedMovie.title }}</h4>
                <img :src="getImgUrl()" :alt="moviesState.selectedMovie.alt">
              </div>
              <p>{{ moviesState.selectedMovie.synopsis }}</p>
            </div>
            <div id='div-close' @click="closePopup">Close</div>
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
      if (moviesState.selectedMovie.poster.includes('http')) {
        return moviesState.selectedMovie.poster
      } else {
        return `http://localhost:5000/posters/${moviesState.selectedMovie.poster}`
      }
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
    },
    // When the user clicks anywhere outside of the modal, close it
    clickOutsideModal (event) {
      // console.log('clicked')
      if (event.target.className === 'modal') {
        this.closePopup()
      }
    }
  },
  created () {
    addEventListener('keydown', this.detectEscapeKey)
    window.addEventListener('click', this.clickOutsideModal)
  },
  beforeDestroy () {
    removeEventListener('keydown', this.detectEscapeKey)
    window.removeEventListener('click', this.clickOutsideModal)
  }
}
</script>

<style lang='less' scoped>
div{
  h4 {
    width: 100%;
    justify-content: left;
    margin-left: 2%;
  }
  div#img-synop-container {
    display: flex;
    flex-direction: row;
    //flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
    flex-shrink: 1;
  }
  div#img-container {
    padding: 0% 2% 3% 0%;
    text-align: center;
  }
  img {
    min-width: 50px;
    max-width: 200px;
  }
  /* The Modal (background) */
  .modal {
    /*display: none; /* Hidden by default */
    //position: fixed; /* Stay in place */
    z-index: 1; /* Sit on top */
    right: 0;
    top: 0;
    bottom: 0;
    left: 0;
    width: 100vw; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: rgba(10, 3, 3, 0); /* Fallback color */
    background-color: rgba(0, 0, 0, 0.8); /* Black w/ opacity */
    // overflow: scroll;
  }
  /* Modal Content/Box */
  .modal-content {
    position: relative;
    background-color: black;
    margin-left: auto;
    margin-right: auto;
    margin-top: 70px;
    padding: 20px;
    border: 1px solid #888;
    width: 80%; /* Could be more or less, depending on screen size */
    justify-content: center;
  }
  /* The Close Button */
  .close {
    // position: absolute;
    // top: 0;
    // right: 0;
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
  #div-close {
    //width: 100%;
    background-color: blue;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    text-align: center;
    padding: 10px;
  }
  #div-close:hover {
    cursor: pointer;
  }
}
</style>
