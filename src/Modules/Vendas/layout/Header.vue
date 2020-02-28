<template>
    <v-layout row wrap>
       <v-toolbar
          dense
          dark
          color="#0B304B"
          height="64"
        >
           <v-flex>
               <v-btn icon>
                   <v-icon>mdi-lock</v-icon>
               </v-btn>
               <div class="d-flex align-center">
                   <p class="font-weight-black">João Damasceno</p>
                   <p>Cód. 3456</p>
               </div>
                <div class="ml-12 mr-3">
                    <v-btn icon>
                        <v-icon>mdi-book-open</v-icon>
                    </v-btn>
                </div>
               <v-autocomplete
               flat
               hide-no-data
               hide-details
               placeholder="Buscar produto"
               solo-inverted
               clearable
               append-icon="mdi-magnify"
               >

               </v-autocomplete>
               <div class="ml-3">
                   <v-btn icon>
                       <v-icon>mdi-account</v-icon>
                   </v-btn>
               </div>
                <div class="mx-3">
                    <v-btn icon>
                        <v-icon>mdi-cart</v-icon>
                    </v-btn>
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