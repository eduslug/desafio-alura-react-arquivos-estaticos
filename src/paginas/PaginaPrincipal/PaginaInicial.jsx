import React from 'react'
import Populares from 'components/Populares';
import banner from './banner.png'
import styles from "./PaginaInicial.module.scss";
import Cabecalho from 'components/Cabacalho';
import Galeria from 'components/Galaria';
import Menu from 'components/Menu';
import RodaPe from 'components/RodaPe';

const index = () => {
  return (
    <>
      <Cabecalho />
      <main>
        <section className={styles.principal}>
          <Menu />
          <div className={styles.principal__imagem}>
            <h1>A galeria mais completa do espaço</h1>
            <img src={banner} alt="A imagem da terra vista do espaço" />
          </div>
        </section>
        <div>
          <Galeria />
          <Populares/>
        </div>
      </main>
      <RodaPe />
    </>
  )
}

export default index