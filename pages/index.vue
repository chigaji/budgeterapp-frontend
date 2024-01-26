<template lang="">
  <div>
    <AppBanner />
    <h1>This is the Homepage in index.vue </h1>
    <AppAlert>This is an auto imported -----</AppAlert>
    <nuxt-link to="/about">
      About page
    </nuxt-link>
    <br>
    Counter : {{ counter }}
    <br>

    <button @click="counter++">
      +
    </button>
    
    <br>
    <button @click="counter--">
      -
    </button>

    <p>Current color is : <span class="color">{{ color }}</span>  </p>

    <h1>{{ website.name }}</h1>
    <p>{{ website.description }}</p>
  </div>
</template>
<script setup>
// import 'animate.css'
const color = useColor('color')
const counter = useState('counter', ()=> Math.round(Math.random()*1000))

const website = useWebsiteStore()

await callOnce(website.fetch)

const route = useRoute()
console.log(route.fullPath)
console.log(route.query)
</script>
<style>
.color{
    color: color;
}
/* @import url("animate.css"); */
</style>