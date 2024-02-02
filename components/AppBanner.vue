<template>
  <div>
    <div class="banner1-component">
      <v-container>
        <!-- -----------------------------------------------
              Start Banner1
          ----------------------------------------------- -->
        <v-row justify="center">
          <v-col
            cols="12"
            md="12"
            lg="12"
          >
            <div class="text-center text-md-left">
              <h2
                class="
                    banner1-title
                    font-weight-bold
                    text-uppercase
                    white--text
                  "
              >
                BUDGETER APP
              </h2>
              <p class="white--text op-8 font-weight-regular">
                This app plans your monthly budget and generates reports at the end of the month for you.
              </p>
              <div class="mt-5 pt-2">
                <v-btn
                  large
                  rounded
                  to="/register"
                  depressed
                  color="white"
                  elevation="0"
                >
                  Do you want to Manage your finances effectively?
                </v-btn>
              </div>
            </div>
          </v-col>
          <v-col
            cols="12"
            md="12"
            lg="12"
          >
            <v-img
              :src="image"
              alt="banner"
            />
          </v-col>
        </v-row>
  
        <!-- -----------------------------------------------
              End Banner1
          ----------------------------------------------- -->
      </v-container>
    </div>
  </div>
</template>
  <script setup>
  import image from '~/assets/images/banner/budgeter_thumbnail.png';
  
  </script>
  