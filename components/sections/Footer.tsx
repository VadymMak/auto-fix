import { NAV_ITEMS, SERVICES, CONTACT_ITEMS } from '@/lib/constants';
import styles from './Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.top}>
          <div className={styles.col}>
            <div className={styles.logo}>
              Auto<span className={styles.logoAccent}>Fix</span>
            </div>
            <p className={styles.tagline}>
              Váš spoľahlivý autoservis v Trenčíne. Profesionálny prístup, originálne diely, 2-ročná záruka.
            </p>
            <div className={styles.socials}>
              <a href="#" className={styles.social} aria-label="Facebook">f</a>
              <a href="#" className={styles.social} aria-label="Instagram">in</a>
            </div>
          </div>

          <div className={styles.col}>
            <h4 className={styles.colTitle}>Navigácia</h4>
            <ul className={styles.links}>
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className={styles.link}>{item.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.col}>
            <h4 className={styles.colTitle}>Naše služby</h4>
            <ul className={styles.links}>
              {SERVICES.map((cat) => (
                <li key={cat.id}>
                  <a href="#sluzby" className={styles.link}>{cat.name}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.col}>
            <h4 className={styles.colTitle}>Kontakt</h4>
            <ul className={styles.links}>
              {CONTACT_ITEMS.map((item, i) => (
                <li key={i} className={styles.contactItem}>
                  <span className={styles.contactIcon}>{item.icon}</span>
                  <div>
                    {item.lines.map((line, j) => (
                      <span key={j} className={styles.contactLine}>{line}</span>
                    ))}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <span className={styles.copy}>
            © {currentYear} AutoFix Trenčín. Všetky práva vyhradené.
          </span>
          <span className={styles.credit}>
            Vytvorené cez{' '}
            <span className={styles.creditAccent}>VendShop</span>
          </span>
        </div>
      </div>
    </footer>
  );
}
