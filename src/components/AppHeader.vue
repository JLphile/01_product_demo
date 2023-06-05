<template>
  <h2 class="title">{{ title }}</h2>
  <p>This is AppHeader.vue</p>
</template>

<script>
export default (await import('vue')).defineComponent({
  data() {
    return {
      title: 'AppHeader',
    }
  },
})

</script>

<style scoped></style>
