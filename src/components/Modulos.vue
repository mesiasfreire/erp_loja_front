<template>
    <v-card max-width="400"
            height="150"
            class="mx-auto grow"
            color="#5388C9"
            outlined
            tile
            hover


    >
        <div class="d-flex justify-center">
            <v-btn class="mt-5" depressed outlined fab x-large  dark color="#ffffff">
                <v-icon size="50" dark>mdi-cart</v-icon>
            </v-btn>

        </div>
        <div class="text-center pa-2 mt-3">
            <p class="font-weight-medium text-white ">Sistema Vendas</p>
        </div>

    </v-card>
</template>

<script>
  export default {
    inheritAttrs:false,
    name: "Modulos",
    props:{
      modulo: {
        type
      },
      to: String,
      color: String,
    }
  }
</script>

<style scoped>
    .grow {
        transition: transform 0.5s ease;
    }
    .grow:hover {
        transform: scale(1.1);
        z-index: 10;
    }
</style>