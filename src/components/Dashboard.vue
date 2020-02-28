<template>
    <div>
        <Header/>
        <router-view/>

        <v-container>
            <div class="display-1 font-weight-thin align-center justify-center text-center p-2 sm:text-xs text-gray-700">
                <h1 class="antialiased">Painel Principal</h1>
                <h6>Escolha o sistema que você deseja acessar </h6>
            </div>

            <v-row dense>
                <v-col  cols="12"  md="4">
                  <Modulos/>
                </v-col>
                <v-col cols="12"  md="4">
                    <Modulos :icon="" :module="" :to :color />
                </v-col>
                <v-col cols="12"  md="4">
                    <Modulos/>
                </v-col>
            </v-row>

        </v-container>
    </div>
    
</template>

<script>
    import Header from './Header'
    import Modulos from './Modulos'
  export default {
    name: "Dashboard",
    components:{ Header, Modulos }
  }
</script>

<style scoped>

</style>