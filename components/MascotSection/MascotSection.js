import styles from './MascotSection.module.css';

export default function MascotSection() {
  return (
    <section className={styles.mascotSection}>
      <div className={styles.container}>
        {/* TEXTO (Sempre primeiro no mobile) */}
        <div className={styles.content}>
          <span className={styles.label}>O Coração da Marca</span>
          <h2 className={styles.title}>Conheça o <span className={styles.highlight}>Dadaou</span></h2>
          <p className={styles.description}>
            Mais do que um mascote, o nosso ursinho representa o abraço, o cuidado e a proteção que cada peça de roupa leva para o seu bebê. 
          </p>
          <div className={styles.traits}>
            <div className={styles.trait}>
              <span className={styles.dot}></span>
              <p>Símbolo de Conforto</p>
            </div>
            <div className={styles.trait}>
              <span className={styles.dot}></span>
              <p>Amigo dos Pequenos</p>
            </div>
            <div className={styles.trait}>
              <span className={styles.dot}></span>
              <p>Essência de Carinho</p>
            </div>
          </div>
        </div>

        {/* IMAGEM (Embaixo no mobile, grande e vertical) */}
        <div className={styles.visual}>
          <div className={styles.imageBox}>
            <img 
              src="/4ce964a8-0f89-49a3-aee5-446707345caa.jpeg" 
              alt="Mascote Dadaou Segurando Nuvem" 
              className={styles.mascotImage}
              style={{ width: '100%', height: '100%', objectFit: 'contain' }}
            />
            
            {/* Elementos Decorativos */}
            <div className={`${styles.cloud} ${styles.cloud1}`}>☁️</div>
            <div className={`${styles.cloud} ${styles.cloud2}`}>☁️</div>
            <div className={`${styles.cloud} ${styles.cloud3}`}>☁️</div>
          </div>
        </div>
      </div>
    </section>
  );
}
