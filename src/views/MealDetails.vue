<template>
  <div class="w-[800px] mx-auto">
    <pre>{{meal}}</pre>
    <h1 class="text-5xl font-mono mb-5">
      {{ meal.strMeal }}
    </h1>
    <img 
      :src="meal.strMealThumb" 
      :alt="meal.strMeal"
    />
    <div class="grid grid-cols-1 md:grid-cols-3 text-lg py-2">
     <div class="font-bold">
      Category: {{ meal.strCategory }}
     </div>
     <div class="font-bold">
      Area: {{ meal.strArea }}
     </div>
     <div class="font-bold">
      Tags: {{ meal.strTags }}
     </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2">
      <div>
        <h2 class="text-2xl font-semibold mb-3">
          Ingredients
        </h2>
        <ul>
          <template v-for="(el, index) of new Array(20)" :key="el">
           <li v-if="meal[`strIngredient${index+1}`]">
            {{ meal[`strIngredient${index+1}`] }}
           </li>
          </template>
        </ul>
      </div>
      <div>
        <h2 class="text-2xl font-semibold mb-3">
          Measures
        </h2>
        <ul>
          <template v-for="(el, index) of new Array(20)" :key="el">
           <li v-if="meal[`strMeasure${index+1}`]">
            {{ meal[`strMeasure${index+1}`] }}
           </li>
          </template>
        </ul>
      </div>
    </div>

  </div>
</template>

<script setup>
import {onMounted, ref} from 'vue';
import {useRoute} from 'vue-router';
import axiosClient from '../axiosClient';

const route = useRoute();
const meal = ref({});

onMounted(() => {
  axiosClient.get(`lookup.php?i=${route.params.id}`)
    .then(({data}) => {
      meal.value = data.meals[0] || {};
    });

});

</script>