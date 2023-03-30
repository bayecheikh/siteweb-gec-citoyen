import state from "./state";

export default {
    async getIsPageLoad({commit},payload){
        await commit('initispageload', payload)
    }
}