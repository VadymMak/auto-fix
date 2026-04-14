import { STATS } from '@/lib/constants';
import styles from './StatsBar.module.css';

export default function StatsBar() {
  return (
    <div className={styles.bar}>
      <div className={styles.inner}>
        {STATS.map((stat, i) => (
          <div key={i} className={styles.item}>
            <span className={styles.value}>{stat.value}</span>
            <span className={styles.label}>{stat.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
