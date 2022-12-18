import Button from '../../components/Button'
import styles from './index.module.css'

function NovoProjeto () {
  return (
    <div className={styles.form}>
      <h1>Novo projeto</h1>
      <p>Crie seu projeto para depois adicionar os serviços</p>
      <form>
          <div>
            <label htmlFor="nome">
              <span>Nome do projeto:</span>
              <input type='text' id='nome' name='nome' autoComplete='off' className='input'></input>
            </label>
          </div>
          <div>
            <label htmlFor="orcamento">
              <span>Orçamento do projeto:</span>
              <input type='number' id='orcamento' name='orcamento' className='input'></input>
            </label>
          </div>
          <div>
            <label htmlFor="nome">
              <span>Selecione a categoria:</span>
              <select name="select" className={styles.select}>
                <option disabled={true}></option>
                <option value="planejamento">Planejamento</option>
                <option value="desing">Desing</option>
                <option value="desenvolvimento">Desenvolvimento</option>
              </select>
            </label>
          </div>
        <div>
          <a type='submit'><Button text = 'Criar projeto'/></a>
        </div>
      </form>
    </div>
  )
}

export default NovoProjeto