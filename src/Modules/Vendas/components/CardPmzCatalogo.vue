<template>
    <div class="max-w-md transition-transform duration-500 ease-in-out hover:scale-110">
        <div class="mt-10 max-w-md shadow-xl mx-4 bg-white">
            <div class="cursor-pointer flex justify-center">
                <img
                        class="object-contain w-48 h-48"
                        :src="item.image"
                />
            </div>
            <div class="p-3 text-sm">
                <h3 class="font-thin">{{item.description}}</h3>
                <p class="font-thin text-blue-900 text-xs mt-2">{{item.subDesc}}</p>
            </div>
            <div class="bg-gray-200 p-1 rounded mx-2">
                <div class="flex items-center text-xs font-semibold text-blue">
                    <p class="mx-2">GOL</p>
                    <p class="mx-2">GOL</p>
                    <p class="mx-2">GOL</p>
                    <div class="flex justify-end">
                        <a href>
                            <v-icon>fas fa-angle-right</v-icon>
                        </a>
                    </div>
                </div>
            </div>
            <div class="px-2 mt-2">
                <p class="text-xs font-semibold text-blue-900">
                    Estoque:
                    <span class="font-thin">{{item.stockQty}}</span>
                </p>
            </div>
            <div class="px-2 flex">
                <p class="font-semibold text-blue-900 antialiased text-2xl">{{item.price}}</p>
                <div class="flex justify-end items-center mx-15">
                    <div class="bg-purple-900 rounded-full h-6 w-6 transform rotate-45 text-center">
                        <a href class>
                            <v-icon small color="#ffffff">{{icons.mdiLink}}</v-icon>
                        </a>
                    </div>
                    <a href class="px-2">
                        <v-icon>{{icons.mdiSwapHorizontalCircle}}</v-icon>
                    </a>
                    <a href class="px-2">
                        <v-icon color="#9CCB51">{{icons.mdiPlusCircle}}</v-icon>
                    </a>
                    <a href class="px-2">
                        <v-icon light>{{icons.mdiDotsVertical}}</v-icon>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  import {
    mdiPlusCircle,
    mdiSwapHorizontalCircle,
    mdiLink,
    mdiDotsVertical
  } from "@mdi/js";
  export default {
    name: "CardPmzCatalogo",
    props:{
     item: Object,
    },
    icons: {
      mdiPlusCircle,
      mdiSwapHorizontalCircle,
      mdiLink,
      mdiDotsVertical
    },
    mounted() {
      console.log(this.items);
    }
  }
</script>

<style scoped>
    .grow {
        transition: transform 0.5s ease;
    }
    .grow:hover {
        transform: scale(1.2);
    }
</style>