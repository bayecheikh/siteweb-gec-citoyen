export default function ({store ,redirect}, inject) { 
 
    const getToken = () => {
        if (process.client) {
        return localStorage.getItem('gecToken')
        }
    }
    
    const getUser = () => {
        if (process.client) {
            return JSON.parse(localStorage.getItem('gecLoggedInUser'));
        }
     
    }
    
    const isLogged = () => {
        if (process.client) {
            return JSON.parse(localStorage.getItem('gecIsAuthenticated'))
        }
    }

   
    const loggout = async () => {
        if (process.client) {
            await localStorage.removeItem('gecToken')
            await localStorage.removeItem('gecLoggedInUser')
            await localStorage.removeItem('layout')
            await localStorage.removeItem('gecIsAuthenticated')
        } 
    }


    inject('getUser', getUser)
    inject('getToken',getToken)
    inject('isLogged',isLogged)
    inject('loggout',loggout)
   
}