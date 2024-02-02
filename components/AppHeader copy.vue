
<script setup>
// import logo from '~/assets/images/banner/budgeter_thumbnail.png';
// import image from '~/assets/images/img3.jpg';
  // const name="Header1"

</script>

<template>
  <v-app>
    <v-app-bar
      color="info"
      density="prominent"
    >
      <v-img
        src="~/assets/images/logos/app-logo.png"
        sizes="50"
      />

      <!-- <v-app-bar-title>Budget App</v-app-bar-title> -->
    </v-app-bar>

    <v-main>
      <v-container fluid>
        <v-card
          border
          class="mb-2"
          density="compact"
          prepend-avatar="https://randomuser.me/api/portraits/women/10.jpg"
          subtitle="Salsa, merengue, y cumbia"
          title="Cuba"
          variant="text"
        >
          <v-img
            src="https://picsum.photos/512/128?image=660"
            height="128"
            cover
          />

          <v-card-text>
            During my last trip to South America, I spent 2 weeks traveling through Patagonia in Chile.
          </v-card-text>

          <template #actions>
            <v-btn
              color="primary"
              variant="text"
            >
              View More
            </v-btn>

            <v-btn
              color="primary"
              variant="text"
            >
              See in Map
            </v-btn>
          </template>
        </v-card>

        <v-card
          border
          density="comfortable"
          prepend-avatar="https://randomuser.me/api/portraits/women/17.jpg"
          subtitle="Salsa, merengue, y cumbia"
          title="Florida"
          variant="text"
        >
          <v-img
            src="https://picsum.photos/512/128?random"
            height="128"
            cover
          />

          <v-card-text>
            During my last trip to Florida, I spent 2 weeks traveling through the Everglades.
          </v-card-text>

          <template #actions>
            <v-btn
              color="primary"
              variant="text"
            >
              View More
            </v-btn>

            <v-btn
              color="primary"
              variant="text"
            >
              See in Map
            </v-btn>
          </template>
        </v-card>
      </v-container>
    </v-main>
  </v-app>
</template>
