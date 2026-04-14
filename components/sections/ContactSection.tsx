import { CONTACT_ITEMS } from '@/lib/constants';
import styles from './ContactSection.module.css';

export default function ContactSection() {
  return (
    <section className={`section ${styles.section}`} id="kontakt">
      <div className="container">
        <div className="section-header">
          <h2>
            Kde nás <span className="accent">nájdete</span>?
          </h2>
          <p>Navštívte nás alebo nás kontaktujte telefonicky</p>
        </div>

        <div className={styles.inner}>
          <div className={styles.contacts}>
            {CONTACT_ITEMS.map((item, i) => (
              <div key={i} className={`card ${styles.card}`}>
                <span className={styles.icon}>{item.icon}</span>
                <div>
                  <h4 className={styles.title}>{item.title}</h4>
                  {item.lines.map((line, j) => (
                    <p key={j} className={styles.line}>{line}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className={styles.mapWrap}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2630.0!2d18.0440!3d48.8942!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDjCsDUzJzM5LjEiTiAxOMKwMDInMzguNCJF!5e0!3m2!1ssk!2ssk!4v1700000000000!5m2!1ssk!2ssk"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(0.9) contrast(1.1)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="AutoFix Trenčín mapa"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
