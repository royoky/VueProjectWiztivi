<template>
    <header>
      <h1>Available movies</h1>
    </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped lang="less">
header {
  text-align: center;
  height: fit-content;
}
 /* Extra small devices (phones, 400px and down) */
 @media only screen and (max-width: 400px) {
    h1 {font-size: 80%;}
 }
</style>
