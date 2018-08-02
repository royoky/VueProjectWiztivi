<template>
<main>
  <movie-div v-for="(movie, index) in movies" :key="index" :movie="movie" :select-movie="selectMovie"/>
  <modal v-if="selectedMovie" :movie="selectedMovie" :close-popup="closePopup"/>
</main>
</template>

<script>
import MovieDiv from './MovieDiv.vue'
import Modal from './Modal.vue'
import modalVue from './Modal.vue';
export default {
  name: "MovieList",
  components: {
    MovieDiv,
    Modal
  },
  data() {
    return {
      movies: [
/*         {
          title: "Jurassic Park",
          url: "http://www.allocine.fr/film/fichefilm_gen_cfilm=8488.html",
          src: "JurassicPark.jpg",
          imgAlt: "Jurassic Park"
        },
        {
          title: "Jurassic Park",
          url: "http://www.allocine.fr/film/fichefilm_gen_cfilm=8488.html",
          src: "JurassicPark.jpg",
          imgAlt: "Jurassic Park"
        },
        {
          title: "Jurassic Park",
          url: "http://www.allocine.fr/film/fichefilm_gen_cfilm=8488.html",
          src: "JurassicPark.jpg",
          imgAlt: "Jurassic Park"
        } */        
      ],
      selectedMovie: null
    }
  },
  async created () {
    try {
        let response = await fetch('data/moviesTab.json');
        this.movies = await response.json(); //do not forget the () !!

    } catch(error) {
        console.error(error);
    }
  },
  methods: {
    selectMovie (movie) {
      this.selectedMovie = movie
    },
    closePopup () {
      console.log("clicked")
      this.selectedMovie = null
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
}
</style>
