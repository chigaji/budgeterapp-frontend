<template>
  <div>
    <NuxtLayout>
      <v-app>
        <AppHeader />
        <NuxtPage />
      </v-app>
    </NuxtLayout>
  </div>
</template> 
<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  /* opacity: 0; */
  /* filter: grayscale(1); */
  transform: rotate3d(1, 1, 1, 15deg);
  /* filter: blur(1rem); */
}
</style>
