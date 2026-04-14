'use client';

import { useState, FormEvent } from 'react';
import { SERVICES } from '@/lib/constants';
import styles from './BookingSection.module.css';

export default function BookingSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section className={`section ${styles.section}`} id="objednat">
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.left}>
            <div className="section-header" style={{ textAlign: 'left', marginBottom: 24 }}>
              <h2>
                Objednajte sa<br />
                <span className="accent">online</span>
              </h2>
            </div>
            <p className={styles.subtitle}>
              Vyplňte formulár a my vás kontaktujeme do 24 hodín na potvrdenie termínu.
            </p>
            <ul className={styles.perks}>
              <li>✓ Rýchla odpoveď do 24 hodín</li>
              <li>✓ Bezplatná diagnostika pri objednávke</li>
              <li>✓ Záruka na všetky práce 2 roky</li>
            </ul>
          </div>

          <div className={styles.right}>
            {submitted ? (
              <div className={styles.success}>
                <span className={styles.successIcon}>✓</span>
                <h3>Objednávka prijatá!</h3>
                <p>Kontaktujeme vás do 24 hodín.</p>
              </div>
            ) : (
              <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.row}>
                  <div className={styles.field}>
                    <label className={styles.label}>Meno a priezvisko</label>
                    <input
                      type="text"
                      className={styles.input}
                      placeholder="Ján Novák"
                      required
                    />
                  </div>
                  <div className={styles.field}>
                    <label className={styles.label}>Telefónne číslo</label>
                    <input
                      type="tel"
                      className={styles.input}
                      placeholder="+421 9XX XXX XXX"
                      required
                    />
                  </div>
                </div>
                <div className={styles.field}>
                  <label className={styles.label}>Typ / značka auta</label>
                  <input
                    type="text"
                    className={styles.input}
                    placeholder="napr. Škoda Octavia 2019"
                    required
                  />
                </div>
                <div className={styles.field}>
                  <label className={styles.label}>Výber služby</label>
                  <select className={styles.input} required>
                    <option value="">— Vyberte službu —</option>
                    {SERVICES.map((cat) => (
                      <optgroup key={cat.id} label={cat.name}>
                        {cat.items.map((item) => (
                          <option key={item.id} value={item.id}>
                            {item.name} — {item.price}
                          </option>
                        ))}
                      </optgroup>
                    ))}
                  </select>
                </div>
                <div className={styles.field}>
                  <label className={styles.label}>Preferovaný dátum</label>
                  <input
                    type="date"
                    className={styles.input}
                    min={new Date().toISOString().split('T')[0]}
                    required
                  />
                </div>
                <button type="submit" className={`btn btn-primary ${styles.submit}`}>
                  Objednať termín
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
