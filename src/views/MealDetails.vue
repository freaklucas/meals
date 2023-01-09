<template>
  <div class="max-w-[800px] mx-auto p-8">

    <h1 class="text-5xl font-mono mb-5">
    </h1>
    <img 
      :src="meal.strMealThumb" 
      :alt="meal.strMeal"
      
    />
    <div class="grid grid-cols-1 sm:grid-cols-3 text-lg py-2">
     <div class="font-bold">
      Category: {{ meal.strCategory }}
     </div>
     <div class="font-bold">
      Area: {{ meal.strArea }}
     </div>
     <div class="font-bold flex justify-center">
      Tags: {{ meal.strTags }}
     </div>
    </div>

    <div class="my-3 font-mono">
      Instructions: "{{ meal.strInstructions }}"
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2">
      <div>
        <h2 class="text-2xl font-semibold mb-2">
          Ingredients
        </h2>
        <ul>
          <template v-for="(el, index) of new Array(20)" :key="el">
           <li v-if="meal[`strIngredient${index+1}`]">
            {{index+1}}) {{ meal[`strIngredient${index+1}`] }}
           </li>
          </template>
        </ul>
      </div>
      <div>
        <h2 class="text-2xl font-semibold mb-2">
          Measures
        </h2>
        <ul>
          <template v-for="(el, index) of new Array(20)" :key="el">
           <li v-if="meal[`strMeasure${index+1}`]">
            {{index+1}}){{ meal[`strMeasure${index+1}`] }}
           </li>
          </template>
        </ul>
      </div>

      <div class="mt-5">
        <YoutubeButton :href="meal.strYoutube">
          Go to youtube
        </YoutubeButton>
        <a 
          :href="meal.strSource"
          target="_blank"
          class="px-3 py-2 rounded bg-indigo-500
            hover:bg-indigo-400 text-white border-2
            transition-colors ml-4 border-indigo-500
          "
        >
          View Original Source
        </a>
      </div>
    </div>

  </div>
</template>

<script setup>
import {onMounted, ref} from 'vue';
import {useRoute} from 'vue-router';
import axiosClient from '../axiosClient';
import YoutubeButton from '../components/YoutubeButton.vue';


const route = useRoute();
const meal = ref({});

onMounted(() => {
  axiosClient.get(`lookup.php?i=${route.params.id}`)
    .then(({data}) => {
      meal.value = data.meals[0] || {};
    });

});

</script>