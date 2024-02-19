import styles from '../page.module.css'
import Link from 'next/link'

export default function OperacoesDeCredito() {
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
          <Link href="https://youtu.be/epQmP2g9tlA?si=QUztyfHUSYwNU6x9">2.1 Cadastro de pessoas físicas.</Link>
        </p>
        <p>
          <Link href="https://youtu.be/epQmP2g9tlA?si=QUztyfHUSYwNU6x9">2.2 Cadastro de pessoas jurídicas.</Link>
        </p>
        <p>
          <Link href="https://youtu.be/P0Jz_hzp1f4?si=3BvFMWdV5yM7Mwkh">2.2.1 Tipos e constituição das pessoas.</Link>
        </p>
        <p>
          <Link href="https://youtu.be/P0Jz_hzp1f4?si=3BvFMWdV5yM7Mwkh">
            2.2.2 Composição societária/acionária.
          </Link>
        </p>
        <p>
          <Link href="https://www.youtube.com/watch?v=TZ_EBhm8RKU">2.2.3 Forma de tributação.</Link>
        </p>
        <p>
          <Link href="/mandatos-procuracoes">2.2.4 Mandatos e procurações.</Link>
        </p>
        <p>
          <Link href="/fundamentos-credito">2.3 Fundamentos do crédito.</Link>
        </p>
        <p>
          <Link href="/conceito-credito">2.3.1 Conceito de crédito.</Link>
        </p>
        <p>
          <Link href="/elementos-credito">2.3.2 Elementos do crédito.</Link>
        </p>
        <p>
          <Link href="/requisitos-credito">2.3.3 Requisitos do crédito.</Link>
        </p>
        <p>
          <Link href="/riscos-atividade-bancaria">2.4 Riscos da atividade bancária.</Link>
        </p>
        <p>
          <Link href="/risco-credito">2.4.1 De crédito.</Link>
        </p>
        <p>
          <Link href="/risco-mercado">2.4.2 De mercado.</Link>
        </p>
        <p>
          <Link href="/risco-operacional">2.4.3 Operacional.</Link>
        </p>
        <p>
          <Link href="/risco-sistemico">2.4.4 Sistêmico.</Link>
        </p>
        <p>
          <Link href="/risco-liquidez">2.4.5 De liquidez.</Link>
        </p>
        <p>
          <Link href="/variaveis-risco-credito">2.5 Principais variáveis relacionadas ao risco de crédito.</Link>
        </p>
        <p>
          <Link href="/variaveis-clientes">2.5.1 Clientes.</Link>
        </p>
        <p>
          <Link href="/variaveis-operacao">2.5.2 Operação.</Link>
        </p>
        <p>
          <Link href="/tipos-operacoes-credito">2.6 Tipos de operações de crédito bancário.</Link>
        </p>
        <p>
          <Link href="/operacoes-credito-geral">2.7 Operações de Crédito Geral.</Link>
        </p>
        <p>
          <Link href="/credito-pessoal">2.7.1 Crédito pessoal e Crédito Direto ao Consumidor.</Link>
        </p>
        <p>
          <Link href="/desconto-duplicatas">2.7.2 Desconto de duplicatas, notas promissórias e cheques pré-datados.</Link>
        </p>
        <p>
          <Link href="/contas-garantidas">2.7.3 Contas garantidas.</Link>
        </p>
        <p>
          <Link href="/capital-giro">2.7.4 Capital de giro.</Link>
        </p>
        <p>
          <Link href="/cartao-credito">2.7.5 Cartão de crédito.</Link>
        </p>
        <p>
          <Link href="/microcredito-urbano">2.7.6 Microcrédito urbano.</Link>
        </p>
        <p>
          <Link href="/operacoes-credito-especializado">2.8 Operações de Crédito Especializado.</Link>
        </p>
        <p>
          <Link href="/credito-rural">2.8.1 Crédito Rural.</Link>
        </p>
        <p>
          <Link href="/programa-nacional-fortalecimento-agricultura-familiar">
            2.8.1.3 Programa Nacional de Fortalecimento da Agricultura Familiar (PRONAF).
          </Link>
        </p>
        <p>
          <Link href="/credito-industrial">2.8.2 Crédito industrial, agroindustrial, para o comércio e para a prestação de serviços.</Link>
        </p>
        <p>
          <Link href="/recursos-financiamentos">2.9 Recursos utilizados na contratação de financiamentos.</Link>
        </p>
        <p>
          <Link href="/fundo-constitucional-financiamento-nordeste">2.9.1 Fundo Constitucional de Financiamento do Nordeste (FNE).</Link>
        </p>
        <p>
          <Link href="/bndes-finame">2.9.2 BNDES/FINAME.</Link>
        </p>
        <p>
          <Link href="/fundo-amparo-trabalhador">2.9.3 Fundo de Amparo ao Trabalhador (FAT).</Link>
        </p>
        <p>
          <Link href="/microfinancas">2.10 Microfinanças.</Link>
        </p>
      </div>
    </main>
    </div>
  )
}
