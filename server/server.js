const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())

app.get('/api', (req, res) => {
res.json([
  {
    'id' : '1',
    'titulo' : 'projeto 1',
    'orcamento' : '30000',
    'orcamentoUtil' : '0',
    'categoria' : 'Desenvolvimento',
    'servico' : [
      {
        'nome' : 'logo',
        'custo' : '30',
        'descricao' : 'foda'
      },
      {
        'nome' : 'site',
        'custo' : '5',
        'descricao' : 'pprooa'
      }
    ]
  },
  {
    'id' : '2',
    'titulo' : 'projeto 2',
    'orcamento' : '250000',
    'orcamentoUtil' : '0',
    'categoria' : 'Desing',
    'servico' : [
      {
        'nome' : 'logo',
        'custo' : '30',
        'descricao' : 'foda'
      },
      {
        'nome' : 'site',
        'custo' : '5',
        'descricao' : 'pprooa'
      }
    ]
  }
])
})

app.listen('5000', () => {
  console.log('servidor roando na porta 5000');
})