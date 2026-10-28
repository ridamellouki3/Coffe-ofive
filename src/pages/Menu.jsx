import { useState } from 'react';
import { CATEGORIES, MENU_ITEMS } from '../data/menuData';
import { getImg } from '../utils';

const CATEGORY_ICONS = {
  all: (
    <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
      <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" />
      <rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" />
    </svg>
  ),
  coffee: (
    <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
      <path d="M17 8h1a4 4 0 0 1 0 8h-1" /><path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V8z" />
      <line x1="6" y1="2" x2="6" y2="4" /><line x1="10" y1="2" x2="10" y2="4" /><line x1="14" y1="2" x2="14" y2="4" />
    </svg>
  ),
  tea: (
    <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
      <path d="M17 8h1a4 4 0 0 1 0 8h-1" /><path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V8z" />
    </svg>
  ),
  fresh: (
    <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
      <line x1="8" y1="6" x2="8" y2="2" /><line x1="8" y1="22" x2="8" y2="16" />
      <path d="M2 8h12l-1 8H3L2 8z" /><path d="M16 8a6 6 0 0 1 0 8" />
    </svg>
  ),
  cold: (
    <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
      <path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M19.07 4.93 4.93 19.07" />
    </svg>
  ),
  harrira: (
    <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
      <path d="M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2z" /><path d="M8 14s1.5 2 4 2 4-2 4-2" />
      <line x1="9" y1="9" x2="9.01" y2="9" /><line x1="15" y1="9" x2="15.01" y2="9" />
    </svg>
  ),
};

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
        {item.featured && (
          <span className="featured-badge">Featured</span>
        )}
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

const SECTION_ORDER = ['coffee', 'tea', 'fresh', 'cold', 'harrira'];
const SECTION_LABELS = {
  en: {
    featured: 'Featured',
    coffee: 'Coffee',
    tea: 'Tea & Milk',
    fresh: 'Fresh & Juices',
    cold: 'Cold Drinks',
    harrira: 'Harrira Soup',
  },
  ar: {
    featured: 'المميزة',
    coffee: 'القهوة',
    tea: 'شاي وحليب',
    fresh: 'عصائر طازجة',
    cold: 'مشروبات باردة',
    harrira: 'الحريرة',
  },
};

export default function Menu({ lang }) {
  const [activeCategory, setActiveCategory] = useState('all');

  const featuredItems = MENU_ITEMS.filter(i => i.featured);

  // All items in a category (excluding items also in featured when showing "all")
  const getSectionItems = (cat) =>
    MENU_ITEMS.filter(i => i.category === cat && !i.featured);

  // Items matching the active filter (for single-category view, include featured too)
  const getSingleCategoryItems = (cat) =>
    MENU_ITEMS.filter(i => i.category === cat);

  const filteredFeatured =
    activeCategory === 'all'
      ? featuredItems
      : featuredItems.filter(i => i.category === activeCategory);

  return (
    <div className="menu-page fade-in">
      {/* ─── Category Filter Bar ─── */}
      <div className="category-bar">
        <div className="category-scroll">
          {CATEGORIES.map(cat => (
            <button
              key={cat.id}
              className={`cat-btn ${activeCategory === cat.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              {CATEGORY_ICONS[cat.id]}
              {lang === 'en' ? cat.label : cat.labelAr}
            </button>
          ))}
        </div>
      </div>

      {/* ─── Featured Section ─── */}
      {filteredFeatured.length > 0 && (
        <section className="menu-section">
          <div className="section-header">
            <svg width="20" height="20" fill="#c9a84c" viewBox="0 0 24 24">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
            <span className="section-title">
              {lang === 'en' ? SECTION_LABELS.en.featured : SECTION_LABELS.ar.featured}
            </span>
          </div>
          {filteredFeatured.map(item => (
            <MenuItemCard key={item.id} item={item} lang={lang} />
          ))}
        </section>
      )}

      {/* ─── All Categories View ─── */}
      {activeCategory === 'all' &&
        SECTION_ORDER.map(cat => {
          const items = getSectionItems(cat);
          if (items.length === 0) return null;
          return (
            <section key={cat} className="menu-section">
              <div className="section-header">
                {CATEGORY_ICONS[cat]}
                <span className="section-title">
                  {lang === 'en' ? SECTION_LABELS.en[cat] : SECTION_LABELS.ar[cat]}
                </span>
              </div>
              {items.map(item => (
                <MenuItemCard key={item.id} item={item} lang={lang} />
              ))}
            </section>
          );
        })}

      {/* ─── Single Category View ─── */}
      {activeCategory !== 'all' && (
        <section className="menu-section">
          <div className="section-header">
            {CATEGORY_ICONS[activeCategory]}
            <span className="section-title">
              {lang === 'en'
                ? SECTION_LABELS.en[activeCategory]
                : SECTION_LABELS.ar[activeCategory]}
            </span>
          </div>
          {getSingleCategoryItems(activeCategory).map(item => (
            <MenuItemCard key={item.id} item={item} lang={lang} />
          ))}
        </section>
      )}
    </div>
  );
}
