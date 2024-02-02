<template lang="">
  <div>
    <nuxt-link
      to="/"
      class="navItem"
    >
      <img
        class="logo"
        alt="logo"
        src="~/assets/images/logos/app-logo.png"
        to="/about"
      >
    </nuxt-link>
  </div>
</template>
<script setup>
  
</script>
<style>
  .logo {
  height: 50px;
  width: 60px;
  transform: rotateY(560deg);
  animation: turn 3.5s ease-out forwards 1s;
}
@keyframes turn {
  100% {
    transform: rotateY(0deg);
  }
}
</style>