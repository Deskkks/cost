import styles from './Home.module.css';
import Button from '../components/Button/index'

function Home() {

  return (
    <div className="App">
      <h1>
        Bem-vindo ao <span className={styles.marca}>Costs</span>
      </h1>
      <p>
        Comece a gerenciar os seus projetos agora mesmo!
      </p>
      <a href="/NovoProjeto"><Button text='Criar projeto' /></a> <br/>
      <img src='../pig.png' alt='Cofre de porco' className={styles.img} />
    </div>
  );
}

export default Home;
