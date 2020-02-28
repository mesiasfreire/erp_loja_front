<template>
<v-app>
   <router-view />
</v-app>
</template>

<script>
export default {
  name: "App",

  components: { },

  data: () => ({})
};
</script>
<style>
@import "tailwindcss/base";
@import "tailwindcss/components";
@import "tailwindcss/utilities";

.grow {
  transition: transform 0.5s ease;
}
.grow:hover {
  transform: scale(1.2);
}
</style>
