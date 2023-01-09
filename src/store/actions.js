import axiosClient from '../axiosClient';

export async function searchMeals({commit}, keyword) {
  await axiosClient.get(`/search.php?s=${keyword}`)
    .then(({data}) => {
      commit('setSearchMeals', data.meals);
      console.log(data)
    })
}

export async function searchMealsByLetter({commit}, letter) {
  await axiosClient.get(`/search.php?f=${letter}`)
    .then(({data}) => {
      commit('setMealsByLetter', data.meals);
      console.log(data)
    })
}

export async function searchMealsByIngredient({commit}, ing) {
  await axiosClient.get(`filter.php?i=${ing}`)
    .then(({data}) => {
      commit('setMealsByIngredients', data.meals);
      console.log(data)
    })
}