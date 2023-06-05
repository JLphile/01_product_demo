<template>
  <h2 class="title">This is App.vue</h2>
  <AppHeader></AppHeader>
  <app-header></app-header>
</template>

<script>
import { defineComponent } from 'vue'
import AppHeader from './components/AppHeader'

export default defineComponent({
  name: 'App',
  components: {
    AppHeader,
  },
})


</script>

<style scoped>
.title {
  color: red;
}
</style>
