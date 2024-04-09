<!-- Parent.vue -->
<template>
  <component :is="activeComponent" />
  <button @click="handleToggle">toggle</button>
</template>

<script setup>
import { ref } from 'vue'
import Foo from './components/Foo.vue'
import Bar from './components/Bar.vue'

const activeComponent = ref(Foo)

function handleToggle() {
  if (activeComponent.value === Foo) {
    activeComponent.value = Bar
  } else {
    activeComponent.value = Foo
  }
}
</script>
