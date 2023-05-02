export default function ({store ,redirect}, inject) { 
 
    const getToken = () => {
        if (process.client) {
        return localStorage.getItem('gecToken')
        }
    }
    
    const getUser = () => {
        if (process.client) {
            return JSON.parse(localStorage.getItem('loggedInUser'));
        }
     
    }
    
    const isLogged = () => {
        if (process.client) {
            return JSON.parse(localStorage.getItem('isAuthenticated'))
        }
    }

   
    const loggout = async () => {
        if (process.client) {
            await localStorage.removeItem('gecToken')
            await localStorage.removeItem('loggedInUser')
            await localStorage.removeItem('layout')
            await localStorage.removeItem('isAuthenticated')
        } 
    }


    inject('getUser', getUser)
    inject('getToken',getToken)
    inject('isLogged',isLogged)
    inject('loggout',loggout)
   
}