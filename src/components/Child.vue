<template>
    <div>
        Child
    </div>
</template>

<script setup>
import { ref } from 'vue'

const foo = ref('baz')

function sayHi() {
    console.log('say hi')
}

defineExpose({
    foo,
    // sayHi,
})
</script>