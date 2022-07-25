import styles from './index.module.css'
import Logo from '../components/logo.svg'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.logo_container}>
        <Logo className={styles.animated_logo} />
      </div>
      <div className={styles.header}>
        Zodiac <span>Protocol</span>
      </div>
      <div className={styles.slogan}>
        Fix rates, leverage exposure, stack yield.
        Unlock your capital efficiency.
      </div>
      <div className={styles.section}>
      </div>
    </div >
  )
}
