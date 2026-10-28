import { Link } from 'react-router-dom';
import { getImg } from '../utils';

export default function Home({ lang }) {
  return (
    <div className="page-content fade-in">
      {/* ─── HERO ─── */}
      <section className="hero">
        <img src={getImg('/hero.png')} alt="Cafe O'five interior" className="hero-bg" />
        <div className="hero-overlay" />
        <div className="hero-content">
          <p className="hero-eyebrow">{lang === 'en' ? 'Welcome to' : 'مرحباً بكم في'}</p>
          <h1 className="hero-title">Cafe O'five</h1>
          <p className="hero-sub">
            {lang === 'en'
              ? "Coffee, breakfast and desserts in Agadir, Hay Salam."
              : "قهوة وإفطار وحلويات في أكادير، حي السلام."}
          </p>
        </div>
      </section>

      {/* ─── FEATURE CARDS ─── */}
      <section className="feature-cards">
        <Link to="/menu" className="feature-card">
          <div className="feature-card-icon">
            <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
              <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
              <path d="M7 2v20" />
              <path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3zm0 0v7" />
            </svg>
          </div>
          <h3>{lang === 'en' ? 'Explore Our Menu' : 'استكشف قائمتنا'}</h3>
          <p>{lang === 'en' ? 'Explore our coffees, teas, fresh juices and harira.' : 'اكتشف قهوتنا وشاينا وعصائرنا الطازجة والحريرة.'}</p>
          <span className="feature-card-link">
            {lang === 'en' ? 'Open Menu' : 'افتح القائمة'}
            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </span>
        </Link>

        <Link to="/reviews" className="feature-card">
          <div className="feature-card-icon">
            <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
          </div>
          <h3>{lang === 'en' ? 'Share Your Experience' : 'شارك تجربتك'}</h3>
          <p>{lang === 'en' ? 'Share your experience on Google Maps.' : 'شارك تجربتك على خرائط جوجل.'}</p>
          <span className="feature-card-link">
            {lang === 'en' ? 'Leave a Review' : 'اترك تقييماً'}
            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </span>
        </Link>

        <Link to="/wifi" className="feature-card">
          <div className="feature-card-icon">
            <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
              <path d="M5 12.55a11 11 0 0 1 14.08 0" />
              <path d="M1.42 9a16 16 0 0 1 21.16 0" />
              <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
              <line x1="12" y1="20" x2="12.01" y2="20" />
            </svg>
          </div>
          <h3>{lang === 'en' ? 'Connect to Wi-Fi' : 'الاتصال بالواي فاي'}</h3>
          <p>{lang === 'en' ? 'Quickly access our guest network with a simple scan.' : 'تواصل بسرعة مع شبكتنا بمسح بسيط.'}</p>
          <span className="feature-card-link">
            {lang === 'en' ? 'Get Password' : 'احصل على كلمة المرور'}
            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </span>
        </Link>
      </section>

      {/* ─── STATS ─── */}
      <section className="stats-section">
        <span className="stats-label">CAFE O'FIVE</span>
        <h2 className="stats-title">
          {lang === 'en' ? <>Cafe & <span>private events</span></> : <>كافيه و<span>فعاليات خاصة</span></>}
        </h2>
        <p className="stats-sub">
          {lang === 'en'
            ? "Coffee, breakfast, desserts and private events in Agadir, Hay Salam."
            : "قهوة وإفطار وحلويات وفعاليات خاصة في أكادير، حي السلام."}
        </p>
        <div className="stats-grid">
          <div className="stat-item">
            <div className="stat-number">5</div>
            <div className="stat-desc">{lang === 'en' ? 'Categories' : 'فئات'}</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">36</div>
            <div className="stat-desc">{lang === 'en' ? 'Drinks & dishes' : 'مشروبات وأطباق'}</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">3</div>
            <div className="stat-desc">{lang === 'en' ? 'Languages' : 'لغات'}</div>
          </div>
          <div className="stat-item">
            <div className="stat-number" style={{ fontSize: 28 }}>Free</div>
            <div className="stat-desc">{lang === 'en' ? 'Guest Wi-Fi' : 'واي فاي مجاني'}</div>
          </div>
        </div>
        <img src={getImg('/restaurant-table.png')} alt="Restaurant table" className="restaurant-img" />
      </section>
    </div>
  );
}
