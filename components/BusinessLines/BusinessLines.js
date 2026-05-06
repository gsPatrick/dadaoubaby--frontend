import CloudDivider from '../CloudDivider/CloudDivider';
import styles from './BusinessLines.module.css';

export default function BusinessLines() {
  const lines = [
    {
      id: 'giro',
      title: 'Linha de Giro',
      subtitle: 'Rentabilidade e Volume',
      description: 'O motor das vendas para o lojista. Peças com alto giro, preços competitivos e a qualidade que o mercado já confia. Ideal para quem busca volume e giro rápido de estoque.',
      image: '/linha/urso.jpeg',
      color: '#fdf8e9', // Creme
      textColor: 'var(--text-main)',
      tagColor: 'var(--primary-orange)'
    },
    {
      id: 'premium',
      title: 'Linha Premium',
      subtitle: 'Exclusividade e Requinte',
      description: 'Materiais nobres, acabamento impecável e design exclusivo. A linha premium é pensada para elevar o ticket médio da sua loja e encantar os clientes mais exigentes.',
      image: '/linha/ursopremium.jpeg',
      color: '#48b5aa', // Verdinho/Teal
      textColor: '#ffffff',
      tagColor: '#ffbf21'
    }
  ];

  return (
    <section className={styles.businessLines} id="linhas">
      <div className={styles.mainTitleArea}>
        <span className={styles.topLabel}>Categorias Estratégicas</span>
        <h2 className={styles.mainTitle}>Conheça Nossas <span className={styles.highlight}>Linhas</span></h2>
      </div>

      <div className={styles.rows}>
        {/* LINHA DE GIRO */}
        <div 
          className={styles.row}
          style={{ backgroundColor: lines[0].color }}
        >
          <div className={styles.contentSide} style={{ color: lines[0].textColor }}>
            <div className={styles.contentWrapper}>
              <span className={styles.lineTag} style={{ backgroundColor: lines[0].tagColor }}>{lines[0].subtitle}</span>
              <h3 className={styles.lineTitle}>{lines[0].title}</h3>
              <p className={styles.lineDescription}>{lines[0].description}</p>
              <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer" className={styles.ctaButton}>
                Quero Revender esta Linha
              </a>
            </div>
          </div>
          <div className={styles.imageSide}>
            <div className={styles.imageContainer}>
              <img 
                src={lines[0].image} 
                alt={lines[0].title} 
                className={styles.productImage}
                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
              />
            </div>
          </div>
        </div>

        <div className={styles.dividerWrapper}>
          <CloudDivider type="waves" color={lines[0].color} />
        </div>

        {/* LINHA PREMIUM */}
        <div 
          className={`${styles.row} ${styles.reverse}`}
          style={{ backgroundColor: lines[1].color }}
        >
          <div className={styles.contentSide} style={{ color: lines[1].textColor }}>
            <div className={styles.contentWrapper}>
              <span className={styles.lineTag} style={{ backgroundColor: lines[1].tagColor }}>{lines[1].subtitle}</span>
              <h3 className={styles.lineTitle}>{lines[1].title}</h3>
              <p className={styles.lineDescription}>{lines[1].description}</p>
              <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer" className={styles.ctaButton}>
                Quero Revender esta Linha
              </a>
            </div>
          </div>
          <div className={styles.imageSide}>
            <div className={styles.imageContainer}>
              <img 
                src={lines[1].image} 
                alt={lines[1].title} 
                className={styles.productImage}
                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
