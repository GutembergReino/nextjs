import styles from '../page.module.css'
import Link from 'next/link'

export default function EticaAplicada() {
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
          <Link href="#">
            6.1 Noções de ética empresarial e profissional.
          </Link>
        </p>
        <p>
          <Link href="#">
            6.2 A gestão da ética nas empresas públicas e privadas.
          </Link>
        </p>
        <p>
          <Link href="#">
            6.3 Código de Conduta Ética e Integridade do Banco do Nordeste do Brasil (disponível na página do BNB na internet).
          </Link>
        </p>
      </div>
    </main>
    </div>

  )
}
