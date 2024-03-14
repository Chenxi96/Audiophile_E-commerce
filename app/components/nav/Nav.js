import Link from "next/link"
import styles from './Nav.module.scss'

export default function Nav({text}) {
    return(
        <ul className={styles[text]}>
                <li className={styles.list__item}>
                    <Link href='/home'>HOME</Link>
                </li>
                <li className={styles.list__item}>
                    <Link href='/headphone'>HEADPHONE</Link>
                </li>
                <li className={styles.list__item}>
                    <Link href='/speakers'>SPEAKERS</Link>
                </li>
                <li className={styles.list__item}>
                    <Link href='/earphones'>EARPHONES</Link>
                </li>
        </ul>
    )
}