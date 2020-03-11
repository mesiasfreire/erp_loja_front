<template>
    <div>
        <Header/>
        <router-view/>

        <v-container class="relative">
            <div class="display-1 font-weight-thin align-center justify-center text-center p-2 sm:text-xs text-gray-700">
                <h1 class="antialiased">Painel Principal</h1>
                <h6>Escolha o sistema que você deseja acessar </h6>
            </div>
            <PmzLogoBg />
            <v-row dense>
                <v-col  cols="12" sm="4" md="2" >
                  <Modulos :modulo="infomacoes"  color="#0B304B" class="" />
                </v-col>
                <v-col  cols="12"  sm="4" md="2">
                    <Modulos :modulo="infomacoes"  color="#0B304B" class="" />
                </v-col>

            </v-row>

        </v-container>
    </div>
    
</template>

<script>
    import Header from './Header'
    import Modulos from './Modulos'
    import PmzLogoBg from './PmzLogoBg'
  export default {
    name: "Dashboard",
    components:{ Header, Modulos,PmzLogoBg },
    data: ()=> ({
      infomacoes: {
        key:'value'
      },
      item:{
        image:'https://images.canaldapeca.com.br/produtos/m/59/39/valvula-termostatica-serie-ouro-1663959-1533761098362.jpg',
        description:'Válvula Termostática Série Ouro',
        subDesc:'MTE-THOMSON - VT433.82 - Unitário',
        stockQty:10,
        price:39.9

      }
    }),
    created() {


    }
  }
</script>

<style scoped>

</style>