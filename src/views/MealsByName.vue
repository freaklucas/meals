<template>
  <div class="p-8 font-semibold pb-0">
    <input
      v-model="keyword"
      @change="searchMeals"
      class="rounded border-2 
        border-gray-200 w-full"
      type="text"
      placeholder="Search for meals" 
    />
  </div>
  
  <div 
    class="
      grid grid-cols-1 
      md:grid-cols-3 gap-5
      p-8
    "
  >
    <div 
      v-for="meal of meals" 
      :key="meal.id"
      class="bg-white shadow-sm rounded-md"
    >
      <router-link 
        :to="{name: 'mealDetails', 
          params:{id: meal.idMeal}}"
      >
        <img 
          :src="meal.strMealThumb" 
          :alt="meal.strMeal"
          class="rounded-t-xl h-62 w-full object-cover"
        />
      </router-link>

      <div class="p-3">
        <h2 class="p-3 py-2 font-bold text-center">
          {{meal.strMeal}}
        </h2>
        <h3 class="p-3 py-2 font-semibold text-center">
          {{ meal.strCategory }}
        </h3>
        <p class="mb-4">
          Description...
        </p>
        <div class="flex items-center 
          justify-between text-center"
        >

        <YoutubeButton :href="meal.strYoutube">
          Youtube
        </YoutubeButton>

        </div>
      </div>
    </div>
  </div>

</template>

<script setup>
import {ref, computed, onMounted} from 'vue';
import { useRoute } from 'vue-router';
import store from '../store'
import YoutubeButton from '../components/YoutubeButton.vue';

const route = useRoute();
const keyword = ref('');
const meals = computed(() => store.state.searchMeals);

function searchMeals() {
  store.dispatch('searchMeals', keyword.value);
}

onMounted(() => {
  keyword.value = route.params.name;
  if (keyword.value) searchMeals();
})

</script>