import styles from './index.module.css'
import api from '../../config/api'
import Button from '../../components/Button'
import { useEffect, useState } from 'react';

function Projetos () {

  const [data, setData] = useState([{}])

  useEffect(() => {
    api.get('projects').then(res => {
      setData(res.data)
    })
  })

  return (
    <div className="App">
      <div className='flexSpaceB'>
        <h1>Meus projetos</h1>
        <a href='/novoProjeto'><Button text= 'Criar projeto'/></a>
      </div>
      <div className='flex'>
          {
            data.length > 0 ? (
            data.map((projeto, index) => (
              <div key={index} className='projeto'>
                <h2>{projeto.titulo}</h2>
                <p>Orçamento: R${projeto.orcamento}</p>
                <p><span className={styles.circulo}></span>{projeto.categoria}</p>
                <div className={styles.botoes}>
                  <a href={'/editar/' + projeto.id}><Button text = 'Editar'/></a>
                  <span onClick={() => {api.delete('projects/' + index)}}><Button text = 'Excluir'/></span>
                </div>
              </div>
            ))
            ) : (
              <p>Não temos projetos</p>
            )
          }
      </div>
    </div>
  )
}

export default Projetos