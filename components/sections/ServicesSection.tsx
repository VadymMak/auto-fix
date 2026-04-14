'use client';

import { useState } from 'react';
import { SERVICES } from '@/lib/constants';
import styles from './ServicesSection.module.css';

export default function ServicesSection() {
  const [activeTab, setActiveTab] = useState(SERVICES[0].id);

  const activeCategory = SERVICES.find((c) => c.id === activeTab);

  return (
    <section className={`section ${styles.section}`} id="sluzby">
      <div className="container">
        <div className="section-header">
          <h2>
            Naše <span className="accent">Služby</span>
          </h2>
          <p>Komplexný autoservis pod jednou strechou</p>
        </div>

        <div className="tabs">
          {SERVICES.map((cat) => (
            <button
              key={cat.id}
              className={`tab-btn ${activeTab === cat.id ? 'active' : ''}`}
              onClick={() => setActiveTab(cat.id)}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {activeCategory && (
          <div className={styles.grid}>
            {activeCategory.items.map((item) => (
              <div key={item.id} className={`card ${styles.card}`}>
                <div className={styles.cardTop}>
                  <h3 className={styles.cardName}>{item.name}</h3>
                  <span className={styles.price}>{item.price}</span>
                </div>
                <p className={styles.desc}>{item.description}</p>
                {item.duration && (
                  <span className={styles.duration}>⏱ {item.duration}</span>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
