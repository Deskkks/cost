import Button from "../Button"

function AdicionarServico() {
  return (
    <form>
      <div>
        <label htmlFor="nome">
            <span>Nome do serviço:</span>
            <input type='text' id='nome' name='nome' autoComplete='off' className='input'></input>
          </label>
      </div>
      <div>
        <label htmlFor="custo">
          <span>Custo do serviço:</span>
          <input type='number' id='custo' name='custo' className='input'></input>
        </label>
      </div>
      <div>
        <label htmlFor="descricao">
          <span>Descrição do serviço:</span>
          <input type='text' id="descricao" name="descricao" className='input'></input>
        </label>
      </div>
      <a type="submit"><Button text='Adicionar serviço'/></a>
    </form>
  )
}

export default AdicionarServico