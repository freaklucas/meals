<template>
  <div class="p-8">
    <h1 class="text-4xl font-sans mb-4">Ingredients</h1>
      <input
        v-model="keyword"
        class="rounded border-2 mb-3 
          border-gray-200 w-full"
        type="text"
        placeholder="Search for ingredients" 
      />
    <router-link
      :to="{ 
        name: 'byIngredient', 
        params: {ingredient: ingredient.strIngredient},
      }"
      v-for="ingredient of computedIngredients"
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
import { computed, onMounted, ref } from "@vue/runtime-core";
import axiosClient from "../axiosClient";

const keyword = ref('');
const ingredients = ref([]);
const computedIngredients = computed(() => {
  if (!computedIngredients) return ingredients;
  return ingredients.value.filter((i) =>
    i.strIngredient.toLowerCase().includes(keyword.value.toLowerCase())
  );
});

onMounted(() => {
  axiosClient.get('list.php?i=list')
    .then(({ data}) => {
      ingredients.value = data.meals;
    });
});

</script>