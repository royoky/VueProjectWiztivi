<template>
    <div>
        <span>{{ title }}</span>
    </div>
</template>

<script>
export default {
    name: 'compo',
    props: {
        title: { type: String, required: true }
    },
    data () {
        return {
            movies: [
                { title: 'title', url: 'url'}
        ]
        }
    }
}
</script>
