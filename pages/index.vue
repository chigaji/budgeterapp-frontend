<template lang="">
  <div class="page">
    <AppBanner />
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
    color: yellow;
}
/* .page{ */
    /* background-color: #1867C0; */
    /* background-color: lightgray; */
/* } */
/* @import url("animate.css"); */
</style>