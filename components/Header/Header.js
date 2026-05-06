'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <div className={styles.brandName}>
            <span className={styles.color1}>D</span>
            <span className={styles.color2}>A</span>
            <span className={styles.color3}>D</span>
            <span className={styles.color1}>A</span>
            <span className={styles.color2}>O</span>
            <span className={styles.color3}>U</span>
            <div className={styles.babyText}>BABY</div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className={styles.nav}>
          <Link href="#home">Início</Link>
          <Link href="#historia">História</Link>
          <Link href="#linhas">Linhas</Link>
          <Link href="#contato" className={styles.cta}>Seja um Revendedor</Link>
        </nav>

        {/* Mobile Toggle */}
        <div className={styles.mobileActions}>
          <a href="https://wa.me/5511999999999" className={styles.mobileCta}>WhatsApp</a>
          <button className={`${styles.hamburger} ${menuOpen ? styles.open : ''}`} onClick={toggleMenu} aria-label="Menu">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`${styles.menuOverlay} ${menuOpen ? styles.menuVisible : ''}`}>
        <nav className={styles.mobileNav}>
          <Link href="#home" onClick={toggleMenu}>Início</Link>
          <Link href="#historia" onClick={toggleMenu}>Nossa História</Link>
          <Link href="#linhas" onClick={toggleMenu}>Linhas de Negócio</Link>
          <Link href="#logistica" onClick={toggleMenu}>Logística</Link>
          <Link href="#contato" className={styles.mobileMenuCta} onClick={toggleMenu}>Seja um Revendedor</Link>
        </nav>
      </div>
    </header>
  );
}
