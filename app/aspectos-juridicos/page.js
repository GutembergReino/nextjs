import styles from '../page.module.css'
import Link from 'next/link'

export default function AspectosJuridicos() {
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
            4.1 Noções de direito aplicadas às operações de crédito.
          </Link>
        </p>
        <p>
          <Link href="#">
            4.1.1 Sujeito e Objeto do Direito.
          </Link>
        </p>
        <p>
          <Link href="#">
            4.1.2 Fato e ato jurídico.
          </Link>
        </p>
        <p>
          <Link href="#">
            4.1.3 Contratos: conceito de contrato, requisitos dos contratos, classificação dos contratos; contratos nominados, contratos de compra e venda, empréstimo, sociedade, fiança, contratos formais e informais.
          </Link>
        </p>
        <p>
          <Link href="#">
            4.2 Instrumentos de formalização das operações de crédito.
          </Link>
        </p>
        <p>
          <Link href="#">
            4.2.1 Contratos por instrumento público e particular.
          </Link>
        </p>
        <p>
          <Link href="#">
            4.2.2 Cédulas e notas de crédito.
          </Link>
        </p>
        <p>
          <Link href="#">
            4.3 Garantias.
          </Link>
        </p>
        <p>
          <Link href="#">
            4.3.1 Fidejussórias: fiança e aval.
          </Link>
        </p>
        <p>
          <Link href="#">
            4.3.2 Reais: hipoteca e penhor.
          </Link>
        </p>
        <p>
          <Link href="#">
            4.3.3 Alienação fiduciária de bens móveis.
          </Link>
        </p>
        <p>
          <Link href="#">
            4.4 Títulos de Crédito - nota promissória, duplicata, cheque.
          </Link>
        </p>
      </div>
    </main>
    </div>
  )
}
