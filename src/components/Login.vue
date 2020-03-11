<template>
       <div class="h-screen bg-gray-300" >
           <div class="flex content-center flex-wrap md:mt-48 sm:mt-30 justify-center ">
                   <div class="bg-white sm:h-full md:w-1/2  sm:h-1/2 mx-auto rounded-md  md:mt-5 md:max-w-sm md:max-w-sm md:max-w-lg shadow-2xl">
                       <div class="flex justify-center py-4 rounded-corner ">
                           <img class="md:w-256" src="../assets/logo-pmz.svg" alt="">
                       </div>
                       <div class="md:mt-6">
                           <h3 class="font-normal text-center tracking-wide text-3xl">Bem vindo a Filial - {{ filial.filial }} </h3>
                           <h6 class="text-center text-sm">Usuário ou codigo do vendedor</h6>
                       </div>
                       <div class="mx-20">
                           <v-form class="mt-4">
                                       <v-text-field
                                               label="Código do Vendedor"
                                               outlined
                                               clearable
                                               append-icon="mdi-account-box"

                                       ></v-text-field>
                                       <v-text-field
                                               label="Senha do Vendedor"
                                               outlined
                                               clearable
                                               append-icon="mdi-lock"
                                               type="password"
                                       ></v-text-field>
                               <div class="mt-3 mb-5">
                                   <v-btn block color="#006500" dark  x-large to="dashboard">Entrar</v-btn>
                               </div>
                           </v-form>
                       </div>
                   </div>
           </div>

       </div>
</template>

<script>
    import {FilialQueries} from "../graphql"
  export default {
    props: {
      source: String,
    },
    data(){
      return {
        filial:null
      }
    },
    computed:{

    },
    apollo:{
      getFilialDetails: {
        query:FilialQueries.getFilialDetails,
        result(res){
          this.filial=res.data.useFilial;
        }
      }
    }

  }
</script>