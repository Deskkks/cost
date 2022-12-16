import Button from '../../components/Button'

function NovoProjeto () {
  return (
    <div className='App'>
      <h1>Novo projeto</h1>
      <p>Crie seu projeto para depois adicionar os serviços</p>
      <form>
        <div>
          <label htmlFor="nome">
            <span>Nome do projeto:</span>
            <input type='text' id='nome' name='nome' autoComplete='off'></input>
          </label>
        </div>
        <div>
          <label htmlFor="nome">
            <span>Orçamento do projeto:</span>
            <input type='number' id='orcamento' name='orcamento'></input>
          </label>
        </div>
        <div>
          <label htmlFor="nome">
            <span>Selecione a categoria:</span>
            <select name="select">
              <option disabled={true}></option>
              <option value="planejamento">Planejamento</option>
              <option value="desing">Desing</option>
              <option value="desenvolvimento">Desenvolvimento</option>
            </select>
          </label>
        </div>
        <div>
          <Button text = 'Criar projeto'/>
        </div>
      </form>
    </div>
  )
}

export default NovoProjeto