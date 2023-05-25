<template>
    <div id="main-wrapper" class="main-wrapper">
        <HeaderOne />

        <Form />

        <FooterKitchen />
    </div>
</template>

<script>

// import console from 'console';
import { mapGetters } from 'vuex'
export default {
    // middleware({ redirect, $getToken, $getUser, $isLogged, $loggout }) {
    //     if (process.server) {
    //         console.log('on server');
    //         return
    //     }
    //     if (process.client) {
    //         console.log("im on client midddlllllll");
    //         // return localStorage.getItem('gecToken')
    //         // console.log('token: ++++++++++ ', $getToken())
    //         console.log("AAAAAAA", localStorage.getItem('gecToken'))
    //         if (this.$getToken()==null || this.$getUser()==null || this.$isLogged()==null || this.$isLogged()==false )    {
    //             this.$loggout()
    
    
    //             return redirect('/')
    //         }
    //     }
    // },
    components: {
        HeaderOne: () => import("@/components/header/HeaderOne"),
        Form: () => import("@/components/courriers/Form"),
        FooterKitchen: () => import("@/components/footer/FooterKitchen")
    },
    
    mounted: function() {
        this.getToken()
 
        // if (process.server) {
        //     console.log('on server');
        //     return
        // }
        // if (process.server) {
        //     console.log('on server');
        //     return
        // }
        // if (process.client) {
            //console.log("im on client 44444444444");
            // return localStorage.getItem('gecToken')
            console.log('token: ++++++++++ ', this.$getToken())
             this.getToken()
            if (this.$getToken()==null || this.$getUser()==null || this.$isLogged()==null || this.$isLogged()==false )    {
                console.log("Non connecté");
                this.$loggout()
    
    
                return this.$router.push('/')
            }
           
        // }
        },
    head() {
        return {
            title: 'Envoyer un courrier'
        }
    },
    methods:{
        getToken(){
            console.log("aaaa", localStorage.getItem('gecToken'))
         
        }
    }
}
</script>