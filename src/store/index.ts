import { createStore } from 'vuex';

import { apiKey, apiBase, apiSearch } from '@/api/api';

export default createStore({
  state: {
    images: [],
    custom: [],
  },
  mutations: {
    setImages(state, payload) {
      state.images = payload;
    },

    setCustom(state, payload) {
      state.custom = payload;
    },
  },
  actions: {
    async getRandom({ commit }) {
      try {
        const ans = await fetch(`${apiBase}/random?count=30`, {
          headers: {
            Authorization: `Client-ID ${apiKey}`,
          },
        });
        const images = await ans.json();
        commit('setImages', images);
      } catch (err) {
        console.error(err);
      }
    },
    async getQueryImages({ commit }, params) {
      try {
        const ans = await fetch(`${apiSearch}?per_page=30&query=${params.q}&page=${params.page}`, {
          headers: {
            Authorization: `Client-ID ${apiKey}`,
          },
        });
        const queryImages = await ans.json();
        commit('setCustom', queryImages.results);
      } catch (err) {
        console.error(err);
      }
    },
    async getImages({ commit }, params) {
      try {
        const ans = await fetch(`${apiBase}?per_page=30&order_by=${params.order}&page=${params.page}`, {
          headers: {
            Authorization: `Client-ID ${apiKey}`,
          },
        });
        const imgs = await ans.json();
        commit('setImages', imgs);
      } catch (err) {
        console.error(err);
      }
    },
  },
});
