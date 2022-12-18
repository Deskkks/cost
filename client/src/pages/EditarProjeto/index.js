import { useEffect, useState } from 'react';
import Button from '../../components/Button'
import api from '../../config/api'

function EditarProjeto() {

  const [data, setData] = useState([{}])

  useEffect(() => {
    api.get('api').then(res => {
      setData(res.data)
    })
  })

  function AdicionarServico() {
    return (
      <form>
        <label htmlFor="nome">
            <span>Nome do serviço:</span>
            <input type='text' id='nome' name='nome' autoComplete='off'></input>
          </label>    
          <label htmlFor="custo">
            <span>Custo do serviço:</span>
            <input type='number' id='custo' name='custo'></input>
          </label>
          <label htmlFor="descricao">
            <span>Descrição do serviço:</span>
            <input type='text' id="descricao" name="descricao"></input>
          </label>
      </form>
    )
  }

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
      <div className='flexSpaceB'>
        <h1>Adicione um serviço</h1>
        <Button text='Adicionar serviço' onclick={AdicionarServico()}/>
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