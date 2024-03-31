<template>
  <div>
    <Child ref="child" />
    <button @click="handleClick">say hi</button>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Child from './components/Child.vue'

const child = ref(null)

onMounted(() => {
  console.log('child.value:', child.value.foo)
})

function handleClick() {
  child.value.sayHi()
}
</script>