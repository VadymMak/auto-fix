import Image from 'next/image';
import { IMAGES } from '@/lib/constants';
import styles from './HeroSection.module.css';

export default function HeroSection() {
  return (
    <section className={styles.hero} id="hero">
      <div className={styles.bg}>
        <Image
          src={IMAGES.hero}
          alt="AutoFix autoservis"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: 'cover' }}
        />
        <div className={styles.overlay} />
      </div>

      <div className={styles.content}>
        <div className={styles.badge}>
          <span className={styles.badgeDot} />
          Trenčín, Priemyselná 15
        </div>

        <h1 className={styles.title}>
          Váš spoľahlivý<br />
          <span className={styles.accent}>autoservis</span><br />
          v Trenčíne
        </h1>

        <p className={styles.subtitle}>
          Profesionálny servis, diagnostika a opravy.<br />
          Expresné služby od 30 minút.
        </p>

        <div className={styles.ctas}>
          <a href="#objednat" className="btn btn-primary">
            Objednať termín
          </a>
          <a href="#cennik" className="btn btn-outline">
            Pozrieť cenník
          </a>
        </div>
      </div>

      <div className={styles.scrollHint}>
        <span className={styles.scrollLine} />
        <span className={styles.scrollText}>Prejsť nadol</span>
      </div>
    </section>
  );
}
