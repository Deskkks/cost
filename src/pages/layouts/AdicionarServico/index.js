import {useState, useEffect} from 'react'

import api from "../../../config/api"
import Button from "../../../components/Button"

function AdicionarServico({foreing_key}) {

  const [data, setData] = useState([{}])

  useEffect(() => {
    api.get(`servicos`).then(res => {
      setData(res.data)
    })
  },[])
  
  if(data.id) {
    var novoID = String(Number(data.at(-1).id)+1)
  }

  function handleSubmit(e) {
    e.preventDefault()
    setOrcamentoUtil()
    api.post('servicos',{
      id: novoID,
      foreing_key: foreing_key,
      nome: nome,
      custo: custo,
      descricao: descricao,
    })
    window.location.reload()
  }

  function setOrcamentoUtil() {
    api.get(`projects/${foreing_key}`)
    .then(res => {
      var orcamento = res.data.utilizado
      var utilizado = orcamento + Number(custo)
      
      api.patch(`projects/${foreing_key}`,{
        utilizado: utilizado
      })
      .then(() => console.log('ferw'))
      .catch(err => console.log(err.response.data))
    })
    .catch(err => console.log(err.response.data))
  }

  const [nome, setNome]= useState()
  const [custo, setCusto]= useState()
  const [descricao, setDescricao]= useState()
  const [utilizado, setUtilizado]= useState()

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="nome">
            <span>Nome do serviço:</span>
            <input 
            type='text' 
            id='nome' 
            name='nome' 
            autoComplete='off' 
            className='input'
            onChange={(e) => setNome(e.target.value)}
            ></input>
          </label>
      </div>
      <div>
        <label htmlFor="custo">
          <span>Custo do serviço:</span>
          <input 
          type='number' 
          id='custo' 
          name='custo' 
          className='input'
          onChange={(e) => setCusto(e.target.value)}
          ></input>
        </label>
      </div>
      <div>
        <label htmlFor="descricao">
          <span>Descrição do serviço:</span>
          <input 
          type='text' 
          id="descricao" 
          name="descricao" 
          className='input'
          onChange={(e) => setDescricao(e.target.value)}
          ></input>
        </label>
      </div>
      <span type="submit"><Button text='Adicionar serviço'/></span>
    </form>
  )
}

export default AdicionarServico