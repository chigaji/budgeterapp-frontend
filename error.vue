<template lang="">
  <div>
    <h2>{{ error.statusCode }} {{ error.message }}</h2>
    <button @click="handleError">
      Back to Home
    </button>
  </div>
</template>
<script setup>
    const props = defineProps({
        error: Object
    })
    const handleError = ()=> clearError({
        redirect: '/',
    })
</script>
<style lang="">
    
</style>