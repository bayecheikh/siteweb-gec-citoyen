import state from "./state";

export default {
    async getDetail({commit},payload){
        await commit('initdetail', payload)
    },
    async getDetailIsAuthenticatingFromButton({commit},payload){
        await commit('initdetailisauthenticatingfrombutton', payload)
    },
    async getDetailIsLoggedIn({commit},payload){
        await commit('initdetailisloggedin', payload)
    }
}