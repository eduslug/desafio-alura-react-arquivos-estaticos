import React from 'react'
import styles from './Cabecalho.module.scss'
import search from './search.png'
import logo from './logo.png'

const Cabeçalho = () => {
  return (
    <div>
      <header className={styles.cabecalho}>
        <img src={logo} alt='Logo Principal' />
        <div className={styles.cabecalho__container}>
          <input className={styles.cabecalho__input} type={'text'}
            placeholder='Digite sua pesquisa' />
          <img src={search} alt='icone lupa' />
        </div>
      </header>
    </div>
  )
}

export default Cabeçalho