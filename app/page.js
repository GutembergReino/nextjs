import styles from './page.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <Link href="https://www.estrategiaconcursos.com.br/curso/bnb-analista-bancario-pacote-completo-2024-pos-edital/">
            <p>
              <code className={styles.code}>1 Sistema Financeiro Nacional.</code>
            </p>
        </Link>
      </div>
      <div className={styles.description}>
        <Link href="/operacoes-de-credito">
            <p>
              <code className={styles.code}>2 Operações de Crédito Bancário.</code>
            </p>
        </Link>
      </div>
      <div className={styles.description}>
        <Link href="/servicos-bancarios">
            <p>
              <code className={styles.code}>3 Serviços bancários e financeiros.</code>
            </p>
        </Link>
      </div>
      <div className={styles.description}>
        <Link href="/aspectos-juridicos">
            <p>
              <code className={styles.code}>4 Aspectos jurídicos.</code>
            </p>
        </Link>
      </div>
      <div className={styles.description}>
        <Link href="https://www.bnb.gov.br">
            <p>
              <code className={styles.code}>5 O Banco do Nordeste do Brasil S.A.: legislação básica, programas e informações gerais de sua atuação como agente impulsionador do desenvolvimento sustentável da região nordeste.</code>
            </p>
        </Link>
      </div>
      <div className={styles.description}>
        <Link href="/etica-aplicada">
            <p>
              <code className={styles.code}>6 Ética aplicada: ética, moral, valores e virtudes.</code>
            </p>
        </Link>
      </div>
      <div className={styles.description}>
        <Link href="https://www.bnb.gov.br">
            <p>
              <code className={styles.code}>7 Política de Responsabilidade Socioambiental do Banco do Nordeste do Brasil (disponível na página do BNB na internet)</code>
            </p>
        </Link>
      </div>
      <div className={styles.description}>
        <Link href="https://www.bnb.gov.br">
            <p>
              <code className={styles.code}>8 Estratégia ASG (Ambiental, Social e Governança): Estratégia de sustentabilidade do Banco do Nordeste do Brasil (disponível na página do BNB na internet).</code>
            </p>
        </Link>
      </div>
      <div className={styles.description}>
        <Link href="https://youtube.com/playlist?list=PL-semAO9myys3B7N3ewy-5PoMlnM0q0D_&si=bgyY7m5unZnYnZuy">
            <p>
              <code className={styles.code}>9 Atualidades do mercado financeiro</code>
            </p>
        </Link>
      </div>
    </main>
  )
}
