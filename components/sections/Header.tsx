'use client';

import { useEffect, useState } from 'react';
import { NAV_ITEMS } from '@/lib/constants';
import styles from './Header.module.css';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastY, setLastY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY;
      setScrolled(currentY > 50);
      setHidden(currentY > lastY && currentY > 200);
      setLastY(currentY);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [lastY]);

  const navLinks = NAV_ITEMS.filter((item) => item.label !== 'Objednať');
  const ctaItem = NAV_ITEMS.find((item) => item.label === 'Objednať');

  return (
    <header
      className={[
        styles.header,
        scrolled ? styles.scrolled : '',
        hidden ? styles.hidden : '',
      ].join(' ')}
    >
      <div className={styles.inner}>
        <a href="#" className={styles.logo}>
          Auto<span className={styles.logoAccent}>Fix</span>
        </a>

        <nav className={[styles.nav, menuOpen ? styles.navOpen : ''].join(' ')}>
          {navLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={styles.navLink}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {ctaItem && (
          <a href={ctaItem.href} className={`btn btn-primary ${styles.ctaBtn}`}>
            {ctaItem.label}
          </a>
        )}

        <button
          className={styles.burger}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Menu"
        >
          <span className={menuOpen ? styles.burgerLineOpen : ''} />
          <span className={menuOpen ? styles.burgerLineOpen : ''} />
          <span className={menuOpen ? styles.burgerLineOpen : ''} />
        </button>
      </div>
    </header>
  );
}
