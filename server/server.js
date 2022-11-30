const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())

app.get('/api', (req, res) => {
res.json({"users" : ['1', '2', '3',]})
})

app.listen('5000', () => {
  console.log('servidor roando na porta 5000');
})