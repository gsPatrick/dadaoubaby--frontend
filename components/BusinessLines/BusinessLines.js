import Image from 'next/image';
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
        {lines.map((line, index) => (
          <div 
            key={line.id} 
            className={`${styles.row} ${index % 2 !== 0 ? styles.reverse : ''}`}
            style={{ backgroundColor: line.color }}
          >
            <div className={styles.imageSide}>
              <div className={styles.imageContainer}>
                <Image 
                  src={line.image} 
                  alt={line.title} 
                  fill
                  priority={index === 0}
                  className={styles.productImage}
                  sizes="(max-width: 968px) 100vw, 50vw"
                />
              </div>
            </div>

            <div className={styles.contentSide} style={{ color: line.textColor }}>
              <div className={styles.contentWrapper}>
                <span className={styles.lineTag} style={{ backgroundColor: line.tagColor }}>{line.subtitle}</span>
                <h3 className={styles.lineTitle}>{line.title}</h3>
                <p className={styles.lineDescription}>{line.description}</p>
                <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer" className={styles.ctaButton}>
                  Quero Revender esta Linha
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
