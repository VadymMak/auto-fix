import { REVIEWS } from '@/lib/constants';
import styles from './ReviewsSection.module.css';

export default function ReviewsSection() {
  return (
    <section className={`section ${styles.section}`} id="recenzie">
      <div className="container">
        <div className="section-header">
          <h2>
            Čo hovoria naši <span className="accent">zákazníci</span>?
          </h2>
          <p>Viac ako 500 spokojných zákazníkov každý rok</p>
        </div>

        <div className={styles.grid}>
          {REVIEWS.map((review) => (
            <div key={review.id} className={`card ${styles.card}`}>
              <div className={styles.header}>
                <div className={styles.avatar}>{review.initial}</div>
                <div className={styles.meta}>
                  <span className={styles.name}>{review.name}</span>
                  <span className={styles.car}>{review.car}</span>
                </div>
              </div>
              <div className={styles.stars}>
                {'★'.repeat(review.rating)}
              </div>
              <p className={styles.text}>{review.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
