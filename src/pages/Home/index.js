import styles from './index.module.css';
import Button from '../../components/Button'
import pig from './pig.png'

function Home() {

  return (
    <div className={styles.app}>
      <h1>
        Bem-vindo ao <span className={styles.marca}>Costs</span>
      </h1>
      <p>
        Comece a gerenciar os seus projetos agora mesmo!
      </p>
      <a href='/novoProjeto'>
        <Button text='Criar projeto' />
      </a>
      <br/>
      <img src={pig} alt='Cofre de porco' className={styles.img} />
    </div>
  );
}

export default Home;
