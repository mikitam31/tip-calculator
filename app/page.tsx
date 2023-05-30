import { Header } from '@/app/components';
import { CalculatorPage } from '@/app/containers';
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <CalculatorPage />
    </main>
  )
}
