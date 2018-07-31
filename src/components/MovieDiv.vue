<template>
    <div>
        <a :href="divURL">
        <img :alt="imgAlt" :src="imgSrc">
        <p>{{ imgTitle }}</p>
        </a>
    </div>
</template>

<script>
export default {
  name: 'MovieDiv',
  props: {
    imgSrc: { type: String, required: true },
    imgAlt: { type: String, required: true },
    imgTitle: { type: String, required: true },
    divURL: { type: String, required: true }
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
