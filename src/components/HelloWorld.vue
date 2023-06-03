<template>
  <h2>This is Hello World component</h2>
  <h3>{{ title }}</h3>
</template>

<script>
export default (await import('vue')).defineComponent({
  data() {
    return {
      title: 'Hello World',
    }
  },
})
</script>

<style scoped></style>
