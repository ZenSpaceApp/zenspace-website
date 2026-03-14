'use client';

import { useState } from 'react';
import styles from './ZenNotes.module.scss';
import Image from 'next/image';
import ZenNoteHeroImg from '@/public/images/soap-hero-img.png';
import SuperBill from '@/public/images/superbill.png';
import WebRTCInterface from '@/public/images/easy-connecting.jpg';

import SOAPPreview from '@/public/images/soap-preview.png';
import PatientNotesMobile from '@/public/images/patient-notes@2x.png';
import Layout from '@/components/Layout';
import Link from 'next/link';
import ZenNotesFAQ from '@/components/ZenNotesFAQ';
import AudioTap from '@/public/images/icons/audio-tap.svg';
import HumanFirst from '@/public/images/icons/soul.svg';
import ZeroPersistence from '@/public/images/icons/ram-only.svg';
import HumanSignature from '@/public/images/icons/human-first.svg';
import WaveformIcon from '@/components/waveform/Waveform';

import GetPaid from '@/public/images/icons/get-paid.svg';
import Sync from '@/public/images/icons/sync-send.svg';
import Audit from '@/public/images/icons/audit.svg';

interface WorkdayItem {
  label: string;
  detail: string;
  imageLabel: string;
  imageSrc?: any; // replace with actual asset path e.g. '/assets/soap-notes.png'
}

interface FaqItem {
  q: string;
  a: string;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const FEATURES = [
  {
    icon: AudioTap,
    title: 'High-Fidelity Audio Tap',
    body: 'Uses a native WebRTC audio stream (owned by InstaGR/ZenSpace) rather than clunky external bots.',
  },
  {
    icon: HumanFirst,
    title: 'AI is the muscle. You are the soul.',
    body: 'The system simultaneously handles documentation, ICD-10 coding, and generating plain-language patient summaries.',
  },
  {
    icon: ZeroPersistence,
    title: 'Zero-Persistence Privacy.',
    body: 'Audio is processed in real-time and not permanently stored, adhering to the highest trust and HIPAA standards.',
  },
  {
    icon: HumanSignature,
    title: 'Human Final Signature.',
    body: 'Every note remains a draft until you authenticate it. You provide the soul.',
  },
];


const WORKDAY_ITEMS: WorkdayItem[] = [
  {
    label: 'Documentation — SOAP note drafting in real time',
    detail:
      'As your session runs, ZenNotes listens and structures your notes live. By the time you say goodbye, your SOAP note is 95% complete — ready for your final review and signature.',
    imageLabel: 'SOAP note modal — documentation view',
    imageSrc: SOAPPreview, // replace: '/assets/workday-soap.png'
  },
  {
    label: 'Coding — ICD-10 and CPT codes assigned automatically',
    detail:
      'ZenNotes maps clinical content to the correct ICD-10 diagnosis and CPT procedure codes in real time, eliminating manual lookup and reducing claim errors.',
    imageLabel: 'ICD-10 / CPT coding modal',
    imageSrc: SOAPPreview, // replace: '/assets/workday-coding.png'
  },
  {
    label: 'Public Notes — plain-language summaries for patients',
    detail:
      'Alongside your private SOAP note, ZenNotes generates a warm, plain-language summary for your patient — same session, two truths. Sent automatically after the call.',
    imageLabel: 'Public patient note modal',
    imageSrc: SOAPPreview, // replace: '/assets/workday-public-notes.png'
  },
  {
    label: 'Billing — superbill generated before you close the laptop',
    detail:
      'ZenNotes automatically generates a HIPAA-compliant superbill with CPT code, ICD-10, session duration, and Provider NPI — ready to send to your patient in one click.',
    imageLabel: 'Billing / superbill modal',
    imageSrc: SOAPPreview, // replace: '/assets/workday-billing.png'
  },
];

const PRIVACY_BULLETS = [
  'No Meeting Bots.',
  'No Blood Audio.',
  'No Cloud Storage.',
  'Pure Actuation.',
];

const BILLING_BULLETS = [
  {
    "i": GetPaid,
    "h": 'Auto-Coding',
    "b": 'Our Ambient AI maps your session to the exact CPT and ICD-10 codes, ensuring you are paid accurately for your time.'
  },

  {
    "i": Sync,
    "h": 'One-Click Delivery',
    "b": 'Generate, sign, and sync to your EHR or email directly to your client.'
  },
  {
    "i": Audit,
    "h": 'Audit Protection',
    "b": 'Every bill is backed by the "Clinical Pulse" of the session, providing a verifiable trail of medical necessity.',
  }
];


// ─── Sub-components ───────────────────────────────────────────────────────────

function ImagePlaceholder({ label }: { label: string }) {
  return (
    <div className={styles.imagePlaceholder}>
      <svg className={styles.placeholderIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <path d="M21 15l-5-5L5 21" />
      </svg>
      <span>{label}</span>
    </div>
  );
}

function WorkdayAccordion({ items }: { items: WorkdayItem[] }) {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    < div className={styles.workday}>
      <div className={styles.workdayIntro}>
        <h2 className={styles.workdayHeading}>Say goodbye to&nbsp;&quot;27-hour workday&quot;</h2>
        <p className={styles.workdaySub}>We guarantee 2 hours back every single day.</p> 
        </div>
    <div className={styles.workdaySection}>
      {/* Left: accordion list */}
      <div className={styles.workdayAccordion}>

        <ul className={styles.workdayList}>
          {items.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <li key={i} className={`${styles.workdayItem} ${isOpen ? styles.workdayItemOpen : ''}`}>
                <button
                  className={styles.workdayItemBtn}
                  onClick={() => setOpenIndex(i)}
                  aria-expanded={isOpen}
                >
                  {/* <span className={styles.workdayItemDot} /> */}
                  <span className={styles.workdayItemLabel}>{item.label}</span>
                  <svg className={styles.workdayChevron} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <div className={styles.workdayItemDetail} data-open={String(isOpen)}>
                  {item.detail}
                </div>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Right: image panel */}
      <div className={styles.workdayImagePanel}>
        {items.map((item, i) => (
          <div
            key={i}
            className={`${styles.workdayImageSlide} ${openIndex === i ? styles.workdayImageSlideActive : ''}`}
            aria-hidden={openIndex !== i}
          >
            {item.imageSrc ? (
              <Image
                src={item.imageSrc}
                alt={item.imageLabel}
                style={{
                  // background: "var(--bg--alt--1)",
                  background: "linear-gradient( var(--green-50) 0%,   var(--green-200) 50%, var(--green-50) 100%)",
                  border: "12px solid var(--green-100)",
                  borderRadius: "16px",
                  // boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                  maxWidth: "100%",
                  height: "auto",
                }}
              />
            ) : (
              <ImagePlaceholder label={item.imageLabel} />
            )}
          </div>
        ))}
      </div>
      </div>
    </div>
  );
}

// function FaqAccordion({ items }: { items: FaqItem[] }) {
//   const [openIndex, setOpenIndex] = useState<number | null>(null);

//   return (
//     <div className={styles.faqList}>
//       {items.map((item, i) => {
//         const isOpen = openIndex === i;
//         return (
//           <div className={styles.faqItem} key={i}>
//             <button
//               className={styles.faqQuestion}
//               data-open={String(isOpen)}
//               onClick={() => setOpenIndex(isOpen ? null : i)}
//               aria-expanded={isOpen}
//             >
//               {item.q}
//               <svg className={styles.faqChevron} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                 <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
//               </svg>
//             </button>
//             <div className={styles.faqAnswer} data-open={String(isOpen)} aria-hidden={!isOpen}>
//               {item.a}
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );
// }

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ZenNotesPage() {
  return (
    <Layout>
      {/* ── Hero ── */}
      <section className={styles.hero}>
        <div className={styles.heroText}>
          <div className={styles.heroEyebrow}>
            <WaveformIcon />
            <span>Ambient Clinical Intelligence</span>
          </div>
          <h1>
            Your session ends.<br />
            Your notes are<br />
            already <em>done.</em>
          </h1>
          <p>
            Capture every nuance without the Digital Wall. Our Ambient AI transcribes your soul,
            not just your computer audio.
          </p>
          <Link
            className="btn btn-primary-dark-border"
            href="https://docs.google.com/forms/d/e/1FAIpQLSfwzPnrq_3K4zCOhyUdhwroBsw-haYHsY6Xn4wgRUXCCB8Urw/viewform?usp=header"
            target="_blank"
            rel="noopener noreferrer"
            >
            Get Early Access
          </Link>
        </div>

        <div className={styles.heroImage}>
          {/* Replace with <Image src="/assets/zennotes-hero.png" alt="ZenNotes dashboard" fill /> */}
          <Image
            src={ZenNoteHeroImg}
            alt="ZenNotes dashboard"
          />
        </div>
      </section>

      {/* ── Trust Bar ── */}
      <section className={styles.trustBar}>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem'}}>
          <WaveformIcon />
        </div>
        <h2 className={styles.trustHeading}>Built for the most sensitive<br />conversations on earth.</h2>
        <p className={styles.trustSub}>Enter Ambient Clinical Intelligence (ACI).</p>

        <div className={styles.featuresGrid}>
          {FEATURES.map((f) => (
            <div className={styles.featureCard} key={f.title}>
              <Image
                src={f.icon}
                alt={`${f.title} icon`}
                height={32}
                width={32}
                style={{
                  marginBottom: '1rem',
                }}
                className={styles.featureIcon}
              />
              <h3>{f.title}</h3>
              <p>{f.body}</p>
            </div>
          ))}
        </div>
      </section>


      {/* ── Workday Section ── */}
      <WorkdayAccordion items={WORKDAY_ITEMS} />


      {/* ── We Own The Pipes Section ── */}
      <section className={styles.pipesSection}>
        <div className={styles.pipesImage}>
          {/* Replace with <Image src="/assets/zennotes-video-call.png" alt="Video calling interface" fill /> */}
          <Image
            src={WebRTCInterface}
            alt="Video calling interface"
          />

        </div>

        <div className={styles.pipesText}>
          <h2>We own the pipes</h2>

          <ul className={styles.pipesList}>
            <li>
              <div className={styles.pipesItemHeader}>
                <span className={styles.pipesItemDot} />
                <strong>Direct Stream Extraction</strong>
              </div>
              <p>We process audio natively via WebRTC. No Bots, no third-party API lag, no security "middlemen."</p>
            </li>
            <li>
              <div className={styles.pipesItemHeader}>
                <span className={styles.pipesItemDot} />
                <strong>Zero-Persistence Processing</strong>
              </div>
              <p>Audio is analyzed in RAM and evaporates post-session. We deliver the intelligence, not the liability.</p>
            </li>
            <li>
              <div className={styles.pipesItemHeader}>
                <span className={styles.pipesItemDot} />
                <strong>Agentic Context Synthesis</strong>
              </div>
              <p>Unlike legacy scribes, we don't just transcribe; we synthesize the Affect and Thematic Memory directly into the note.</p>
            </li>
          </ul>
        </div>
      </section>

      {/* ── Privacy Section ── */}
      <section className={styles.privacySection}>
        <div className={styles.privacyInner}>
          <div className={styles.privacyPhone}>
            <div className={styles.phoneWrapper}>
              <WaveformIcon />
              {/* <span style={{ color: '#555', fontSize: '0.7rem' }}>Phone UI — Calling screen</span> */}
              
            </div>
          </div>

          <div className={styles.privacyText}>
            <h2>Zero-Persistence. Total Privacy.</h2>
            <p className={styles.privacySub}>
              Unlike wrappers that store data in the cloud, Zenspace uses RAM-only processing.
              Your audio is processed in real-time and then discarded, ensuring that your
              sensitive conversations never touch the cloud.
            </p>
            <ul className={styles.privacyBullets}>
              {PRIVACY_BULLETS.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── Public Notes Section ── */}
      <section className={styles.publicSection}>
        <div className={styles.publicText}>
          <h2>Private and public notes. Finally!</h2>
          <p className={styles.publicSub}>
            Your SOAP note stays yours — <b>  encrypted, HIPAA-compliant, audit-ready</b>.
            Your patient gets context — names, team, actionable.
            <b> Same session. Two truths</b>. Both honored.
          </p>
        </div>

        <div className={styles.publicPhone}>
          <div className={styles.phoneard}>
            {/* Replace with <Image src="/assets/zennotes-phone-notes.png" alt="Patient notes on phone" fill /> */}
            {/* <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--color--grey2)" strokeWidth="1.5">
              <rect x="5" y="2" width="14" height="20" rx="2" />
              <line x1="9" y1="9" x2="15" y2="9" />
              <line x1="9" y1="13" x2="15" y2="13" />
              <line x1="9" y1="17" x2="12" y2="17" />
            </svg> */}
            {/* <span>Phone UI — Patient note view</span> */}
            <Image
              src={PatientNotesMobile}
              alt="Patient notes on phone" />
          </div>
        </div>
      </section>

      {/* ── Billing Section ── */}
      <section className={styles.billingSection}>
        <div className={styles.billingInner}>
          <h2 className='u-textcenter'>The End of Billing Fatigue</h2>
          <p className='u-textcenter'>
            From Session to Superbill in 90 Seconds.
          </p>
          <Image 
            src={SuperBill}
            alt="Superbill preview"
            height={600}
            width={0}
            className={styles.imgHero}
            style={{
              maxWidth: "100%",
              height: "auto",
              borderRadius: "8px",
              borderBottomLeftRadius: "0",
              borderBottomRightRadius: "0",
              // boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              border: "1px solid var(--green-300)",
              borderBottom: "none", 
              display: "block",
              // background: "var(--green-500)",
              background: "linear-gradient(var(--green-200) 0%, var(--green-400) 50%, var(--bg--alt--1) 100%)"
            }}
          />
          
          <div className={styles.billingList}>
            {BILLING_BULLETS.map((b, idx) => (
              <div key={idx}>
                
                <Image
                  src={b.i}
                  alt={`${b.h} icon`}
                  height={32}
                  width={32}
                  style={{
                    marginBottom: '1rem',
                    
                    display: 'block'
                  }}
                />
              <b>{b.h}. </b>
              {b.b}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <ZenNotesFAQ />
    </Layout>
  );
}
