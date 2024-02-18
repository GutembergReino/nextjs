import { useState } from 'react';
import styles from './page.module.css'
import Link from 'next/link'

export default function Home() {
  const [concludedLinks, setConcludedLinks] = useState({});

  const toggleConcluded = (index) => {
    setConcludedLinks({
      ...concludedLinks,
      [index]: !concludedLinks[index]
    });
  };

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <Link href="https://www.estrategiaconcursos.com.br/curso/bnb-analista-bancario-pacote-completo-2024-pos-edital/">
          <p className={concludedLinks[1] ? `${styles.code} completed` : styles.code}>
            1 Sistema Financeiro Nacional.
            <button onClick={() => toggleConcluded(1)}>Concluído</button>
          </p>
        </Link>
      </div>
      <div className={styles.description}>
        <Link href="/operacoes-de-credito">
          <p className={concludedLinks[2] ? `${styles.code} completed` : styles.code}>
            2 Operações de Crédito Bancário.
            <button onClick={() => toggleConcluded(2)}>Concluído</button>
          </p>
        </Link>
      </div>
      <div className={styles.description}>
        <Link href="/servicos-bancarios">
          <p className={concludedLinks[3] ? `${styles.code} completed` : styles.code}>
            3 Serviços bancários e financeiros.
            <button onClick={() => toggleConcluded(3)}>Concluído</button>
          </p>
        </Link>
      </div>
      <div className={styles.description}>
        <Link href="/aspectos-juridicos">
          <p className={concludedLinks[4] ? `${styles.code} completed` : styles.code}>
            4 Aspectos jurídicos.
            <button onClick={() => toggleConcluded(4)}>Concluído</button>
          </p>
        </Link>
      </div>
      <div className={styles.description}>
        <Link href="https://www.bnb.gov.br">
          <p className={concludedLinks[5] ? `${styles.code} completed` : styles.code}>
            5 O Banco do Nordeste do Brasil S.A.: legislação básica, programas e informações gerais de sua atuação como agente impulsionador do desenvolvimento sustentável da região nordeste.
            <button onClick={() => toggleConcluded(5)}>Concluído</button>
          </p>
        </Link>
      </div>
      <div className={styles.description}>
        <Link href="/etica-aplicada">
          <p className={concludedLinks[6] ? `${styles.code} completed` : styles.code}>
            6 Ética aplicada: ética, moral, valores e virtudes.
            <button onClick={() => toggleConcluded(6)}>Concluído</button>
          </p>
        </Link>
      </div>
      <div className={styles.description}>
        <Link href="https://www.bnb.gov.br">
          <p className={concludedLinks[7] ? `${styles.code} completed` : styles.code}>
            7 Política de Responsabilidade Socioambiental do Banco do Nordeste do Brasil (disponível na página do BNB na internet)
            <button onClick={() => toggleConcluded(7)}>Concluído</button>
          </p>
        </Link>
      </div>
      <div className={styles.description}>
        <Link href="https://www.bnb.gov.br">
          <p className={concludedLinks[8] ? `${styles.code} completed` : styles.code}>
            8 Estratégia ASG (Ambiental, Social e Governança): Estratégia de sustentabilidade do Banco do Nordeste do Brasil (disponível na página do BNB na internet).
            <button onClick={() => toggleConcluded(8)}>Concluído</button>
          </p>
        </Link>
      </div>
      <div className={styles.description}>
        <Link href="https://youtube.com/playlist?list=PL-semAO9myys3B7N3ewy-5PoMlnM0q0D_&si=bgyY7m5unZnYnZuy">
          <p className={concludedLinks[9] ? `${styles.code} completed` : styles.code}>
            9 Atualidades do mercado financeiro
            <button onClick={() => toggleConcluded(9)}>Concluído</button>
          </p>
        </Link>
      </div>
    </main>
  )
}
