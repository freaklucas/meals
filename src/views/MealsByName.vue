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
  <Meals
     :meals="meals"
  />
</template>

<script setup>
import {ref, computed, onMounted} from 'vue';
import { useRoute } from 'vue-router';
import store from '../store'
import Meals from '../components/Meals.vue';

const route = useRoute();
const keyword = ref('');
const meals = computed(() => store.state.searchMeals);

function searchMeals() {
  if(keyword.value) {
    store.dispatch('searchMeals', keyword.value);
  } else {
    store.commit('setSearchMeals', []);
  }
}

onMounted(() => {
  keyword.value = route.params.name;
  if (keyword.value) searchMeals();
})

</script>