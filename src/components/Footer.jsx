export default function Footer({ lang }) {
  const waLink = 'https://wa.me/212771755173';
  return (
    <footer className="footer">
      <div className="footer-logo">
        <div className="logo-circle" style={{ width: 36, height: 36, borderRadius: '50%', border: '1.5px solid #c9a84c', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Cormorant Garamond', serif", fontSize: 16, fontWeight: 600, color: '#c9a84c' }}>5</div>
        <span className="footer-logo-name">Cafe O'five</span>
      </div>
      <p className="footer-tagline">
        {lang === 'en'
          ? "Coffee, breakfast, desserts and private events in Agadir, Hay Salam."
          : "قهوة وإفطار وحلويات وفعاليات خاصة في أكادير، حي السلام."}
      </p>

      <p className="footer-section-title">{lang === 'en' ? 'Cafe & events' : 'كافيه وفعاليات'}</p>
      <div className="footer-links">
        <span className="footer-link">{lang === 'en' ? 'Cafe' : 'كافيه'}</span>
        <span className="footer-link">{lang === 'en' ? 'Breakfast & desserts' : 'إفطار وحلويات'}</span>
        <span className="footer-link">{lang === 'en' ? 'Events' : 'فعاليات'}</span>
        <span className="footer-link">{lang === 'en' ? 'Birthdays & engagements' : 'أعياد ميلاد وخطوبات'}</span>
        <span className="footer-link">{lang === 'en' ? 'Celebrations' : 'احتفالات'}</span>
        <span className="footer-link">{lang === 'en' ? 'Baby showers' : 'حفلات استقبال المولود'}</span>
      </div>

      <div className="footer-address">
        <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
        {lang === 'en' ? 'Agadir, Hay Salam, Morocco' : 'أكادير، حي السلام، المغرب'}
      </div>

      <p className="footer-follow-title">{lang === 'en' ? 'Follow Us' : 'تابعنا'}</p>
      <a href={waLink} target="_blank" rel="noopener noreferrer" className="footer-contact-row">
        <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
        {lang === 'en' ? 'Contact us on WhatsApp' : 'تواصل معنا عبر واتساب'}
      </a>
      <a href="tel:+33623259356" className="footer-contact-row">
        <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.62 3.38 2 2 0 0 1 3.59 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.56a16 16 0 0 0 6.29 6.29l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
        +33 6 23 25 93 56
      </a>

      <div className="footer-socials">
        <a href="#" className="social-icon" aria-label="TikTok">
          <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.26 8.26 0 004.84 1.55V6.76a4.85 4.85 0 01-1.07-.07z"/>
          </svg>
        </a>
        <a href="#" className="social-icon" aria-label="Instagram">
          <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
          </svg>
        </a>
        <a href="#" className="social-icon" aria-label="Facebook">
          <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
          </svg>
        </a>
        <a href="#" className="social-icon" aria-label="Location">
          <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
        </a>
      </div>

      <p className="footer-copy">© 2026 Cafe O'five. {lang === 'en' ? 'All rights reserved.' : 'جميع الحقوق محفوظة.'}</p>
    </footer>
  );
}
