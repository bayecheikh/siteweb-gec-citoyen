export default {
    isauthenticating (state) {
      return state.isauthenticating
    },
    isauthenticatingfrombutton (state) {
      return state.isauthenticatingfrombutton
    },
    isloggedin (state) {
      return state.isloggedin
    },
    isAuthenticated: state => {
      return state.token !== null && state.token !== undefined;
    }
}