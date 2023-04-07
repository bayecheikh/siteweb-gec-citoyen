import state from "./state";

export default {
    async getDetail({commit},payload){
        await commit('initdetail', payload)
    },
    async getDetailIsLoggedIn({commit},payload){
        await commit('initdetailisloggedin', payload)
    }
}