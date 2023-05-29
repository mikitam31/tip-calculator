import Image from "next/image"
import styles from './header.module.css'

export const Header = () => {
  return (
    <header className={styles.header}>
      <Image
        src="/logo.svg"
        alt="Tip Calculator Logo"
        width={87}
        height={54}
        priority
      />
    </header>
  )
}
