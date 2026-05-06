import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <div className={styles.brandName}>
              <span className={styles.color1}>D</span>
              <span className={styles.color2}>A</span>
              <span className={styles.color3}>D</span>
              <span className={styles.color1}>A</span>
              <span className={styles.color2}>O</span>
              <span className={styles.color3}>U</span>
              <div className={styles.babyText}>BABY</div>
            </div>
            <p className={styles.description}>
              Desde 2006, unindo tradição e inovação para vestir o futuro com amor e carinho.
            </p>
          </div>

          <div className={styles.links}>
            <h4>Navegação</h4>
            <Link href="#home">Início</Link>
            <Link href="#historia">Nossa História</Link>
            <Link href="#linhas">Linhas de Negócio</Link>
            <Link href="#logistica">Logística</Link>
          </div>

          <div className={styles.contact}>
            <h4>Contato</h4>
            <p>Belém - PA | Fortaleza - CE</p>
            <a href="mailto:contato@dadoubaby.com.br">contato@dadoubaby.com.br</a>
            <div className={styles.social}>
              <a href="#" className={styles.socialIcon}>Instagram</a>
              <a href="#" className={styles.socialIcon}>WhatsApp</a>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>&copy; {new Date().getFullYear()} Dadaou Baby. Todos os direitos reservados. Marca Registrada.</p>
          <div className={styles.legal}>
            <Link href="#">Termos de Uso</Link>
            <Link href="#">Privacidade</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
