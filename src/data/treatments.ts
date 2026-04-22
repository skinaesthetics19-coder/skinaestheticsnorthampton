export interface Treatment {
  name: string;
  price: string;
  note?: string;
}

export interface TreatmentCategory {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  longDescription: string;
  startingFrom: string;
  icon: string;
  treatments: Treatment[];
  whatToExpect: string[];
  faqs: { question: string; answer: string }[];
}

export const categories: TreatmentCategory[] = [
  {
    slug: 'consultation',
    name: 'Skin Consultation',
    tagline: 'Your journey starts here, completely free.',
    description: 'A personalised assessment of your skin to guide the perfect treatment plan.',
    longDescription:
      'Our initial skin consultation is completely free and gives you the opportunity to discuss your skin concerns with our qualified practitioner. We assess your skin, listen to your goals, and recommend a bespoke treatment plan tailored to your needs. No pressure, no obligation.',
    startingFrom: 'FREE',
    icon: '✦',
    treatments: [{ name: 'Initial Skin Consultation', price: 'FREE' }],
    whatToExpect: [
      'A relaxed 30-minute conversation about your skin goals',
      'Skin analysis by our qualified practitioner',
      'Personalised treatment recommendations',
      'Expert, honest advice with no obligation',
    ],
    faqs: [
      {
        question: 'Is the consultation really free?',
        answer: 'Yes, completely. There is no cost and no obligation to book a treatment afterwards.',
      },
      {
        question: 'How long does it take?',
        answer: 'Consultations typically last 20–30 minutes.',
      },
    ],
  },
  {
    slug: 'prp',
    name: 'PRP: Platelet-Rich Plasma',
    tagline: 'Natural rejuvenation using your body\'s own growth factors.',
    description: 'Harness your body\'s natural healing power to rejuvenate skin and stimulate hair growth.',
    longDescription:
      'Platelet-Rich Plasma (PRP) therapy uses a small sample of your own blood, which is spun in a centrifuge to concentrate the platelets. These growth-factor-rich platelets are then injected or micro-needled back into the treatment area to stimulate collagen production, improve skin texture, and accelerate natural healing.',
    startingFrom: '£120',
    icon: '◈',
    treatments: [
      { name: 'Full Face Skin Rejuvenation', price: '£180' },
      { name: 'PRP Scalp (Hair Growth)', price: '£150' },
      { name: 'Face + Hair (Single Session)', price: '£280' },
      { name: 'Chest PRP', price: '£120' },
    ],
    whatToExpect: [
      'A small blood sample is taken (like a routine blood test)',
      'The sample is spun to isolate platelet-rich plasma',
      'PRP is applied to the treatment area via micro-needling or injection',
      'Mild redness for 24–48 hours is normal',
      'Results become visible over 4–6 weeks',
    ],
    faqs: [
      {
        question: 'Is PRP safe?',
        answer: 'Yes. Because PRP uses your own blood, the risk of allergic reaction is extremely low. It is a well-established treatment with an excellent safety profile.',
      },
      {
        question: 'How many sessions will I need?',
        answer: 'Most clients see best results after a course of 3 sessions, spaced 4–6 weeks apart. Maintenance sessions every 6–12 months are recommended.',
      },
      {
        question: 'Does it hurt?',
        answer: 'A topical numbing cream is applied before treatment to minimise discomfort. Most clients find it very tolerable.',
      },
    ],
  },
  {
    slug: 'prf',
    name: 'PRF: Platelet-Rich Fibrin',
    tagline: 'Advanced regeneration for deeper repair and longer-lasting results.',
    description: 'The next evolution of PRP, with denser growth factors for superior skin regeneration.',
    longDescription:
      'Platelet-Rich Fibrin (PRF) is an advanced evolution of PRP. Processed without anticoagulants, PRF forms a fibrin matrix that releases growth factors slowly over time, delivering longer-lasting and more natural-looking results. It is particularly effective for delicate areas like the under-eyes and neck.',
    startingFrom: '£120',
    icon: '◇',
    treatments: [
      { name: 'Under Eyes / Smile Lines', price: '£150' },
      { name: 'Neck (Horizontal Lines Reduction)', price: '£120' },
    ],
    whatToExpect: [
      'Blood is drawn and spun using a specialist protocol',
      'PRF is carefully injected into the target area',
      'Some mild bruising or swelling may occur and will settle quickly',
      'Results build gradually over 4–8 weeks',
    ],
    faqs: [
      {
        question: 'What is the difference between PRP and PRF?',
        answer: 'PRF contains a higher concentration of platelets and growth factors, and is processed without additives. The fibrin matrix allows for slower release of growth factors, giving longer-lasting results.',
      },
      {
        question: 'Is PRF good for under-eye hollows?',
        answer: 'Yes. PRF is one of the most natural options for the delicate under-eye area, adding volume and improving skin quality without the risks associated with some dermal fillers.',
      },
    ],
  },
  {
    slug: 'microneedling',
    name: 'Microneedling',
    tagline: 'Boost collagen and improve skin texture.',
    description: 'Stimulate your skin\'s natural repair process for smoother, firmer, more radiant skin.',
    longDescription:
      'Microneedling (also known as collagen induction therapy) uses a specialist device with ultra-fine needles to create controlled micro-channels in the skin. This triggers the body\'s natural healing response, stimulating collagen and elastin production to improve texture, tone, fine lines, and scarring.',
    startingFrom: '£80',
    icon: '◉',
    treatments: [
      { name: 'Microneedling (starts from)', price: '£80' },
      { name: 'Microneedling + Jelly Mask', price: '£100' },
      { name: 'Microneedling + Dermaplane', price: '£130' },
      { name: 'Full Face with PRP (Microneedling Pen)', price: '£110' },
      { name: 'Neck with PRP (Microneedling Pen)', price: '£90' },
      { name: 'Scalp Microneedling', price: '£90' },
    ],
    whatToExpect: [
      'Skin is cleansed and numbing cream applied',
      'The microneedling device is passed over the treatment area',
      'A soothing mask or serum is applied post-treatment',
      'Redness and mild sensitivity for 24–72 hours',
      'Visible improvement in texture after 4–6 weeks',
    ],
    faqs: [
      {
        question: 'What skin concerns does microneedling treat?',
        answer: 'Microneedling is excellent for fine lines, enlarged pores, acne scarring, uneven skin tone, dull skin, and general skin rejuvenation.',
      },
      {
        question: 'How many sessions do I need?',
        answer: 'A course of 3–6 sessions spaced 4 weeks apart is recommended for best results, depending on your skin concerns.',
      },
    ],
  },
  {
    slug: 'skin-boosters',
    name: 'Skin Boosters',
    tagline: 'Deep hydration and glow from within.',
    description: 'Intensely hydrate and revitalise skin at a cellular level for a lasting natural glow.',
    longDescription:
      'Skin boosters are injectable hyaluronic acid treatments that deeply hydrate the skin from within, improving elasticity, firmness, and radiance. Unlike dermal fillers, they spread evenly throughout the skin to restore overall quality rather than adding volume. Profhilo is our gold-standard option.',
    startingFrom: '£80',
    icon: '◎',
    treatments: [
      { name: 'Skin Boosters (from)', price: '£80' },
      { name: 'Profhilo', price: '£180' },
    ],
    whatToExpect: [
      'Consultation to determine the right product for you',
      'Multiple micro-injections across the treatment area',
      'Mild swelling or small bumps that resolve within 24 hours',
      'Skin feels hydrated and looks more radiant within 2–4 weeks',
      'Profhilo is typically administered in 2 sessions, 4 weeks apart',
    ],
    faqs: [
      {
        question: 'What is Profhilo?',
        answer: 'Profhilo is a premium injectable treatment containing one of the highest concentrations of hyaluronic acid available. It bio-remodels the skin, improving laxity, hydration, and radiance.',
      },
      {
        question: 'Am I suitable for skin boosters?',
        answer: 'Skin boosters are suitable for most adults concerned with dull, dehydrated, or ageing skin. A consultation will confirm suitability.',
      },
    ],
  },
  {
    slug: 'facials',
    name: 'Facials',
    tagline: 'Relax, refresh, and restore your glow.',
    description: 'Luxurious, results-driven facials tailored to your skin\'s individual needs.',
    longDescription:
      'Our carefully curated facials combine the latest professional techniques with premium skincare products. Each facial is fully tailored to your skin, whether you are looking for deep cleansing, brightening, or anti-ageing results. You will leave with visibly improved, radiant skin.',
    startingFrom: '£75',
    icon: '✿',
    treatments: [
      { name: 'Deep Cleanse Facial with Steam', price: '£75' },
      { name: 'Dermaplane Facial', price: '£110' },
      { name: 'Glass Skin Facial', price: '£120' },
    ],
    whatToExpect: [
      'A thorough skin analysis before treatment',
      'Deep cleansing, exfoliation, and targeted treatment',
      'Relaxing massage techniques throughout',
      'Finished with a bespoke mask and SPF',
      'Immediate glow with no downtime',
    ],
    faqs: [
      {
        question: 'What is the Glass Skin Facial?',
        answer: 'The Glass Skin Facial is our signature treatment designed to achieve the coveted "glass skin" look: ultra-smooth, poreless, and luminous. It combines multiple steps of exfoliation, hydration, and brightening for a truly radiant finish.',
      },
      {
        question: 'How often should I have a facial?',
        answer: 'For maintenance and best results, we recommend a facial every 4–6 weeks, aligned with your skin\'s natural renewal cycle.',
      },
    ],
  },
  {
    slug: 'dermaplaning',
    name: 'Dermaplaning',
    tagline: 'Smooth, exfoliate, and brighten instantly.',
    description: 'Instantly remove dead skin cells and vellus hair for smoother, brighter skin.',
    longDescription:
      'Dermaplaning is a safe, non-invasive exfoliation treatment that uses a sterile surgical scalpel to gently remove dead skin cells and vellus hair (peach fuzz) from the surface of the skin. The result is instantly smoother, brighter skin with improved product absorption. It\'s suitable for most skin types.',
    startingFrom: '£50',
    icon: '❋',
    treatments: [
      { name: 'Dermaplaning', price: '£50' },
      { name: 'Dermaplaning + Enzyme Peel', price: '£55' },
      { name: 'Dermaplaning + Jelly Mask', price: '£65' },
      { name: 'Dermaplaning + Chemical Peel', price: '£105' },
    ],
    whatToExpect: [
      'Skin is thoroughly cleansed and dried',
      'A sterile surgical blade is used with precise, feathering strokes',
      'A soothing serum and moisturiser are applied post-treatment',
      'No downtime. Skin looks immediately brighter and smoother',
      'Makeup applies like a dream afterwards',
    ],
    faqs: [
      {
        question: 'Will my hair grow back thicker?',
        answer: 'No. Dermaplaning removes vellus (fine, soft) hair and has no effect on hair follicles. Hair grows back at the same rate and texture as before.',
      },
      {
        question: 'Is dermaplaning suitable for sensitive skin?',
        answer: 'Yes, dermaplaning is gentle and suitable for most skin types including sensitive skin. It is not recommended for active acne breakouts.',
      },
    ],
  },
  {
    slug: 'chemical-peels',
    name: 'Chemical Peels',
    tagline: 'Target pigmentation, acne, and dull skin.',
    description: 'Reveal brighter, clearer skin with clinically effective professional peels.',
    longDescription:
      'Chemical peels use carefully selected acids to exfoliate the skin at a deeper level, stimulating cell renewal and targeting a wide range of concerns including pigmentation, acne, fine lines, and uneven texture. Our practitioner selects the appropriate peel strength for your skin type and concerns.',
    startingFrom: '£75',
    icon: '✺',
    treatments: [
      { name: 'Chemical Peel', price: '£75' },
      { name: 'BioRePeel', price: '£90' },
    ],
    whatToExpect: [
      'Skin is thoroughly prepared and cleansed',
      'The peel solution is applied and left for a precise time',
      'You may feel mild tingling or warmth during treatment',
      'Some peeling or flaking over 3–7 days post-treatment',
      'Visible improvement in skin clarity and tone',
    ],
    faqs: [
      {
        question: 'What is BioRePeel?',
        answer: 'BioRePeel is an innovative biphasic trichloroacetic acid peel that provides the benefits of a medium peel with minimal downtime. It stimulates collagen, reduces pigmentation, and improves overall skin quality.',
      },
      {
        question: 'How much peeling should I expect?',
        answer: 'Peeling varies depending on the peel used and your skin type. Some clients experience minimal peeling; others may notice more significant flaking over 3–5 days. We will advise you fully before treatment.',
      },
    ],
  },
];

export function getCategoryBySlug(slug: string): TreatmentCategory | undefined {
  return categories.find((c) => c.slug === slug);
}

export const featuredCategories = categories.filter((c) =>
  ['prp', 'prf', 'microneedling', 'skin-boosters', 'facials', 'chemical-peels'].includes(c.slug)
);
