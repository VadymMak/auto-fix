import Image from 'next/image';
import { GALLERY_IMAGES } from '@/lib/constants';
import styles from './GallerySection.module.css';

export default function GallerySection() {
  return (
    <section className={`section ${styles.section}`} id="galeria">
      <div className="container">
        <div className="section-header">
          <h2>
            Naša <span className="accent">Galéria</span>
          </h2>
          <p>Pohľad do nášho moderného servisu</p>
        </div>

        <div className={styles.grid}>
          {GALLERY_IMAGES.map((img) => (
            <div
              key={img.id}
              className={[
                styles.item,
                img.span === 'tall' ? styles.tall : '',
                img.span === 'wide' ? styles.wide : '',
              ].join(' ')}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                style={{ objectFit: 'cover' }}
              />
              <div className={styles.overlay}>
                <span className={styles.overlayText}>{img.alt}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
