<template>
  <div>
    <!-- -----------------------------------------------
          Start Header
    ----------------------------------------------- -->
    <v-app-bar
      :elevation="2"
      rounded
      class="app-header position-relative navbar-light header1"
      flat
    />
    <!-- -----------------------------------------------
          End Header
    ----------------------------------------------- -->
  </div>
</template>

<script setup>
import logo from '~/assets/images/logos/purple-logo.png';
// import image from '~/assets/images/img3.jpg';
  // const name="Header1"

  let isActive = false
 
  const toggleClass = (event) => {
    isActive = !isActive;
  }
</script>
