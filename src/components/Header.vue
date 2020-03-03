<template>
    <v-layout row wrap >
        <v-toolbar
                dense
                dark
                color="#0B304B"
                height="64"
        >
            <component :is="header"></component>
        </v-toolbar>
    </v-layout>
</template>

<script>
    import HeaderVendas from '../Modules/Vendas/layout/Header'
    import HeaderDashboard from '../layout/Header'
  export default {
    props: {
      source: String,
    },
    components:{
        'header-vendas':HeaderVendas,
        'header-dashboard':HeaderDashboard,
    },
    data: () => ({
      drawer: null,
      header:'header-dashboard'
    }),

  }
</script>

<style scoped>

</style>