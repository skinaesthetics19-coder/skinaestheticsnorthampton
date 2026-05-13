import { useState } from 'react';

const ALL_CATEGORIES = ['All', 'PRP', 'Microneedling', 'Skin Boosters', 'Facials', 'Dermaplaning', 'Chemical Peels', 'PRF'];

interface GalleryItem {
  id: number;
  category: string;
  label: string;
}

// Phase 1 placeholder items — real photos replace these in Phase 2
const items: GalleryItem[] = [
  { id: 1, category: 'PRP', label: 'Full Face PRP Rejuvenation' },
  { id: 2, category: 'Microneedling', label: 'Microneedling: Texture Improvement' },
  { id: 3, category: 'Facials', label: 'Glass Skin Facial' },
  { id: 4, category: 'Skin Boosters', label: 'Profhilo Treatment' },
  { id: 5, category: 'Dermaplaning', label: 'Dermaplaning + Peel' },
  { id: 6, category: 'Chemical Peels', label: 'BioRePeel Treatment' },
  { id: 7, category: 'PRF', label: 'PRF Under Eyes' },
  { id: 8, category: 'PRP', label: 'PRP Scalp (Hair Growth)' },
  { id: 9, category: 'Microneedling', label: 'Microneedling + PRP' },
  { id: 10, category: 'Facials', label: 'Deep Cleanse Facial' },
  { id: 11, category: 'Chemical Peels', label: 'Chemical Peel: Pigmentation' },
  { id: 12, category: 'Skin Boosters', label: 'Skin Booster: Hydration' },
];

const gradients = [
  'linear-gradient(135deg, #E8B4A8 0%, #F5E6E0 100%)',
  'linear-gradient(135deg, #F5E6E0 0%, #E8B4A8 100%)',
  'linear-gradient(135deg, #D4856A22 0%, #E8B4A8 100%)',
  'linear-gradient(135deg, #C4717A22 0%, #F5E6E0 100%)',
];

export default function GalleryGrid() {
  const [active, setActive] = useState('All');
  const [lightbox, setLightbox] = useState<GalleryItem | null>(null);

  const filtered = active === 'All' ? items : items.filter((i) => i.category === active);

  return (
    <div>
      {/* Filter bar */}
      <div className="flex flex-wrap gap-2 justify-center mb-10">
        {ALL_CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className="px-4 py-2 rounded-full text-sm font-medium tracking-wide transition-all duration-200"
            style={{
              background: active === cat ? 'var(--rose-primary)' : 'var(--off-white)',
              color: active === cat ? 'white' : 'var(--charcoal)',
              border: active === cat ? '1.5px solid var(--rose-primary)' : '1.5px solid var(--light-grey)',
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
        {filtered.map((item, i) => (
          <div
            key={item.id}
            className="break-inside-avoid rounded-2xl overflow-hidden cursor-pointer group"
            style={{
              border: '1px solid var(--light-grey)',
              boxShadow: '0 2px 16px rgba(196,113,122,0.07)',
            }}
            onClick={() => setLightbox(item)}
            role="button"
            aria-label={`View ${item.label} before and after`}
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && setLightbox(item)}
          >
            {/* Placeholder image area */}
            <div
              className="w-full"
              style={{
                background: gradients[i % gradients.length],
                aspectRatio: i % 3 === 1 ? '3/4' : '4/3',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'transform 0.3s ease',
              }}
            >
              <div className="text-center px-6">
                <svg className="w-8 h-8 mx-auto mb-2" viewBox="0 0 24 24" fill="currentColor" style={{ color: 'var(--rose-primary)' }} aria-hidden="true">
                  <path d="M12 2 L13.5 9 L20.5 10.5 L13.5 12 L12 19 L10.5 12 L3.5 10.5 L10.5 9 Z" />
                </svg>
                <p className="text-xs font-medium" style={{ color: 'var(--warm-grey)' }}>
                  Before &amp; After
                </p>
                <p className="text-xs italic mt-1" style={{ color: 'var(--warm-grey)' }}>
                  Photo in Phase 2
                </p>
              </div>
            </div>
            <div className="px-4 py-3" style={{ background: 'white' }}>
              <p className="text-xs font-medium" style={{ color: 'var(--charcoal)' }}>{item.label}</p>
              <p className="text-xs mt-0.5" style={{ color: 'var(--rose-primary)' }}>{item.category}</p>
            </div>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-center py-16 text-sm" style={{ color: 'var(--warm-grey)' }}>
          No results for this category yet.
        </p>
      )}

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: 'rgba(28,28,28,0.85)', backdropFilter: 'blur(8px)' }}
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Image lightbox"
        >
          <div
            className="relative max-w-lg w-full rounded-3xl overflow-hidden"
            style={{ background: 'white' }}
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className="w-full"
              style={{
                background: gradients[lightbox.id % gradients.length],
                aspectRatio: '4/3',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <div className="text-center px-8">
                <svg className="w-12 h-12 mx-auto mb-3" viewBox="0 0 24 24" fill="currentColor" style={{ color: 'var(--rose-primary)' }} aria-hidden="true">
                  <path d="M12 2 L13.5 9 L20.5 10.5 L13.5 12 L12 19 L10.5 12 L3.5 10.5 L10.5 9 Z" />
                </svg>
                <p className="font-medium" style={{ color: 'var(--charcoal)', fontFamily: 'var(--font-heading)', fontSize: '1.2rem' }}>
                  {lightbox.label}
                </p>
                <p className="text-sm mt-2 italic" style={{ color: 'var(--warm-grey)' }}>
                  Real photos coming in Phase 2
                </p>
              </div>
            </div>
            <div className="px-6 py-4 flex items-center justify-between">
              <div>
                <p className="text-sm font-medium" style={{ color: 'var(--charcoal)' }}>{lightbox.label}</p>
                <p className="text-xs mt-0.5" style={{ color: 'var(--rose-primary)' }}>{lightbox.category}</p>
              </div>
              <button
                onClick={() => setLightbox(null)}
                className="w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-200"
                style={{ background: 'var(--light-grey)', color: 'var(--charcoal)' }}
                aria-label="Close lightbox"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
