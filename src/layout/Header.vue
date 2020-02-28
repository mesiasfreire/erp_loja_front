<template>
    <v-layout row wrap>
       <v-toolbar
          dense
          dark
          color="#0B304B"
          height="64"
        >
           <v-flex mx-3>
              <v-avatar width="48 mt-2">
                  <img src="../assets/logo_erp.svg" alt="Logo PMZ">
              </v-avatar>
              <div class="d-flex flex-col mx-2">
                  <label class="font-semibold">João Damasceno</label>
                  <label class="antialiased font-light">Cód. 3456</label>
              </div>
               <v-spacer></v-spacer>
                <div class="mx-3">
                    <v-avatar outlined class="border-2 border-white" >
                        <v-img content  src="https://randomuser.me/api/portraits/women/4.jpg" alt="Logo PMZ"></v-img>
                    </v-avatar>
                </div>
           </v-flex>
        </v-toolbar>
    </v-layout>
</template>

<script>
  export default {
    props: {
      source: String,
    },
    data: () => ({
      drawer: null,
    }),
  }
</script>

<style scoped>

</style>