<template>
  <div class="flex p-8 flex-col">

    <MealsByLetter />

  </div>
</template>

<script setup> 

import { computed, onMounted, ref } from 'vue';
import store from '../store';
import axiosClient from '../axiosClient';
import MealsByLetter from './MealsByLetter.vue';


const ingredients = ref([])

onMounted(async () => {
  const response = await axiosClient.get('/list.php?i=list');
  console.log(response.data);
  ingredients.value = response.data;
})

</script>