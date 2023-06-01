
export default [
    async function getDetail({ commit }, payload) {
      await commit('initdetail', payload);
      console.log('detailampliation:', payload);
    }
  ];