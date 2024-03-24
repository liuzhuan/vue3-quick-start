<template>
    <div :class="{ active: isActive }">
        <button @click="toggle">
            TodoDeleteButton
        </button>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const isActive = ref(false)

function toggle() {
    isActive.value = !isActive.value
}
</script>

<style scoped>
.active {
    border: 4px solid green;
}
</style>