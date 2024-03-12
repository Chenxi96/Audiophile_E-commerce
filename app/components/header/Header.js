import Image from "next/image";
import cart from '../../../public/assets/Combined_Shape.png'
import hamburger from '../../../public/assets/hamburger.svg'
import logo from '../../../public/assets/audiophile.png'
import styles from './Header.module.scss'


export default function Header() {
    return(
        <header className={styles.header}>
            <nav className={`${styles.header__nav} ${styles['header__nav--tablet']}`}>
                <Image className={styles.nav__hamburger} src={hamburger} />
                <Image className={styles.nav__logo} src={logo} height={25} width={143} />
                <ul className={styles.nav__list}>
                    <li>HOME</li>
                    <li>HEADPHONE</li>
                    <li>SPEAKERS</li>
                    <li>EARPHONES</li>
                </ul>
                <Image src={cart}/>
            </nav>
        </header>
    )
}