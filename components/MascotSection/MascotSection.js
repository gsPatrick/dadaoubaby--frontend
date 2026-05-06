import Image from 'next/image';
import styles from './MascotSection.module.css';

export default function MascotSection() {
  return (
    <section className={styles.mascotSection}>
      <div className={styles.container}>
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

        <div className={styles.visual}>
          <div className={styles.imageBox}>
            <Image 
              src="/4ce964a8-0f89-49a3-aee5-446707345caa.jpeg" 
              alt="Mascote Dadaou Segurando Nuvem" 
              width={800} 
              height={900} 
              className={styles.mascotImage}
              priority
            />
            
            {/* Céu de Nuvens (Mais elementos) */}
            <div className={`${styles.cloud} ${styles.cloud1}`}>☁️</div>
            <div className={`${styles.cloud} ${styles.cloud2}`}>☁️</div>
            <div className={`${styles.cloud} ${styles.cloud3}`}>☁️</div>
            <div className={`${styles.cloud} ${styles.cloud4}`}>☁️</div>
            <div className={`${styles.cloud} ${styles.cloud5}`}>☁️</div>
          </div>
        </div>
      </div>
    </section>
  );
}
