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
    <section className={styles.brandStory}>
      {/* Elementos Decorativos de Fundo */}
      <div className={styles.decorations}>
        <div className={`${styles.shape} ${styles.shape1}`}></div>
        <div className={`${styles.shape} ${styles.shape2}`}></div>
        <div className={`${styles.shape} ${styles.shape3}`}></div>
      </div>

      <div className={styles.container}>
        <div className={styles.visual}>
          <div className={styles.imageWrapper}>
            <Image 
              src="/logo/logo.png" 
              alt="Dadaou Baby Logo" 
              width={400} 
              height={400} 
              className={styles.logoImage}
            />
            <div className={styles.yearBadge}>
              <Counter end={20} suffix="+" /> Anos
            </div>
          </div>
        </div>
        
        <div className={styles.content}>
          <h2 className={styles.title}>Nossa História de <span className={styles.highlight}>Cuidado</span></h2>
          <p className={styles.text}>
            Uma marca que reúne qualidade e preço baixo. Tudo feito com muito amor e carinho.
          </p>
          
          <div className={styles.stats}>
            <div className={styles.statItem}>
              <h3><Counter end={2004} /></h3>
              <p>O Início</p>
            </div>
            <div className={styles.statItem}>
              <h3><Counter end={500} suffix="k+" /></h3>
              <p>Bebês Felizes</p>
            </div>
            <div className={styles.statItem}>
              <h3><Counter end={100} suffix="%" /></h3>
              <p>Confiança</p>
            </div>
          </div>
          
          <p className={styles.text}>
            Há mais de duas décadas, unimos a tradição de quem entende de bebês com a inovação, trazendo peças que são verdadeiras memórias afetivas em forma de roupa.
          </p>
        </div>
      </div>
    </section>
  );
}
