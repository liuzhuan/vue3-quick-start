<template>
  <div class="count">count is {{ count }}</div>
  <button @click="inc">Increment</button>
</template>

<script setup>
import { ref } from 'vue'

const count = ref(0)

function inc() {
  count.value += 1
}
</script>

<style>
.count {
  color: steelblue;
}
</style>
