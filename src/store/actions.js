import axiosClient from '../axiosClient';

export async function searchMeals({commit}, keyword) {
  await axiosClient.get(`/search.php?s=${keyword}`)
    .then(({data}) => {
      commit('setSearchMeals', data.meals);
      console.log(data)
    })
}