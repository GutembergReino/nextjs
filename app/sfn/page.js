import styles from '../page.module.css'
import Link from 'next/link'

export default function Sfn() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Link href="/">
          <button className={styles.backButton}>Voltar para Home</button>
        </Link>
      </header>
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          <Link href="#">1.1 Instituições do Sistema Financeiro Nacional - tipos, finalidades e atuação</Link>
        </p>
        <p>
          <Link href="#">1.2 Banco Central do Brasil e Conselho Monetário Nacional - funções e atividades</Link>
        </p>
        <p>
          <Link href="#">1.3 Instituições Financeiras Oficiais Federais - papel e atuação</Link>
        </p>
      </div>
    </main>
    </div>
  )
}
