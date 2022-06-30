import { createStore } from 'vuex';

export default createStore({
  state: {
    images: [],
    query: [],
  },
  mutations: {
    setImages(state, payload) {
      state.images = payload;
    },

    setQueryImages(state, payload) {
      state.query = payload;
    },
  },
  actions: {
    async getImages({ commit }) {
      try {
        const ans = await fetch('https://api.unsplash.com/photos/random?count=30', {
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
    async getQueryImages({ commit }, q) {
      try {
        const ans = await fetch(`https://api.unsplash.com/search/photos?per_page=30&query=${q}&client_id=bC8QHaIPliNsXg0dVauxEEQ_zjj6j_CF5jBdm5KESlY`);
        const queryImages = await ans.json();
        commit('setQueryImages', queryImages.results);
      } catch (err) {
        console.log(err);
      }
    },
  },
});
