<template>
<main>
  <movie-div v-for="(movie, index) in movies" :key="index" :img-src="getImgUrl(movie)" :img-title="movie.title" :img-alt="movie.alt" :div-u-r-l="movie.link"/>
</main>
</template>

<script>
import MovieDiv from './MovieDiv.vue';
export default {
  name: "MovieList",
  components: {
    MovieDiv
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
      ]
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
      getImgUrl (movie) {
        return `/posters/${movie.poster}`
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
