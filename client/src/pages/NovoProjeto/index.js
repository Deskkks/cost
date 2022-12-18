import Button from '../../components/Button'
import styles from './index.module.css'

function NovoProjeto () {
  return (
    <div className={styles.App}>
      <h1>Novo projeto</h1>
      <p>Crie seu projeto para depois adicionar os serviços</p>
      <form>
      
          <label htmlFor="nome">
            <span>Nome do projeto:</span>
            <input type='text' id='nome' name='nome' autoComplete='off' className={styles.input}></input>
          </label>
        
      
          <label htmlFor="orcamento">
            <span>Orçamento do projeto:</span>
            <input type='number' id='orcamento' name='orcamento' className={styles.input}></input>
          </label>
        
      
          <label htmlFor="nome">
            <span>Selecione a categoria:</span>
            <select name="select" className={styles.select}>
              <option disabled={true}></option>
              <option value="planejamento">Planejamento</option>
              <option value="desing">Desing</option>
              <option value="desenvolvimento">Desenvolvimento</option>
            </select>
          </label>
        
        <div>
          <Button text = 'Criar projeto'/>
        </div>
      </form>
    </div>
  )
}

export default NovoProjeto