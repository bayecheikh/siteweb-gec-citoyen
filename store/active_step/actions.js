export default {
    async getDetail({commit},payload){
        await commit('initdetail', payload)
    }
}