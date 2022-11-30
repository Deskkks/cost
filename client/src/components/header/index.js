import Button from '../Button/index'
import styles from './Header.module.css'
import {Link} from 'react-router-dom'

function Header () {
  return (
  <header>
    <div className={styles.header}>
        <div>
          <img src="./moeda.png" alt="Logo" className={styles.img} />
        </div>
        <div>
          <a href='/'>
            <Button text = 'Home'/>
          </a>
          <a href='/projetos'>
            <Button text='Projetos' />
          </a>
          <a href='/empresa'>
            <Button text = 'Empresa'/>
          </a>
          <a href='/contato' >
            <Button text = 'Contato' />
          </a>
        </div>
    </div>
  </header>  
  )
}

export default Header