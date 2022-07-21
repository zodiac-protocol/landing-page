import styles from './index.module.css'
import Logo from '../components/logo.svg'

export default function Home() {
  return (
    <div className={styles.container}>
      <Logo className={styles.animated_logo} />
    </div >
  )
}
