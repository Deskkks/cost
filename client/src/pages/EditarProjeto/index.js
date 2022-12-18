import { useEffect, useState } from 'react';
import Button from '../../components/Button'
import AdicionarServico from '../../components/AdicionarServico'
import api from '../../config/api'

function EditarProjeto() {

  const [data, setData] = useState([{}])
  const [serv, setServ] = useState(false)

  useEffect(() => {
    api.get('api').then(res => {
      setData(res.data)
    })
  })

  var projeto = data[0]
  var urlExcluir = '/excluirServ'

  return (
    <div className='App'>
      <div>
        <div className='flexSpaceB'>
          <h1>Projeto: {projeto.titulo}</h1>
          <a href=''><Button text='Editar projeto'/></a>
        </div>
        <p>Categoria: {projeto.categoria}</p>
        <p>Total de orçamento: R${projeto.orcamento}</p>
        <p>Total utilizado: R${projeto.orcamentoUtil}</p>
      </div>
      <hr/>
      <div>
        {
          serv === true ? (
            <div>
              <div className='flexSpaceB'>
                <h1>Adicione um serviço</h1>
                <a onClick={() => setServ(false)}><Button text='Fechar'/></a>
              </div>
              <AdicionarServico/>
            </div>
          ) : (
            <div className='flexSpaceB'>
              <h1>Adicione um serviço</h1>
                <a onClick={() => setServ(true)}><Button text='Adicionar serviço'/></a>
            </div>
          )
        }
      </div>
      <hr/>
      <div>
        <h1>serviços:</h1>
        <div className='flex'>
          {
            projeto.servico.length > 0 ? (
              projeto.servico.map((servico, index) => (
                <div key={index} className='projeto'>
                  <h2>{servico.nome}</h2>
                  <p>custo: R${servico.custo}</p>
                  <p>{servico.descricao}</p>
                  <a href={urlExcluir}><Button text = 'Excluir'/></a>
                </div>
              ))
            ) : (
              <p>Não tem serviços</p>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default EditarProjeto