import { useState } from 'react';

const GOOGLE_MAPS_REVIEW_URL = 'https://www.google.com/maps/place/Cafe+O\'five';

function StarIcon({ filled = true }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill={filled ? '#c9a84c' : 'none'}
      stroke="#c9a84c"
      strokeWidth="1.5"
      className="star-icon"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

export default function Reviews({ lang }) {
  const [visitDate, setVisitDate] = useState('');
  const [visitTime, setVisitTime] = useState('');
  const [complaint, setComplaint] = useState('');

  const buildWaMessage = () => {
    const date = visitDate || '[date]';
    const time = visitTime || '[time]';
    const msg = complaint.trim() || '[your complaint]';
    return encodeURIComponent(
      `Hello Cafe O'Five, I would like to speak with the manager about my visit.\n\nDate and time of my visit: ${date} at ${time}\n\nMy complaint: ${msg}`
    );
  };

  const waLink = `https://wa.me/212771755173?text=${buildWaMessage()}`;

  return (
    <div className="reviews-page fade-in">
      <h1 className="reviews-title">{lang === 'en' ? 'Reviews' : 'التقييمات'}</h1>
      <p className="reviews-sub">
        {lang === 'en'
          ? "Share your experience or contact us directly."
          : "شارك تجربتك أو تواصل معنا مباشرة."}
      </p>

      {/* ─── GOOGLE MAPS BOX ─── */}
      <div className="review-box">
        <div className="review-box-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
        </div>
        <h3>{lang === 'en' ? 'Your Review on Google Maps' : 'تقييمك على خرائط جوجل'}</h3>
        <div className="cafe-name-tag">Cafe O'five — Agadir, Hay Salam</div>
        <div className="stars-row">
          {[1,2,3,4,5].map(s => <StarIcon key={s} filled />)}
        </div>
        <p>
          {lang === 'en'
            ? "Loved your visit? Leave us a 5-star review on Google Maps and help other coffee lovers discover Cafe O'five."
            : "أعجبتك زيارتنا؟ اترك لنا تقييماً بخمس نجوم على خرائط جوجل وساعد عشاق القهوة على اكتشاف كافيه أوفايف."}
        </p>
        <a
          href={GOOGLE_MAPS_REVIEW_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
          id="google-maps-review-btn"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
          {lang === 'en' ? 'Leave a Review on Google Maps' : 'اترك تقييماً على خرائط جوجل'}
        </a>
      </div>

      {/* ─── CONTACT MANAGER BOX ─── */}
      <div className="review-box">
        <div className="review-box-icon" style={{ background: 'rgba(37,211,102,0.12)', color: '#25d366' }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        </div>
        <h3>{lang === 'en' ? 'Contact the Manager' : 'تواصل مع المدير'}</h3>
        <div className="cafe-name-tag" style={{ color: '#25d366' }}>
          {lang === 'en' ? 'Send a private complaint or report an issue' : 'أرسل شكوى خاصة أو أبلغ عن مشكلة'}
        </div>
        <p>
          {lang === 'en'
            ? "If you experienced an issue during your visit, please fill in the details below and send it privately to our manager via WhatsApp."
            : "إذا واجهت أي مشكلة خلال زيارتك، يرجى ملء التفاصيل أدناه وإرسالها خاصة إلى مديرنا عبر واتساب."}
        </p>

        <div className="complaint-form">
          <div className="form-field">
            <label className="form-label" htmlFor="visit-date">
              {lang === 'en' ? 'Date of Visit' : 'تاريخ الزيارة'}
            </label>
            <input
              id="visit-date"
              type="date"
              className="form-input"
              value={visitDate}
              onChange={e => setVisitDate(e.target.value)}
              style={{ colorScheme: 'dark' }}
            />
          </div>
          <div className="form-field">
            <label className="form-label" htmlFor="visit-time">
              {lang === 'en' ? 'Time of Visit' : 'وقت الزيارة'}
            </label>
            <input
              id="visit-time"
              type="time"
              className="form-input"
              value={visitTime}
              onChange={e => setVisitTime(e.target.value)}
              style={{ colorScheme: 'dark' }}
            />
          </div>
          <div className="form-field">
            <label className="form-label" htmlFor="complaint-text">
              {lang === 'en' ? 'Your Complaint' : 'شكواك'}
            </label>
            <textarea
              id="complaint-text"
              className="form-textarea"
              placeholder={lang === 'en' ? 'Describe the issue...' : 'صف المشكلة...'}
              value={complaint}
              onChange={e => setComplaint(e.target.value)}
            />
          </div>
        </div>

        <a
          href={waLink}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary btn-whatsapp"
          id="whatsapp-complaint-btn"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          {lang === 'en' ? 'Send Complaint on WhatsApp' : 'أرسل الشكوى عبر واتساب'}
        </a>
      </div>
    </div>
  );
}
