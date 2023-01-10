<template>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
    <MealItem 
      v-for="meal of meals" 
      :key="meal.idMeal"
      :meal="meal" 
    />
  </div>
</template>

<script setup>
import { computed, onMounted } from "@vue/runtime-core";
import { useRoute } from "vue-router";
import store from '../store'

const route = useRoute();
const meals = computed(() => store.state.mealsByIngredients);
onMounted(() => {
  store.dispatch('searchMealsByIngredient', 
    route.params.ing);
});

</script>