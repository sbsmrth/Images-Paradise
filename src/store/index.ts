import { createStore } from 'vuex';

export default createStore({
  state: {
    products: [],
  },
  getters: {
  },
  mutations: {
    setImages(state, payload) {
      state.products = payload;
    },
  },
  actions: {
    async getImages({ commit }) {
      try {
        const ans = await fetch('https://api.unsplash.com/photos/?client_id=bC8QHaIPliNsXg0dVauxEEQ_zjj6j_CF5jBdm5KESlY');
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
