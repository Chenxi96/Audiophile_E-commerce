import Image from "next/image"
import Link from "next/link"
import earphones from '../../../public/assets/shared/desktop/image-category-thumbnail-earphones.png'
import headphones from '../../../public/assets/shared/desktop/image-category-thumbnail-headphones.png'
import speaker from '../../../public/assets/shared/desktop/image-category-thumbnail-speakers.png'
import rightArrow from '../../../public/assets/shared/desktop/icon-arrow-right.svg'
import styles from './Cta.module.scss'



export default function Cta() {
    return(
        <section className={styles.section}>
            <div className={styles.section__headphones} >
                <Image className={styles.headphones__image} src={headphones} />
                <h6 className={styles.headphones__h6}>HEADPHONES</h6>
                <Link className={styles.headphones__link} href={'/'}>
                    SHOP
                    <span className={styles.link__span}>
                        <Image src={rightArrow} />
                    </span>
                </Link>
            </div>
            <div className={styles.section__speakers}>
                <Image className={styles.speakers__image} src={speaker} />
                <h6 className={styles.speakers__h6}>SPEAKERS</h6>
                <Link className={styles.speakers__link} href={'/'}>
                    SHOP
                    <span className={styles.link__span}>
                        <Image src={rightArrow} />
                    </span>
                </Link>
            </div>
            <div className={styles.section__earphones}>
                <Image className={styles.earphones__image} src={earphones} />
                <h6 className={styles.earphones__h6}>EARPHONES</h6>
                <Link className={styles.earphones__link} href={'/'}>
                    SHOP
                    <span className={styles.link__span}>
                        <Image src={rightArrow} />
                    </span>
                </Link>
            </div>
        </section>
    )
}