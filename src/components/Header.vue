<template>
    <header :class="{ 'focused': isFocused }">
      <h1>Available movies</h1>
    </header>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return { isFocused: false }
  },
  created () {
    this.setFocus()
  },
  methods: {
    setFocus () {
      this.isFocused = true
    },
    removeFocus () {
      this.isFocused = false
    }
  }
}
</script>

<style scoped lang="less">
header {
  text-align: center;
  height: fit-content;
  color: blue;
  &.focused {
    color: yellow;
    background-color: gray;
  }
}
 /* Extra small devices (phones, 400px and down) */
 @media only screen and (max-width: 400px) {
    h1 {font-size: 80%;}
 }
</style>
