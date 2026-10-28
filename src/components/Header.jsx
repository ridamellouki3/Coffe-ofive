import { NavLink, Link } from 'react-router-dom';

export default function Header({ lang, setLang }) {
  return (
    <header className="header">
      <div className="header-top">
        <Link to="/" className="logo">
          <div className="logo-circle">5</div>
          <span className="logo-name">Cafe O'five</span>
        </Link>
        <button
          className="lang-btn"
          onClick={() => setLang(lang === 'en' ? 'ar' : 'en')}
          aria-label="Toggle language"
        >
          <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" />
            <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
          </svg>
          {lang === 'en' ? 'EN' : 'AR'}
        </button>
      </div>
      <nav className="nav-tabs" role="navigation">
        <NavLink to="/" end className={({ isActive }) => 'nav-tab' + (isActive ? ' active' : '')}>
          <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
            <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
          </svg>
          {lang === 'en' ? 'Home' : 'الرئيسية'}
        </NavLink>
        <NavLink to="/menu" className={({ isActive }) => 'nav-tab' + (isActive ? ' active' : '')}>
          <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
            <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
            <path d="M7 2v20" />
            <path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3zm0 0v7" />
          </svg>
          {lang === 'en' ? 'Menu' : 'القائمة'}
        </NavLink>
        <NavLink to="/reviews" className={({ isActive }) => 'nav-tab' + (isActive ? ' active' : '')}>
          <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
          {lang === 'en' ? 'Reviews' : 'التقييمات'}
        </NavLink>
        <NavLink to="/wifi" className={({ isActive }) => 'nav-tab' + (isActive ? ' active' : '')}>
          <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
            <path d="M5 12.55a11 11 0 0 1 14.08 0" />
            <path d="M1.42 9a16 16 0 0 1 21.16 0" />
            <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
            <line x1="12" y1="20" x2="12.01" y2="20" />
          </svg>
          {lang === 'en' ? 'Wi-Fi' : 'واي فاي'}
        </NavLink>
      </nav>
    </header>
  );
}
