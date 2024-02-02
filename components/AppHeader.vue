

<template>
  <v-app-bar
    app
  >
    <AppLogo />
    <v-spacer />
    <!-- <v-spacer /> -->
    <div class="menuItems">
      <v-btn>
        <nuxt-link
          to="/register"
          class="menuItem"
        >
          register
        </nuxt-link>
      </v-btn>
      <v-btn>
        <nuxt-link
          to="/login"
          class="menuItem"
        >
          login
        </nuxt-link>
      </v-btn>
      <v-btn>
        <nuxt-link
          to="/"
          class="menuItem"
        >
          Budget
        </nuxt-link>
      </v-btn>
      <v-btn>
        <nuxt-link
          to="/"
          class="menuItem"
        >
          Expenses
        </nuxt-link>
      </v-btn>
    </div>
  </v-app-bar>
</template>

<script setup>
</script>

<style lang="scss">

.menuItems {
  display: flex;
  align-items: center;
  .menuItem {
    text-decoration: none;
  }
}

</style>