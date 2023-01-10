<template>
  <div class="p-8">
    <h1 class="text-4xl font-sans mb-4">Ingredients</h1>
    <router-link
      v-for="ingredient of ingredients"
      :to="{ 
        name: 'byIngredient', 
        params: {ingredient: ingredient.strIngredient},
      }"
      :key="ingredient.id"
      class="block bg-white roundend 
        p-3 mb-3 shadow hover:bg-purple-50
      "
    >
      <h3 class="font-mono text-2xl mb-2">
        {{ ingredient.strIngredient }}
      </h3>
      <p class="font-serif text-md">
        {{ ingredient.strDescription }}
      </p>
    </router-link>
  </div>
</template>

<script setup>
import { onMounted, ref } from "@vue/runtime-core";
import axiosClient from "../axiosClient";

const ingredients = ref([]);

onMounted(() => {
  axiosClient.get('list.php?i=list')
    .then(({ data}) => {
      ingredients.value = data.meals;
    });
});

</script>