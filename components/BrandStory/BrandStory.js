'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from './BrandStory.module.css';

function Counter({ end, suffix = '', duration = 2000 }) {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStarted(true);
        }
      },
      { threshold: 0.5 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;

    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [started, end, duration]);

  return <span ref={countRef}>{count}{suffix}</span>;
}

export default function BrandStory() {
  return (
    <section className={styles.brandStory} id="historia">
      <div className={styles.container}>
        <div className={styles.visual}>
          <div className={styles.imageWrapper}>
            <div className={styles.yearBadge}>
              <Counter end={20} suffix="+" /> Anos
            </div>
            <Image 
              src="/logo/logoalternativa.png" 
              alt="Dadaou Baby Logo" 
              width={600} 
              height={600} 
              className={styles.logoImage}
              priority
            />
          </div>
        </div>
        
        <div className={styles.content}>
          <h2 className={styles.title}>Nossa História de Cuidado</h2>
          <p className={styles.text}>
            Uma marca que reúne qualidade e preço baixo. Tudo feito com muito amor e carinho para os pequenos.
          </p>
          
          <div className={styles.stats}>
            <div className={styles.statItem}>
              <h3><Counter end={2004} duration={2500} /></h3>
              <p>O Início</p>
            </div>
            <div className={styles.statItem}>
              <h3><Counter end={500} suffix="k+" duration={2000} /></h3>
              <p>Bebês Felizes</p>
            </div>
            <div className={styles.statItem}>
              <h3><Counter end={100} suffix="%" duration={1500} /></h3>
              <p>Confiança</p>
            </div>
          </div>
          
          <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer" className={styles.button}>Seja um Revendedor Agora</a>
        </div>
      </div>
    </section>
  );
}
