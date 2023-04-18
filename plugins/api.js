export default function ({ $axios, store ,redirect}, inject) {
    
    const gecApi = $axios.create({
            baseURL: process.env.baseUrl,
            headers : {
                common: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                }
            }
        }        
    )


    gecApi.onError((error) => {
        console.log('**************************-----------------error: ',error.response)
        
    })

    inject('gecApi', gecApi)
    
}