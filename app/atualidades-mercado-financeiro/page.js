import styles from '../page.module.css'
import Link from 'next/link'

export default function AtualidadesMercadoFinanceiro() {
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
            9.1 Os bancos na Era Digital: Atualidade, tendências e desafios.
          </Link>
        </p>
        <p>
          <Link href="#">
            9.2 Internet banking.
          </Link>
        </p>
        <p>
          <Link href="#">
            9.3 Mobile banking.
          </Link>
        </p>
        <p>
          <Link href="#">
            9.4 Open banking.
          </Link>
        </p>
        <p>
          <Link href="#">
            9.5 Novos modelos de negócios.
          </Link>
        </p>
        <p>
          <Link href="#">
            9.6 Fintechs, startups e big techs.
          </Link>
        </p>
        <p>
          <Link href="#">
            9.7 Sistema de bancos sombra (Shadow banking).
          </Link>
        </p>
        <p>
          <Link href="#">
            9.8 Funções da moeda.
          </Link>
        </p>
        <p>
          <Link href="#">
            9.9 O dinheiro na era digital: blockchain, bitcoin e demais criptomoedas.
          </Link>
        </p>
        <p>
          <Link href="#">
            9.10 Marketplace.
          </Link>
        </p>
        <p>
          <Link href="#">
            9.11 Correspondentes bancários.
          </Link>
        </p>
        <p>
          <Link href="#">
            9.12 Arranjos de pagamentos.
          </Link>
        </p>
        <p>
          <Link href="#">
            9.13 Sistema de pagamentos instantâneos (PIX).
          </Link>
        </p>
        <p>
          <Link href="#">
            9.14 Segmentação e interações digitais.
          </Link>
        </p>
        <p>
          <Link href="#">
            9.15 Transformação digital no Sistema Financeiro.
          </Link>
        </p>
        <p>
          <Link href="#">
            9.16 Lei Geral de Proteção de Dados (LGPD): Lei nº 13.709, de 14 de agosto de 2018 e suas alterações.
          </Link>
        </p>
        <p>
          <Link href="#">
            9.17 Legislação anticorrupção: Lei nº 12.846/2013 e Decreto nº 11.129 de 11/07/2022.
          </Link>
        </p>
        <p>
          <Link href="#">
            9.18 Segurança cibernética: Resolução CMN nº 4.893, de 26/02/2021.
          </Link>
        </p>
      </div>
    </main>
    </div>
  )
}
