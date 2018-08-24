<template>
    <div class="wrapper">
        <div class="loader"/></div>
</template>

<script>
export default {
  name: 'Loader'
}
</script>

<style lang="less" scoped>
.wrapper {
    position: absolute;
    padding: 0px;
    height: 202.31px;
    width: 150px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0px
}
.loader {
    //position: absolute;
    z-index: 1;
    border: 5px solid #f3f3f3; /* Light grey */
    border-top: 5px solid #3498db; /* Blue */
    border-radius: 50%;
    width: 30px;
    height: 30px;
    animation: spin 2s linear infinite;
}

@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}
</style>
