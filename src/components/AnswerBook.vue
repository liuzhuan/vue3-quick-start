<template>
    <div>
        <h1>Answer Book</h1>
        <img :src="image" :style="{ width: '200px' }" />
        <div>answer: {{ answer }}</div>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'

const answer = ref('')
const image = ref('')

onMounted(async () => {
    const res = await fetch('https://yesno.wtf/api')
    const data = await res.json()
    answer.value = data.answer
    image.value = data.image
})
</script>