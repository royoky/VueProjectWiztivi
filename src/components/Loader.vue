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
    height: 100%;
    width: 100%;
}
.loader {
    position: relative;
    z-index: 1;
    border: 5px solid #f3f3f3; /* Light grey */
    border-top: 5px solid #3498db; /* Blue */
    border-radius: 50%;
    width: 30px;
    height: 30px;
    animation: spin 2s linear infinite;
    justify-content: center;
    justify-items: center;
}

@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}
</style>
