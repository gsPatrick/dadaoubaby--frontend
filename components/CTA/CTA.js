import styles from './CTA.module.css';

export default function CTA() {
  return (
    <section className={styles.cta}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>Pronto para dar o melhor para o seu <span className={styles.highlight}>bebê</span>?</h2>
          <p className={styles.subtitle}>
            Nossa equipe de especialistas está pronta para ajudar você a escolher as melhores peças. Atendimento personalizado via WhatsApp.
          </p>
          <a href="https://wa.me/seunumeroaqui" target="_blank" rel="noopener noreferrer" className={styles.ctaBtn}>
            Chamar no WhatsApp agora
          </a>
        </div>
        
        {/* Elementos Decorativos de Fundo */}
        <div className={styles.circle1}></div>
        <div className={styles.circle2}></div>
      </div>
    </section>
  );
}
