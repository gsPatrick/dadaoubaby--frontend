import Image from 'next/image';
import styles from './BusinessLines.module.css';

export default function BusinessLines() {
  const lines = [
    {
      id: 'giro',
      title: 'Linha de Giro',
      subtitle: 'Rentabilidade e Volume',
      description: 'O motor das vendas para o lojista. Peças com alto giro e preços competitivos.',
      image: '/linha_giro_conceptual_1778077066779.png',
    },
    {
      id: 'premium',
      title: 'Linha Premium',
      subtitle: 'Exclusividade e Requinte',
      description: 'Materiais nobres e design exclusivo que eleva o ticket médio.',
      image: '/linha_premium_conceptual_1778077097451.png',
    }
  ];

  return (
    <section className={styles.businessLines}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Segmentação de <span className={styles.highlight}>Linhas</span></h2>
          <p className={styles.subtitle}>Soluções estratégicas para diferentes perfis de lojistas</p>
        </div>

        <div className={styles.grid}>
          {lines.map((line) => (
            <div key={line.id} className={styles.badge}>
              {/* Topo do Crachá com a Logo */}
              <div className={styles.badgeHeader}>
                <div className={styles.slot}></div>
                <div className={styles.logoBox}>
                   <Image src="/logo/logo.png" alt="Logo" width={100} height={40} className={styles.logoSmall} />
                </div>
              </div>

              {/* Corpo do Crachá com o Produto em Círculo */}
              <div className={styles.badgeBody}>
                <div className={styles.splitBackground}></div>
                <div className={styles.yellowStripe}></div>
                
                <div className={styles.productCircle}>
                  <Image 
                    src={line.image} 
                    alt={line.title} 
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              </div>

              {/* Rodapé do Crachá (Card de Informação) */}
              <div className={styles.badgeFooter}>
                <div className={styles.infoCard}>
                  <h3>{line.title}</h3>
                  <p>{line.subtitle}</p>
                </div>
                <button className={styles.cta}>Ver Detalhes</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
