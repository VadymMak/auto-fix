import styles from './PricingSection.module.css';

const PACKAGES = [
  {
    id: 'basic',
    name: 'Základný servis',
    price: '€49',
    description: 'Ideálny pre pravidelnú údržbu vozidla',
    features: [
      'Výmena motorového oleja',
      'Kontrola brzdovej sústavy',
      'Kontrola tlaku pneumatík',
      'Základná diagnostika',
      'Doplnenie prevádzkových kvapalín',
    ],
    highlight: false,
  },
  {
    id: 'complete',
    name: 'Kompletný servis',
    price: '€149',
    description: 'Komplexná starostlivosť o vaše vozidlo',
    features: [
      'Všetko zo základného servisu',
      'Výmena vzduchového filtra',
      'Kontrola podvozku a riadenia',
      'Kontrola klimatizácie',
      'Geometria kolies',
      'Výmena stieračov',
    ],
    highlight: true,
  },
  {
    id: 'premium',
    name: 'Premium servis',
    price: '€249',
    description: 'Maximálna starostlivosť a výkon',
    features: [
      'Všetko z kompletného servisu',
      'Výmena sviečok',
      'Čistenie vstrekovačov',
      'Čistenie interiéru',
      'Leštenie karosérie',
      'Prioritná obsluha',
    ],
    highlight: false,
  },
];

export default function PricingSection() {
  return (
    <section className={`section ${styles.section}`} id="cennik">
      <div className="container">
        <div className="section-header">
          <h2>
            Servisné <span className="accent">Balíčky</span>
          </h2>
          <p>Vyberte si balíček, ktorý zodpovedá vašim potrebám</p>
        </div>

        <div className={styles.grid}>
          {PACKAGES.map((pkg) => (
            <div
              key={pkg.id}
              className={[styles.card, pkg.highlight ? styles.highlight : ''].join(' ')}
            >
              {pkg.highlight && (
                <div className={styles.badge}>Najpopulárnejší</div>
              )}
              <h3 className={styles.name}>{pkg.name}</h3>
              <div className={styles.price}>{pkg.price}</div>
              <p className={styles.desc}>{pkg.description}</p>
              <ul className={styles.features}>
                {pkg.features.map((f, i) => (
                  <li key={i} className={styles.feature}>
                    <span className={styles.check}>✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#objednat"
                className={`btn ${pkg.highlight ? 'btn-primary' : 'btn-outline'} ${styles.cta}`}
              >
                Objednať
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
