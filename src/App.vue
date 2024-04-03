<template>
  <div>
    <BlogPost title="Hello world" @enlarge-text="handleEnlargeText" />
    <BlogPost title="Foobar" />
    <BlogPost title="Thanks" />
  </div>
</template>

<script setup>
import BlogPost from './components/BlogPost.vue'
import { ref } from 'vue'

const title = ref('hello world')

function handleEnlargeText() {
  console.log('handle enlarge text')
}
</script>
