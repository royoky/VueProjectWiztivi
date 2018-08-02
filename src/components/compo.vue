<template>
    <div>
        <span :src="title">{{ title }}</span>
    </div>
</template>

<script>
export default {
  name: 'compo',
  props: {
    title: { type: string, required: true}
  }
}
</script>
