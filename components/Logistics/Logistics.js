import Image from 'next/image';
import styles from './Logistics.module.css';

export default function Logistics() {
  return (
    <section className={styles.logistics}>
      <div className={styles.container}>
        <div className={styles.content}>
          <span className={styles.label}>Vantagem Logística B2B</span>
          <h2 className={styles.title}>De Belém para o <span className={styles.highlight}>Brasil</span></h2>
          <p className={styles.text}>
            Sabemos que a eficiência no frete é vital para o seu negócio. Por isso, operamos com uma estratégia logística inteligente para facilitar a sua coleta.
          </p>
          
          <div className={styles.routeBox}>
            <div className={styles.hub}>
              <div className={styles.hubIcon}>🏢</div>
              <div>
                <h4>CD Principal: Belém</h4>
                <p>Nosso centro de distribuição oficial e estoque central.</p>
              </div>
            </div>
            
            <div className={styles.arrow}>
               <svg viewBox="0 0 24 24" fill="none" stroke="#FF8742" strokeWidth="2">
                 <path d="M5 12h14M12 5l7 7-7 7" />
               </svg>
            </div>

            <div className={styles.hub}>
              <div className={styles.hubIcon}>🚛</div>
              <div>
                <h4>Entrega: Fortaleza</h4>
                <p>Levamos sua mercadoria até Fortaleza <strong>por nossa conta</strong>.</p>
              </div>
            </div>
          </div>

          <div className={styles.infoNote}>
            <p>
              <strong>Por que Fortaleza?</strong> Muitos clientes possuem transportadoras parceiras que operam a partir de Fortaleza. Para garantir que você não perca vendas por falta de frete, nós assumimos o trecho Belém ➔ Fortaleza sem custos adicionais.
            </p>
          </div>
        </div>

        <div className={styles.mapsContainer}>
          <div className={styles.mapItem}>
            <div className={styles.mapLabel}>CD Belém (PA)</div>
            <div className={styles.mapBox}>
              <Image 
                src="/map_para.png" 
                alt="Mapa Pará" 
                width={200} 
                height={200} 
                className={styles.miniMap}
              />
              <div className={styles.ping}></div>
            </div>
          </div>

          <div className={styles.connector}>
            <svg viewBox="0 0 100 40" className={styles.arrowSvg}>
              <path d="M0,20 L80,20 M70,10 L80,20 L70,30" fill="none" stroke="#FF8742" strokeWidth="3" />
            </svg>
            <span className={styles.freeLabel}>Frete por nossa conta</span>
          </div>

          <div className={styles.mapItem}>
            <div className={styles.mapLabel}>Entrega Fortaleza (CE)</div>
            <div className={styles.mapBox}>
              <Image 
                src="/map_ceara.png" 
                alt="Mapa Ceará" 
                width={200} 
                height={200} 
                className={styles.miniMap}
              />
              <div className={styles.ping}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
