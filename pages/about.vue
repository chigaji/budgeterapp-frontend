<template lang="">
  <div>
    <section>
      <p>This will be displayed at the /about route.</p>
    </section>
    <nuxt-link to="/">
      Home Page
    </nuxt-link>
  </div>
</template>
<script setup>
definePageMeta({
    pageTransition: {
        name: 'rotate',
        mode: 'out-in'
    }
})
// definePageMeta({
// //   pageTransition: {
// //     name: 'bounce',
// //     mode: 'out-in' // default
// //   }
// })

</script>
<style lang="">

    
</style>