import { manrope } from '../../fonts'
import Button from '../button/Button'
import hero from './Hero.module.scss'

export default function Hero({text}) {
    return(
        <main className={`${hero.main} ${manrope.className}`}>
            <div className={`${hero.main__hero} ${hero['main__hero--center']}`}>
            <h2 className={hero.hero__h2}>NEW PRODUCT</h2>
            <h1 className={hero.hero__h1}>XX99 MARK II HEADPHONES</h1>
            <p className={hero.hero__p}>
                Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.
            </p>
            <Button text={text} />
            </div>
        </main>
    )
}