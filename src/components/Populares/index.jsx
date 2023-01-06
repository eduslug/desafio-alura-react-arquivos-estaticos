import React from 'react';
import fotosPopulares from './fotos-populares.json';
import styles from './Populares.module.scss';

const Populares = () => {
    return (
        <aside className={styles.Populares}>
            <h2>Fotos Populares</h2>
            <ul className={styles.populares__imagens}>
                {fotosPopulares.map(foto => {
                    return (
                        <li key={foto.id}>
                            <img src={foto.path} alt={foto.alt} />
                        </li>
                    );
                })}
            </ul>
            <button>Filtrar</button>
        </aside>
    )
}
export default Populares;