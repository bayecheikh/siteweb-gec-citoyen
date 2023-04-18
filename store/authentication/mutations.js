export default {
    initdetail(state, newisauthenticating) {
        state.isauthenticating = newisauthenticating
    },
    initdetailisauthenticatingfrombutton(state, newisauthenticatingfrombutton){
        state.isauthenticatingfrombutton = newisauthenticatingfrombutton
    },

    initdetailisloggedin(state, newisloggedin) {
        state.isloggedin = newisloggedin
    }

}