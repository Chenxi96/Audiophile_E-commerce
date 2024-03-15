import Image from "next/image"
import bestGear from '../../../public/assets/shared/mobile/image-best-gear.jpg'
import styles from './Benefits.module.scss'

export default function Benefits() {
    return(
        <section className={styles.section}>
            <Image className={styles.section__image} src={bestGear}/>
            <div>
                <h2 className={styles.description__h2}>
                    BRINGING YOU THE <span className={styles.h2__span}>BEST</span> AUDIO GEAR
                </h2>
                <p className={styles.description__p}>
                    Located at the heart of New York City, 
                    Audiophile is the premier store for high end headphones, 
                    earphones, speakers, and audio accessories. 
                    We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. 
                    Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.
                </p>
            </div>
        </section>
    )
}