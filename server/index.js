const express = require('express')

const BookCtrl = require('./controllers/books')

const app = express()
const port = 4003

app.use(express.json())

app.get('/api/books', BookCtrl.read)
app.post('/api/books', BookCtrl.create)
app.put('/api/books/:id', BookCtrl.update)
app.delete('/api/books/:id', BookCtrl.delete)

app.listen(port, () => {
    console.log('listening on port', port)
  })