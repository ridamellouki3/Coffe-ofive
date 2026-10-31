import { useState } from 'react';
import { CATEGORIES, MENU_ITEMS } from '../data/menuData';
import { getImg } from '../utils';

/* ── Icon map ─────────────────────────────────────────────── */
const ICONS = {
  all: <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>,
  coffee: <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path d="M17 8h1a4 4 0 0 1 0 8h-1"/><path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V8z"/><line x1="6" y1="2" x2="6" y2="4"/><line x1="10" y1="2" x2="10" y2="4"/><line x1="14" y1="2" x2="14" y2="4"/></svg>,
  tea: <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path d="M17 8h1a4 4 0 0 1 0 8h-1"/><path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V8z"/></svg>,
  fresh: <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><line x1="8" y1="6" x2="8" y2="2"/><line x1="8" y1="22" x2="8" y2="16"/><path d="M2 8h12l-1 8H3L2 8z"/><path d="M16 8a6 6 0 0 1 0 8"/></svg>,
  cold: <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M19.07 4.93 4.93 19.07"/></svg>,
  harrira: <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>,
  bread: <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path d="M3 11l19-9-9 19-2-8-8-2z"/></svg>,
  supplements: <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/></svg>,
};

const LABELS = {
  en: { featured: 'Featured', coffee: 'Coffee', tea: 'Tea & Milk', fresh: 'Fresh & Juices', cold: 'Cold Drinks', harrira: 'Harrira Soup', bread: 'Bread & Pastries', supplements: 'Supplements' },
  ar: { featured: 'المميزة',  coffee: 'القهوة',  tea: 'شاي وحليب',  fresh: 'عصائر طازجة',   cold: 'مشروبات باردة', harrira: 'الحريرة',      bread: 'مخبوزات',          supplements: 'إضافات' },
};

const SECTION_ORDER = ['coffee', 'tea', 'fresh', 'cold', 'harrira', 'bread', 'supplements'];

/* ── Single card ─────────────────────────────────────────── */
function MenuItemCard({ item, lang }) {
  return (
    <div className="menu-item">
      <div className="menu-item-img-wrap">
        <img
          src={getImg(item.image)}
          alt={lang === 'en' ? item.name : item.nameAr}
          className="menu-item-img"
          loading="lazy"
        />
        {item.featured && <span className="featured-badge">⭐ Featured</span>}
      </div>
      <div className="menu-item-body">
        <div>
          <div className="menu-item-name">{lang === 'en' ? item.name : item.nameAr}</div>
          {item.description && (
            <div className="menu-item-desc">
              {lang === 'en' ? item.description : item.descriptionAr}
            </div>
          )}
        </div>
        <div className="menu-item-price">{item.price} DH</div>
      </div>
    </div>
  );
}

/* ── Section renderer ────────────────────────────────────── */
function MenuSection({ catId, items, lang }) {
  if (!items.length) return null;
  const useGrid = catId === 'supplements';
  return (
    <section className="menu-section">
      <div className="section-header">
        {ICONS[catId]}
        <span className="section-title">
          {lang === 'en' ? LABELS.en[catId] : LABELS.ar[catId]}
        </span>
      </div>
      <div className={useGrid ? 'menu-grid' : ''}>
        {items.map(item => <MenuItemCard key={item.id} item={item} lang={lang} />)}
      </div>
    </section>
  );
}

/* ── Page ─────────────────────────────────────────────────── */
export default function Menu({ lang }) {
  const [activeCategory, setActiveCategory] = useState('all');

  const featuredItems = MENU_ITEMS.filter(i => i.featured);

  // Non-featured items in a category (used in "All" view to avoid duplicates)
  const sectionItems = (cat) => MENU_ITEMS.filter(i => i.category === cat && !i.featured);

  // All items in a category, excluding featured (for single-category view)
  const catItems = (cat) => MENU_ITEMS.filter(i => i.category === cat && !i.featured);

  const filteredFeatured = activeCategory === 'all'
    ? featuredItems
    : featuredItems.filter(i => i.category === activeCategory);

  return (
    <div className="menu-page fade-in">

      {/* ── Category Filter Bar ── */}
      <div className="category-bar">
        <div className="category-scroll">
          {CATEGORIES.map(cat => (
            <button
              key={cat.id}
              className={`cat-btn ${activeCategory === cat.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              {ICONS[cat.id]}
              {lang === 'en' ? cat.label : cat.labelAr}
            </button>
          ))}
        </div>
      </div>

      {/* ── Featured section (shown in all views) ── */}
      {filteredFeatured.length > 0 && (
        <section className="menu-section">
          <div className="section-header">
            <svg width="18" height="18" fill="#c9a84c" viewBox="0 0 24 24">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
            </svg>
            <span className="section-title">
              {lang === 'en' ? LABELS.en.featured : LABELS.ar.featured}
            </span>
          </div>
          {filteredFeatured.map(item => <MenuItemCard key={item.id} item={item} lang={lang} />)}
        </section>
      )}

      {/* ── "All" view: one section per category ── */}
      {activeCategory === 'all' && SECTION_ORDER.map(cat => (
        <MenuSection key={cat} catId={cat} items={sectionItems(cat)} lang={lang} />
      ))}

      {/* ── Single category view ── */}
      {activeCategory !== 'all' && (
        <MenuSection catId={activeCategory} items={catItems(activeCategory)} lang={lang} />
      )}
    </div>
  );
}
