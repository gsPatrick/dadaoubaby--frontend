import Image from 'next/image';
import styles from './BusinessLines.module.css';

export default function BusinessLines() {
  const lines = [
    {
      id: 'giro',
      title: 'Linha de Giro',
      subtitle: 'RENTABILIDADE E VOLUME',
      image: '/linha_giro_conceptual_1778077066779.png',
    },
    {
      id: 'premium',
      title: 'Linha Premium',
      subtitle: 'EXCLUSIVIDADE E REQUINTE',
      image: '/linha_premium_conceptual_1778077097451.png',
    }
  ];

  return (
    <section className={styles.businessLines} id="linhas">
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.label}>Segmentação Estratégica</span>
          <h2 className={styles.title}>Nossas <span className={styles.highlight}>Linhas</span></h2>
        </div>

        <div className={styles.grid}>
          {lines.map((line) => (
            <div key={line.id} className={styles.badge}>
              {/* Parte Superior do Crachá (Creme) */}
              <div className={styles.badgeTop}>
                <div className={styles.slot}></div>
                <div className={styles.logoBox}>
                  <Image src="/logo/logo.png" alt="Dadaou Baby" width={140} height={50} className={styles.logo} />
                </div>
                
                {/* Círculo com a imagem do produto */}
                <div className={styles.photoCircle}>
                  <Image 
                    src={line.image} 
                    alt={line.title} 
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{ objectFit: 'cover' }}
                    className={styles.productImage}
                  />
                </div>
              </div>

              {/* Parte Inferior do Crachá (Verdinho/Teal) */}
              <div className={styles.badgeBottom}>
                <div className={styles.yellowStripe}></div>
                
                {/* Card de Nome (Branco) */}
                <div className={styles.infoCard}>
                  <h3 className={styles.cardTitle}>{line.title}</h3>
                  <p className={styles.cardSubtitle}>{line.subtitle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
