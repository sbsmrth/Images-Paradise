import { createStore } from 'vuex';

export default createStore({
  state: {
    images: [],
  },
  getters: {
  },
  mutations: {
    setImages(state, payload) {
      state.images = payload;
    },
  },
  actions: {
    async getImages({ commit }) {
      try {
        const ans = await fetch('https://api.unsplash.com/photos?per_page=30&order_by=popular', {
          headers: {
            Authorization: 'Client-ID bC8QHaIPliNsXg0dVauxEEQ_zjj6j_CF5jBdm5KESlY',
          },
        });
        const images = await ans.json();

        commit('setImages', images);
      } catch (err) {
        console.log(err);
      }
    },
  },
  modules: {
  },
});
