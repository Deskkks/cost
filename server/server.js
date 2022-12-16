const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())

app.get('/api', (req, res) => {
res.json([
  {
    'id' : '1',
    'titulo' : 'projeto 1',
    'preco' : '30000',
    'categoria' : 'Desenvolvimento'
  },
  {
    'id' : '2',
    'titulo' : 'projeto 2',
    'preco' : '250000',
    'categoria' : 'Desing'
  }
])
})

app.listen('5000', () => {
  console.log('servidor roando na porta 5000');
})