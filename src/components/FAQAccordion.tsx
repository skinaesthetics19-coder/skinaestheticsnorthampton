import { useState } from 'react';

const faqs = [
  {
    question: 'Where are you located?',
    answer: 'We are based in Northampton, UK. Please get in touch via email or Instagram for our exact location and directions.',
  },
  {
    question: 'Do I need a consultation before booking a treatment?',
    answer: 'We offer a free initial consultation and recommend it for all new clients. It helps us understand your skin goals and recommend the most suitable treatments for you.',
  },
  {
    question: 'How do I book an appointment?',
    answer: 'You can book online through our Book Now page, email us at skinaesthetics19@gmail.com, or DM us on Instagram @skin_aesthetic_northampton.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept cash and bank transfer. Please contact us for details on payment at the time of booking.',
  },
  {
    question: 'What is your cancellation policy?',
    answer: 'We ask for at least 24 hours notice for cancellations or rescheduling. Late cancellations may incur a charge. Please contact us as soon as possible if you need to change your appointment.',
  },
  {
    question: 'Are your treatments suitable for all skin types?',
    answer: 'We treat a wide variety of skin types. During your consultation, we will assess your skin and discuss which treatments are most suitable and safe for you.',
  },
  {
    question: 'Are the treatments painful?',
    answer: 'Comfort is important to us. We use topical numbing cream where appropriate. Most clients find treatments very tolerable. We will always keep you informed and comfortable throughout.',
  },
];

export default function FAQAccordion() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => (
        <div
          key={i}
          className="rounded-xl overflow-hidden"
          style={{ border: '1px solid var(--light-grey)' }}
        >
          <button
            className="w-full flex items-center justify-between px-6 py-4 text-left"
            style={{ background: open === i ? 'var(--blush-light)' : 'white' }}
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
          >
            <span className="text-sm font-medium pr-4" style={{ color: 'var(--charcoal)' }}>
              {faq.question}
            </span>
            <svg
              className="w-5 h-5 shrink-0 transition-transform duration-200"
              style={{
                color: 'var(--rose-primary)',
                transform: open === i ? 'rotate(180deg)' : 'rotate(0deg)',
              }}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {open === i && (
            <div className="px-6 pb-5 text-sm leading-relaxed" style={{ color: 'var(--warm-grey)', background: 'var(--blush-light)' }}>
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
