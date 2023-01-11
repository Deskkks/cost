import { useState,useEffect } from "react"
import api from "../../../config/api"

import Button from "../../../components/Button"

function Servicos ({idProjeto}) {

  const [servico, setservico] = useState([{}])

  useEffect(() => {
    api.get(`servicos?foreing_key=${idProjeto}`).then(res => {
      setservico(res.data)
    })
  },[servico])

  function setOrcamentoUtil(servico) {
    api.get(`projects/${idProjeto}`)
    .then(res => {
      var orcamento = res.data.utilizado
      var utilizado = orcamento - Number(servico.custo)
      console.log(utilizado);
      
      api.patch(`projects/${idProjeto}`,{
        utilizado: utilizado
      })
    })
    api.delete(`servicos/${servico.id}`)
  }

  return (
    <div>
      <h1>serviços:</h1>
      <div className='flex'>
        {
          servico.length > 0 ? (
            servico.map((servico, index) => (
              <div key={index} className='projeto'>
                <h2>{servico.nome}</h2>
                <p>custo: R${servico.custo}</p>
                <p>{servico.descricao}</p>
                <span onClick={() => setOrcamentoUtil(servico)}
                ><Button text = 'Excluir'/></span>
              </div>
            ))
          ) : (
            <p>Não tem serviços</p>
          )
        }
      </div>
    </div>
  )
}

export default Servicos