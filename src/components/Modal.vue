<template>
    <div id='myModal' class='modal'>
        <div class='modal-content'>
            <span class='close' @click="$emit('closePopup')">&times;</span>
            <p>{{ movie.synopsis }}</p>
            <img :src="getImgUrl()" :alt="movie.alt">
        </div>
    </div>
</template>

<script>
export default {
    name: 'Modal',
    props: {
        movie: { type: Object, required: true }
    },
    methods: {
        getImgUrl () {
            return `/posters/${this.movie.poster}`
        }
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
    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
}
/* Modal Content/Box */
.modal-content {
    background-color: black;
    margin: 2px; /* 15% from the top and centered */
    padding: 20px;
    border: 1px solid #888;
    width: 80vw; /* Could be more or less, depending on screen size */
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
