import styles from './index.module.css'
import { useEffect, useState } from 'react';
import api from '../../config/api'
import Button from '../../components/Button'

function Projetos () {

  const [data, setData] = useState([{}])

  useEffect(() => {
    api.get('api').then(res => {
      setData(res.data)
    })
  })

  const urlEditar = '/editar'
  const urlExcluir = '/excluir'

  return (
    <div className="App">
      <div className={styles.div}>
        <h1>Meus projetos</h1>
        <a href='/novoProjeto'><Button text= 'Criar projeto'/></a>
      </div>
      <div className={styles.projetos}>
          {
            data.length > 0 ? (
            data.map((projeto, index) => (
              <div key={index} className={styles.projeto}>
                <h2>{projeto.titulo}</h2>
                <p>Orçamento: R${projeto.preco}</p>
                <p><span className={styles.circulo}></span>{projeto.categoria}</p>
                <div className={styles.botoes}>
                  <a href={urlEditar}><Button text = 'Editar'/></a>
                  <a href={urlExcluir}><Button text = 'Excluir'/></a>
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