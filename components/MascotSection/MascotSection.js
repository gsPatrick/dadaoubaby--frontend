'use client';

import { useState, useEffect } from 'react';
import styles from './MascotSection.module.css';

export default function MascotSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      label: "História",
      title: "O Nascimento do Dadaou",
      description: "Inspirado no primeiro abraço, o Dadaou nasceu para ser o melhor amigo de cada bebê, trazendo segurança e carinho desde os primeiros dias."
    },
    {
      label: "Nossa Missão",
      title: "Cuidado em Cada Detalhe",
      description: "Cada peça de roupa passa pelo olhar carinhoso do nosso mascote, garantindo que o conforto seja a prioridade absoluta em nossa produção."
    },
    {
      label: "Qualidade",
      title: "Selo de Conforto Premium",
      description: "O Dadaou representa a maciez dos nossos tecidos e o carinho das costuras, transformando o vestir em um momento de pura magia."
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className={styles.mascotSection}>
      <div className={styles.container}>
        {/* CARROSSEL DE TEXTO */}
        <div className={styles.content}>
          <div className={styles.carouselWrapper}>
            {slides.map((slide, index) => (
              <div 
                key={index} 
                className={`${styles.slide} ${index === currentSlide ? styles.activeSlide : ''}`}
                style={{ display: index === currentSlide ? 'block' : 'none' }}
              >
                <span className={styles.label}>{slide.label}</span>
                <h2 className={styles.title}>{slide.title.split(' ')[0]} <span className={styles.highlight}>{slide.title.split(' ').slice(1).join(' ')}</span></h2>
                <p className={styles.description}>{slide.description}</p>
              </div>
            ))}
            
            {/* Indicadores do Carrossel */}
            <div className={styles.dots}>
              {slides.map((_, index) => (
                <button 
                  key={index} 
                  className={`${styles.dot} ${index === currentSlide ? styles.activeDot : ''}`}
                  onClick={() => setCurrentSlide(index)}
                />
              ))}
            </div>
          </div>
        </div>

        {/* VÍDEO ANIMADO (Com CSS controlado) */}
        <div className={styles.visual}>
          <div className={styles.imageBox}>
            <video 
              autoPlay 
              muted 
              loop 
              playsInline 
              className={styles.mascotVideo}
            >
              <source src="/videos/ursoanimacao.mp4" type="video/mp4" />
            </video>
            
            <div className={`${styles.cloud} ${styles.cloud1}`}>☁️</div>
            <div className={`${styles.cloud} ${styles.cloud2}`}>☁️</div>
          </div>
        </div>
      </div>
    </section>
  );
}
