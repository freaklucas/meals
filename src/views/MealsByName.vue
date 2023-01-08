<template>
  <div class="p-8 font-semibold">
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
      <img 
        :src="meal.strMealThumb" 
        :alt="meal.strMeal"
        class="rounded-t-xl h-62 w-full object-cover"
      />
      <h2 class="px-3 py-2 font-semibold text-center">
        {{meal.strMeal}}
      </h2>
      <h3 class="px-3 py-2 font-semibold text-center">
        {{ meal.strCategory }}
      </h3>
      <div class="px-3 py-2 text-center">
        <a 
          :href="meal.strYoutube"
          target="_blank"
        >
          Youtube
        </a>
        <router-link 
          to="/"
          target="_blank"
        >
          View
        </router-link>
      </div>
    </div>
  </div>

</template>

<script setup>
import {ref, computed} from 'vue';
import store from '../store'

const keyword = ref('');
const meals = computed(() => store.state.searchMeals);

function searchMeals() {
  store.dispatch('searchMeals', keyword.value);
}
</script>