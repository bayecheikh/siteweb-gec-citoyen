export default function ({store ,redirect}, inject) { 

    const getToken = () => {
        return localStorage.getItem('gecToken')
    }
    
    const getUser = () => {
        return JSON.parse(localStorage.getItem('gecLoggedInUser'));
    }
    
    const isLogged = () => {
        return JSON.parse(localStorage.getItem('gecIsAuthenticated'))
    }
    const loggout = async () => {
        await localStorage.removeItem('gecIdUser')
        await localStorage.removeItem('gecToken')
        await localStorage.removeItem('gecLoggedInUser')
        await localStorage.removeItem('gecIsAuthenticated') 
    }


    inject('getUser', getUser)
    inject('getToken',getToken)
    inject('isLogged',isLogged)
    inject('loggout',loggout)
   
}