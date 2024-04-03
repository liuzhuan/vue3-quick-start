<template>
    <div>
      <h1 class="title">Counter</h1>
      <button @click="count++">
        clicked {{ count }} times
      </button>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const count = ref(0)
  </script>
  
  <style>
  .title {
    color: steelblue;
  }
  </style>