import { useEffect, useState } from 'react';
import Button from '../../components/Button'
import api from '../../config/api'
import Servicos from '../layouts/servicos';
import AdicionarServico from '../layouts/AdicionarServico'

function EditarProjeto() {

  const [projeto, setprojeto] = useState([{}])
  const [serv, setServ] = useState(false)

  var idProjeto = 0

  useEffect(() => {
    api.get(`projects/${idProjeto}`).then(res => setprojeto(res.data))
  },[])

  return (
    <div className='App'>
      <div>
        <div className='flexSpaceB'>
          <h1>Projeto: {projeto.titulo}</h1>
          <span><Button text='Editar projeto'/></span>
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
              <AdicionarServico foreing_key={idProjeto}/>
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
      <Servicos idProjeto={idProjeto}/>
    </div>
  )
}

export default EditarProjeto