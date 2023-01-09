<template>
      <div
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
</template>

<script setup>
const { meal } = defineProps({
  meal: {
    required: true,
    type: Object
  }
})
</script>