<template>
    <section>
        <h1>My Form</h1>
        <div style="white-space: pre-line;">text: {{ text }}</div>
        <textarea v-model="text" rows="10"></textarea>
        
        <section>
            <h1>checkbox</h1>
            <input type="checkbox" id="checkbox" value="good" v-model="checked" />
            <label for="checkbox">{{ checked }}</label>

            <h2>checked names: {{ checkedNames }}</h2>
            <input type="checkbox" id="tony" value="Tony" v-model="checkedNames">
            <label for="tony">Tony</label>

            <input type="checkbox" id="peter" value="Peter" v-model="checkedNames">
            <label for="peter">Peter</label>

            <input type="checkbox" id="thor" value="Thor" v-model="checkedNames">
            <label for="thor">Thor</label>
        </section>

        <section>
            <h1>Radio</h1>
            <h2>picked: {{ picked }}</h2>
            <input type="radio" id="one" value="One" v-model="picked" />
            <label for="one">One</label>

            <input type="radio" id="two" value="Two" v-model="picked" />
            <label for="two">Two</label>

            <h2>picked2: {{ picked2 }}</h2>
            <input type="radio" id="three" value="Three" v-model="picked2" />
            <label for="three">Three</label>

            <input type="radio" id="four" value="Four" v-model="picked2" />
            <label for="four">Four</label>
        </section>
    </section>
</template>

<script setup>
import { ref } from 'vue'

const text = ref('')

const checked = ref(false)

const checkedNames = ref([])

const picked = ref('')
const picked2 = ref('')
</script>