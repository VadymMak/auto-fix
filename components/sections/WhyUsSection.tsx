import { WHY_ITEMS } from '@/lib/constants';
import styles from './WhyUsSection.module.css';

export default function WhyUsSection() {
  return (
    <section className={`section ${styles.section}`} id="preco-my">
      <div className="container">
        <div className="section-header">
          <h2>
            Prečo si vybrať <span className="accent">AutoFix</span>?
          </h2>
          <p>Garancie, ktoré nás odlišujú od konkurencie</p>
        </div>

        <div className={styles.grid}>
          {WHY_ITEMS.map((item) => (
            <div key={item.id} className={`card ${styles.card}`}>
              <div className={styles.iconWrap}>
                <span className={styles.icon}>{item.icon}</span>
              </div>
              <h3 className={styles.title}>{item.title}</h3>
              <p className={styles.desc}>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
