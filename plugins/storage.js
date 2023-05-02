export default function ({store ,redirect}, inject) { 

    const getToken = () => {
        return localStorage.getItem('gecToken')
    }
    
    const getUser = () => {
        return JSON.parse(localStorage.getItem('loggedInUser'));
    }
    
    const isLogged = () => {
        return JSON.parse(localStorage.getItem('isAuthenticated'))
    }
    const loggout = async () => {
        await localStorage.removeItem('gecToken')
        await localStorage.removeItem('loggedInUser')
        await localStorage.removeItem('isAuthenticated') 
    }


    inject('getUser', getUser)
    inject('getToken',getToken)
    inject('isLogged',isLogged)
    inject('loggout',loggout)
   
}