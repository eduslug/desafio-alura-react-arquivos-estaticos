import React, { useState } from 'react';
import Tags from '../Tags';
import fotos from './fotos.json';
import styles from './Galeria.module.scss';
import Card from '../Card';

const Galeria = () => {

  const [itens, setItens] = useState(fotos);
  const tags = [new Set(fotos.map(valor => valor.tags))]

  const filtarItens = () => {
      
  }

  return (
    <section>
      <h2>Navegue Pela galeria</h2>
      <Tags tags={tags} />
      <Card itens={itens} styles={styles} />
    </section>
  )
}

export default Galeria