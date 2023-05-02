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
    },
    async getDetailIsAuthenticated({commit},payload){
        await commit('initdetailisauthenticated', payload)
    },
    checkAuthentication: ({ getters }) => {
        return new Promise((resolve, reject) => {
          if (getters.isAuthenticated) {
            resolve(true);
          } else {
            reject(false);
          }
        });
      }
   
}