import Button from '../../components/Button'
import styles from './index.module.css'
import { useEffect, useState } from 'react';
import api from '../../config/api'

function NovoProjeto () {

  const [data, setData] = useState([{}])

  useEffect(() => {
    api.get('projects').then(res => setData(res.data))
  },[])
  var novoID = String(Number(data.at(-1).id)+1)

  function handleSubmit(e) {
    e.preventDefault()
    api.post('projects',{
      id: novoID,
      titulo: titulo,
      orcamento: orcamento,
      orcamentoUtil: '0',
      categoria: categoria
    })
    window.location.href = 'http://localhost:3000/projetos'
  }

  const [titulo, setTitulo]= useState('')
  const [orcamento, setOrcamento]= useState()
  const [categoria, setCategoria]= useState()

  return (
    <div className={styles.form}>
      <h1>Novo projeto</h1>
      <p>Crie seu projeto para depois adicionar os serviços</p>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="titulo">
            <span>Nome do projeto:</span>
            <input 
            type='text' 
            id='titulo' 
            name='titulo' 
            autoComplete='off' 
            className='input'
            onChange={(e) => setTitulo(e.target.value)}
            ></input>
          </label>
        </div>
        <div>
          <label htmlFor="orcamento">
            <span>Orçamento do projeto:</span>
            <input 
            type='number' 
            id='orcamento' 
            name='orcamento' 
            className='input'
            onChange={(e) => setOrcamento(e.target.value)}
            ></input>
          </label>
        </div>
        <div>
          <label htmlFor="categoria">
            <span>Selecione a categoria:</span>
            <select 
            name="categoria" 
            id='categoria' 
            className={styles.select}
            onChange={(e) => setCategoria(e.target.value)}
            >
              <option selected disabled='on'></option>
              <option value="planejamento">Planejamento</option>
              <option value="desing">Desing</option>
              <option value="desenvolvimento">Desenvolvimento</option>
            </select>
          </label>
        </div>
        <div>
          <span type="submit"><Button text = 'Criar projeto'/></span>
        </div>
      </form>
    </div>
  )
}

export default NovoProjeto