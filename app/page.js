'use client'
import Image from 'next/image';
import useViewport from './useViewport';
import Hero from './components/hero/Hero'
import Benefits from './components/benefits/Benefits';
import earphones from '../public/assets/home/mobile/image-earphones-yx1.jpg'
import earphonesTab from '../public/assets/home/tablet/image-earphones-yx1.jpg'
import earphonesDesk from '../public/assets/home/desktop/image-earphones-yx1.jpg'
import speaker from '../public/assets/home/mobile/image-speaker-zx9.png'
import speakerTab from '../public/assets/home/tablet/image-speaker-zx9.png'
import speakerDesk from '../public/assets/home/desktop/image-speaker-zx9.png'
import Cta from './components/cta/Cta'
import Button from './components/button/Button';
import styles from './page.module.scss'

export default function Home() {
  const {width} = useViewport()
  return (
    <>
      <Hero text={'SEE PRODUCT'} name={'main__button--primary'} />
      <Cta />
      <section className={styles.zx9Speakers}>
        <Image className={styles.zx9Speakers__image} src={width < 768 ? speaker : (width < 992 ? speakerTab : speakerDesk)} />
        <div className={styles.zx9Speaker__info2}>
          <h1 className={styles.info2__h4}>ZX9 SPEAKER</h1>
          <p className={styles.info2__p}>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
          <Button text={'SEE PRODUCT'} name={'main__button--secondary'}/>
        </div>
      </section>
      <section className={styles.zx7Speakers}  >
        <h4 className={styles.zx7Speakers__h4}>ZX7 SPEAKER</h4>
        <Button text={'SEE PRODUCT'} name={'main__button--tertiary'}/>
      </section>
      <section className={styles.earphones}>
        <Image className={styles.earphones__image} src={width < 768 ? earphones : (width < 992 ? earphonesTab : earphonesDesk)} />
        <div className={styles.earphones__info}>
          <h4 className={styles.info__h4}>YX1 EARPHONES</h4>
          <Button text={'SEE PRODUCT'} name={'main__button--tertiary'} />
        </div>
      </section>
      <Benefits />
    </>
  );
}
