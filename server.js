const express = require('express')
const app = express()
const port = 8080

app.use(express.static('build'))

app.post('/service/placeHold', (request, response) => {
  response.send('We successfully had placed hold on this book for you.')
})

app.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }
  console.log(`server is listening on ${port}`)
})