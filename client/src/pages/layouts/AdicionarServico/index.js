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

  var novoID = String(Number(data.at(-1).id)+1)

  function handleSubmit(e) {
    e.preventDefault()
    api.post('servicos',{
      id: novoID,
      foreing_key: foreing_key,
      nome: nome,
      custo: custo,
      descricao: descricao,
    })
    window.location.reload()
  }



  const [nome, setNome]= useState()
  const [custo, setCusto]= useState()
  const [descricao, setDescricao]= useState()

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