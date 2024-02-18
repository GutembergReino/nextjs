import styles from '../page.module.css'
import Link from 'next/link'

export default function ServicosBancarios() {
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
            3.1 Conta corrente: abertura, manutenção, encerramento, pagamento, devolução de cheques e cadastro de emitentes de cheques sem fundos (CCF).
          </Link>
        </p>
        <p>
          <Link href="#">
            3.2 Depósitos à vista.
          </Link>
        </p>
        <p>
          <Link href="#">
            3.3 Depósitos a prazo (CDB e RDB).
          </Link>
        </p>
        <p>
          <Link href="#">
            3.4 Fundos de Investimentos.
          </Link>
        </p>
        <p>
          <Link href="#">
            3.5 Caderneta de poupança.
          </Link>
        </p>
        <p>
          <Link href="#">
            3.6 Títulos de capitalização.
          </Link>
        </p>
        <p>
          <Link href="#">
            3.7 Planos de aposentadoria e de previdência privados.
          </Link>
        </p>
        <p>
          <Link href="#">
            3.8 Seguros.
          </Link>
        </p>
        <p>
          <Link href="#">
            3.9 Convênios de arrecadação/pagamentos (concessionárias de serviços públicos, tributos, INSS e folha de pagamento de clientes).
          </Link>
        </p>
        <p>
          <Link href="#">
            3.10 Serviço de Compensação de Cheque e Outros Papéis.
          </Link>
        </p>
        <p>
          <Link href="#">
            3.11 Cobrança.
          </Link>
        </p>
        <p>
          <Link href="#">
            3.12 Sistema de Pagamentos Brasileiro (SPB).
          </Link>
        </p>
      </div>
    </main>
    </div>
  )
}
