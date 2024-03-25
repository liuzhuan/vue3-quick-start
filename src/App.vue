<script setup>
import { ref } from 'vue'

const ok = ref(true)

const toggle = () => ok.value = !ok.value
</script>

<template>
  <div>
    <h1 v-if="ok">v-if</h1>
    <h1 v-show="ok">v-show</h1>
    <button type="button" @click="toggle">toggle</button>
  </div>  
</template>