<template>
  <div class="flex p-8 flex-col">
    
    <input 
      class="rounded-md border-2 
        border-gray-200"
      type="text"
      placeholder="Search for meals" 
    />

  <div 
    class="flex justify-center gap-2 mt-2"
  >
    <router-link 
      :to="{name: 'byLetter', 
        params: {letter}}"
      v-for="letter of letters"
      :key="letter"
    >
      {{  letter }}
    </router-link>
  </div>
  </div>
</template>

<script setup> 

import { computed } from 'vue';
import store from '../store';

const meals = computed(() => store.state.meals);
const letters = 'ABCDEFGHIJQKLMNOPQRSTUVWXYZ'.split("");


</script>