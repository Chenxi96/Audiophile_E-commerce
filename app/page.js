'use client'
import Image from 'next/image';
import useViewport from './useViewport';
import Hero from './components/hero/Hero'
import Benefits from './components/benefits/Benefits';
import earphones from '../public/assets/home/mobile/image-earphones-yx1.jpg'
import earphonesTab from '../public/assets/home/tablet/image-earphones-yx1.jpg'
import earphonesDesk from '../public/assets/home/desktop/image-earphones-yx1.jpg'
import Button from './components/button/Button';
import styles from './page.module.scss'

export default function Home() {
  const {width} = useViewport()
  return (
    <>
      <Hero text={'SEE PRODUCT'} name={'main__button--primary'} />
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
