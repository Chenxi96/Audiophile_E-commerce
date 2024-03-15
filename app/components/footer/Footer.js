import Image from "next/image"
import Nav from '../nav/Nav'
import Link from "next/link"
import facebook from '../../../public/assets/shared/desktop/icon-facebook.svg'
import twitter from '../../../public/assets/shared/desktop/icon-twitter.svg'
import instagram from '../../../public/assets/shared/desktop/icon-instagram.svg'
import logo from '../../../public/assets/shared/desktop/logo.svg'
import styles from './Footer.module.scss'

export default function Footer() {
    return(
        <footer className={styles.footer}>
            <div className={`${styles.footer__logo} ${styles['footer__logo--center']}`}>
                <Image className={styles.logo__image} src={logo} width={143} height={25}/>
            </div>
            <Nav text={'footerNav__list'} />
            <p className={`${styles.footer__description} `}>
            Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.
            </p>
            <div className={styles.footer__copyrightSocial}>
                <p className={`${styles.copyrightSocial__copyright} `}>
                Copyright 2021. All Rights Reserved
                </p>
                <div className={`${styles.copyrightSocial__social}`}>
                    <Link href={'/'}>
                        <Image src={facebook} />
                    </Link>
                    <Link href={'/'}>
                        <Image src={twitter} />
                    </Link>
                    <Link href={'/'}>
                        <Image src={instagram} />
                    </Link>
                </div>
            </div>
        </footer>
    )
}