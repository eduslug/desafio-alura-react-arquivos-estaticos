import React from 'react'
import home from '../../assets/icones/home-ativo.png'
import maisCurtidas from '../../assets/icones/mais-curtidas-inativo.png'
import maisVistas from '../../assets/icones/mais-vistas-inativo.png'
import novas from '../../assets/icones/novas-inativo.png'
import surpreendame from '../../assets/icones/surpreenda-me-inativo.png'
import styles from './Menu.module.scss'

const Menu = () => {
    return (
        <nav className={styles.menu} >
            <ul className={styles.menu__lista}>
                <li className={styles.menu__item}>
                    <img src={home} alt='' />
                    <a href='/'>inicio</a>
                </li>
                <li className={styles.menu__item}>
                    <img src={maisCurtidas} alt='' />
                    <a href='/'>mais curtidas</a>
                </li>
                <li className={styles.menu__item}>
                    <img src={maisVistas} alt='' />
                    <a href='/'>mais vistas</a>
                </li>
                <li className={styles.menu__item}>
                    <img src={novas} alt='' />
                    <a href='/'>novas</a>
                </li>
                <li className={styles.menu__item}>
                    <img src={surpreendame} alt='' />
                    <a href='/'>me surpreenda</a>
                </li>
            </ul>
        </nav>
    )
}

export default Menu