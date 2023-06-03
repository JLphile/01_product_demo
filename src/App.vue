<template>
  <h2>{{ title }}</h2>
  <h2>当前计数:{{ counter }}</h2>
  <button @click="increment">+1</button>
  <button @click="decrement">-1</button>
  <HelloWorld></HelloWorld>
  <hello-world></hello-world>
</template>

<script>
// 导入需要的组件
import HelloWorld from './components/HelloWorld.vue'

export default (await import('vue')).defineComponent({
  // 注册局部组件
  components: {
    HelloWorld,
  },
  data() {
    return {
      title: '计数器',
      counter: 0,
    }
  },
  methods: {
    increment() {
      this.counter++
    },
    decrement() {
      this.counter--
    },
  },
})
</script>

<style></style>
