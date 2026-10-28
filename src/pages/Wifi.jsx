import { useState } from 'react';

const WIFI_SSID = 'Cafe Ofive';
const WIFI_PASSWORD = '10203026';

function CopyToast({ show }) {
  if (!show) return null;
  return <div className="copy-toast">✓ Copied!</div>;
}

function WifiField({ label, labelAr, value, type = 'text', lang }) {
  const [show, setShow] = useState(type !== 'password');
  const [toastVisible, setToastVisible] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setToastVisible(true);
      setTimeout(() => setToastVisible(false), 2000);
    } catch {
      // fallback
    }
  };

  return (
    <div style={{ marginBottom: 16 }}>
      <div className="wifi-field-label">{lang === 'en' ? label : labelAr}</div>
      <div className="wifi-input-row">
        <input
          className="wifi-input"
          type={type === 'password' ? (show ? 'text' : 'password') : 'text'}
          value={value}
          readOnly
        />
        {type === 'password' && (
          <button
            className="icon-btn"
            onClick={() => setShow(s => !s)}
            title={show ? 'Hide password' : 'Show password'}
          >
            {show ? (
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
                <line x1="1" y1="1" x2="23" y2="23" />
              </svg>
            ) : (
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            )}
          </button>
        )}
        <button className="icon-btn" onClick={copy} title="Copy">
          <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
          </svg>
        </button>
      </div>
      <CopyToast show={toastVisible} />
    </div>
  );
}

export default function Wifi({ lang }) {
  return (
    <div className="wifi-page fade-in">
      <h1 className="wifi-title">{lang === 'en' ? 'Guest Wi-Fi' : 'واي فاي الضيوف'}</h1>
      <p className="wifi-sub">
        {lang === 'en'
          ? 'Free Wi-Fi for all our guests at Cafe O\'five.'
          : 'واي فاي مجاني لجميع ضيوفنا في كافيه أوفايف.'}
      </p>

      {/* Credentials Card */}
      <div className="wifi-card">
        <div className="wifi-card-title">
          <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
            <path d="M5 12.55a11 11 0 0 1 14.08 0" />
            <path d="M1.42 9a16 16 0 0 1 21.16 0" />
            <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
            <line x1="12" y1="20" x2="12.01" y2="20" />
          </svg>
          {lang === 'en' ? 'Wi-Fi Credentials' : 'بيانات الاتصال'}
        </div>

        <WifiField
          label="Network Name"
          labelAr="اسم الشبكة"
          value={WIFI_SSID}
          type="text"
          lang={lang}
        />
        <WifiField
          label="Password"
          labelAr="كلمة المرور"
          value={WIFI_PASSWORD}
          type="password"
          lang={lang}
        />
      </div>

      {/* QR Code Card */}
      <div className="wifi-card">
        <div className="wifi-card-title">
          <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
            <rect x="3" y="3" width="5" height="5" /><rect x="16" y="3" width="5" height="5" />
            <rect x="3" y="16" width="5" height="5" />
            <path d="M21 16h-3a2 2 0 0 0-2 2v3M21 21v.01M13 3h-2v2h2V3zM13 8H11v2h2V8zM8 13H3v2h5v-2zM13 13h-2v5h2v-5zM18 13h-2v2h2v-2z" />
          </svg>
          {lang === 'en' ? 'Scan to Connect' : 'امسح للاتصال'}
        </div>

        <p className="qr-instruction">
          {lang === 'en'
            ? 'Open your camera app and scan this code to connect automatically.'
            : null}
        </p>
        {lang === 'ar' && (
          <p className="qr-instruction-ar">
            افتح تطبيق الكاميرا وامسح هذا الرمز للاتصال تلقائياً.
          </p>
        )}

        <div className="qr-section">
          <div className="qr-wrap">
            {/* The dot-slash (./) ensures GitHub Pages resolves the image relative to your index.html */}
            <img 
              src="./wifi-qr.png" 
              alt="Wi-Fi QR Code" 
              style={{ width: 180, height: 180, objectFit: 'contain' }}
            />
          </div>
          <p style={{ marginTop: 16, fontSize: 13, color: 'var(--gray-mid)' }}>
            {WIFI_SSID}
          </p>
        </div>
      </div>

      {/* Info note */}
      <div style={{
        display: 'flex',
        gap: 10,
        padding: '14px 16px',
        background: 'rgba(201,168,76,0.06)',
        border: '1px solid rgba(201,168,76,0.2)',
        borderRadius: 10,
        marginTop: 4,
      }}>
        <svg width="16" height="16" fill="none" stroke="#c9a84c" strokeWidth="1.8" viewBox="0 0 24 24" style={{ flexShrink: 0, marginTop: 1 }}>
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="8" x2="12" y2="12" />
          <line x1="12" y1="16" x2="12.01" y2="16" />
        </svg>
        <p style={{ fontSize: 13, color: 'var(--gray-light)', lineHeight: 1.5 }}>
          {lang === 'en'
            ? 'This Wi-Fi is exclusively for cafe guests. Please enjoy responsibly.'
            : 'هذا الواي فاي حصري لضيوف الكافيه. يُرجى الاستخدام بمسؤولية.'}
        </p>
      </div>
    </div>
  );
}