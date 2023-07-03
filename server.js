const express = require('express')
const app = express()

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
 // console.log(`Server listening on port ${PORT}`)
})

const bodyParser = require('body-parser')
const axios = require('axios')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.post('/submit-form', async (req, res) => {
    const { token } = req.body
  
    try {
      const response = await axios.post('https://www.google.com/recaptcha/api/siteverify', null, {
        params: {
          secret: '6Lf2CtYlAAAAAFP8k4LAFbAI4E_IQ8yagmvTyxZB',
          response: token
        }
      })
  
      if (response.data.success) {
        res.send('success')
      } else {
        res.send('fail')
      }
    } catch (error) {
     // console.log(error)
      res.send('error')
    }
  })
  