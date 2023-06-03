export default {
    async getDetail({ commit }, payload) {
        commit('initdetail', payload);
        console.log('detailentree:', payload);
      },
    };