<template>
    <section>
        <h1>My Form</h1>
        <div>text: {{ text }}</div>
        <input v-model="text" placeholder="Please input something">
    </section>
</template>

<script setup>
import { ref } from 'vue'

const text = ref('')
</script>