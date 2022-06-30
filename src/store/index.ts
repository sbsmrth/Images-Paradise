import { createStore } from 'vuex';

export default createStore({
  state: {
    images: [],
  },
  mutations: {
    setImages(state, payload) {
      state.images = payload;
    },
  },
  actions: {
    async getRandom({ commit }) {
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
        const ans = await fetch(`https://api.unsplash.com/search/photos?per_page=30&query=${q}`, {
          headers: {
            Authorization: 'Client-ID bC8QHaIPliNsXg0dVauxEEQ_zjj6j_CF5jBdm5KESlY',
          },
        });
        const queryImages = await ans.json();
        commit('setImages', queryImages.results);
      } catch (err) {
        console.log(err);
      }
    },
    async getImages({ commit }, order) {
      try {
        const ans = await fetch(`https://api.unsplash.com/photos?per_page=30&order_by=${order}`, {
          headers: {
            Authorization: 'Client-ID bC8QHaIPliNsXg0dVauxEEQ_zjj6j_CF5jBdm5KESlY',
          },
        });
        const imgs = await ans.json();
        commit('setImages', imgs);
      } catch (err) {
        console.log(err);
      }
    },
  },
});
