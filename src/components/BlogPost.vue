<template>
  <h4>{{ title }}</h4>
  <button @click="$emit('enlarge-text')">Enlarge Text</button>
</template>

<script setup>
defineProps(['title'])
defineEmits(['enlarge-text'])
</script>
