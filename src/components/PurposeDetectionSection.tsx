'use client';

import React, { useState } from 'react';
import {
  Tag,
  Truck,
  Calendar,
  Briefcase,
  Users,
  Megaphone,
  AlertTriangle,
  HelpCircle,
  PhoneMissed,
  CheckCircle2
} from 'lucide-react';

interface PurposeExample {
  category: string;
  badge: string;
  icon: any;
  color: string;
  bg: string;
  borderColor: string;
  callerSnippet: string;
  aiSnippet: string;
  explanation: string;
}

export default function PurposeDetectionSection() {
  const purposes: PurposeExample[] = [
    {
      category: 'Delivery',
      badge: 'Package Delivery',
      icon: Truck,
      color: '#2563eb',
      bg: '#eff6ff',
      borderColor: '#bfdbfe',
      callerSnippet: "Hi, this is Ramesh from Delhivery. I have an order for your address. Will someone be home by 3 PM?",
      aiSnippet: "Thank you, Ramesh. I will note that your delivery is arriving around 3 PM. Does this shipment require an OTP or cash on delivery?",
      explanation: 'Identifies shipment carriers, expected time windows, and whether payment or OTP verification is required.'
    },
    {
      category: 'Appointment',
      badge: 'Consultation / Visit',
      icon: Calendar,
      color: '#059669',
      bg: '#ecfdf5',
      borderColor: '#a7f3d0',
      callerSnippet: "Calling from Dental Care Hub to confirm your routine check-up appointment tomorrow at 11 AM.",
      aiSnippet: "Understood. I will mark your call regarding the 11 AM appointment confirmation tomorrow.",
      explanation: 'Extracts clinic/hospital names, appointment dates, and confirmation requests.'
    },
    {
      category: 'Sales / Marketing',
      badge: 'Unsolicited Commercial',
      icon: Megaphone,
      color: '#d97706',
      bg: '#fffbeb',
      borderColor: '#fde68a',
      callerSnippet: "Good afternoon, I am calling from Platinum Bank to offer a pre-approved credit card with zero annual fees.",
      aiSnippet: "Thank you for the information. The user is currently not taking sales or promotional offers.",
      explanation: 'Politely absorbs promotional pitches without interrupting your busy day or demanding your attention.'
    },
    {
      category: 'Urgent / Requesting User',
      badge: 'Requires Immediate Attention',
      icon: AlertTriangle,
      color: '#dc2626',
      bg: '#fef2f2',
      borderColor: '#fecaca',
      callerSnippet: "Please connect me to Rahul immediately, his building security manager is calling regarding water leakage.",
      aiSnippet: "I understand this is urgent regarding building security. I am notifying Rahul right away so he can take over.",
      explanation: 'Detects real emergencies or direct user requests, triggering a high-priority push notification and takeover alert.'
    },
    {
      category: 'Business',
      badge: 'Professional Inquiry',
      icon: Briefcase,
      color: '#7c3aed',
      bg: '#f5f3ff',
      borderColor: '#ddd6fe',
      callerSnippet: "Hello, this is Priya from Acme Corp following up on the vendor proposal sent earlier this week.",
      aiSnippet: "Thank you, Priya. May I take a brief message or have you specify the best callback time for Rahul?",
      explanation: 'Gathers context, organization name, and relevant callback requests for professional inquiries.'
    },
    {
      category: 'Wrong Number',
      badge: 'Mismatched Contact',
      icon: PhoneMissed,
      color: '#475569',
      bg: '#f1f5f9',
      borderColor: '#cbd5e1',
      callerSnippet: "Is this Mr. Verma's automobile repair workshop?",
      aiSnippet: "No, this is not Mr. Verma's repair shop. You have dialed an incorrect number.",
      explanation: 'Quickly resolves mistaken dials so you never have to pick up and repeat "wrong number".'
    }
  ];

  const [selectedIndex, setSelectedIndex] = useState(0);
  const current = purposes[selectedIndex];
  const IconComponent = current.icon;

  return (
    <section
      style={{
        paddingTop: '6rem',
        paddingBottom: '6rem',
        backgroundColor: '#ffffff',
        borderBottom: '1px solid #e2e8f0',
      }}
    >
      <div className="site-container">
        {/* Header */}
        <div style={{ maxWidth: '740px', marginBottom: '3.5rem' }}>
          <div className="editorial-tag">
            <Tag size={14} />
            <span>Structured Intent Recognition</span>
          </div>

          <h2
            style={{
              fontSize: 'clamp(2rem, 3.5vw, 3rem)',
              fontWeight: 800,
              color: '#0f172a',
              lineHeight: 1.15,
              letterSpacing: '-0.03em',
              marginBottom: '1rem',
            }}
          >
            It understands why they are calling.
          </h2>

          <p style={{ fontSize: '1.0625rem', color: '#475569', lineHeight: 1.6 }}>
            Instead of saving a vague voicemail or forcing you to listen to rambling audio,
            VoiSage analyzes the conversation in real time to categorize the caller&apos;s exact intent.
          </p>
        </div>

        {/* Category Pills Selector */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.625rem',
            marginBottom: '2rem',
          }}
        >
          {purposes.map((p, index) => {
            const isSelected = selectedIndex === index;
            const PillIcon = p.icon;
            return (
              <button
                key={p.category}
                type="button"
                onClick={() => setSelectedIndex(index)}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.5rem 1rem',
                  borderRadius: '999px',
                  border: '1px solid',
                  borderColor: isSelected ? p.color : '#e2e8f0',
                  backgroundColor: isSelected ? p.bg : '#ffffff',
                  color: isSelected ? p.color : '#475569',
                  fontWeight: 600,
                  fontSize: '0.875rem',
                  cursor: 'pointer',
                  transition: 'all 0.15s ease',
                  boxShadow: isSelected ? 'var(--shadow-sm)' : 'none',
                }}
              >
                <PillIcon size={14} />
                <span>{p.category}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Purpose Interactive Display */}
        <div
          style={{
            backgroundColor: '#f8fafc',
            border: '1px solid #e2e8f0',
            borderRadius: '20px',
            padding: '2rem',
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '2rem',
          }}
          className="purpose-demo-card"
        >
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', marginBottom: '1rem' }}>
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '10px',
                    backgroundColor: current.bg,
                    color: current.color,
                    border: `1px solid ${current.borderColor}`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <IconComponent size={18} />
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', fontWeight: 600, color: '#64748b', textTransform: 'uppercase' }}>
                    CLASSIFIED PURPOSE
                  </div>
                  <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0f172a' }}>
                    {current.badge}
                  </div>
                </div>
              </div>

              <p style={{ fontSize: '0.9375rem', color: '#475569', lineHeight: 1.55, marginBottom: '1.25rem' }}>
                {current.explanation}
              </p>
            </div>

            <div
              style={{
                backgroundColor: '#ffffff',
                border: '1px solid #e2e8f0',
                borderRadius: '10px',
                padding: '0.75rem 1rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '0.8125rem',
                color: '#64748b',
              }}
            >
              <CheckCircle2 size={16} color="#059669" />
              <span>Best-effort classification based on Indian conversational patterns and context.</span>
            </div>
          </div>

          {/* Transcript Snippet */}
          <div
            style={{
              backgroundColor: '#ffffff',
              border: '1px solid #e2e8f0',
              borderRadius: '16px',
              padding: '1.5rem',
              boxShadow: 'var(--shadow-sm)',
            }}
          >
            <div
              style={{
                fontSize: '0.6875rem',
                fontWeight: 700,
                letterSpacing: '0.06em',
                color: '#64748b',
                textTransform: 'uppercase',
                marginBottom: '1rem',
              }}
            >
              Live Conversation Snippet
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div>
                <div
                  style={{
                    fontSize: '0.6875rem',
                    fontWeight: 700,
                    color: '#64748b',
                    marginBottom: '0.25rem',
                    fontFamily: 'var(--font-mono)',
                  }}
                >
                  CALLER
                </div>
                <div
                  style={{
                    backgroundColor: '#f8fafc',
                    border: '1px solid #e2e8f0',
                    padding: '0.75rem 1rem',
                    borderRadius: '10px',
                    fontSize: '0.875rem',
                    color: '#1e293b',
                    lineHeight: 1.5,
                  }}
                >
                  &ldquo;{current.callerSnippet}&rdquo;
                </div>
              </div>

              <div>
                <div
                  style={{
                    fontSize: '0.6875rem',
                    fontWeight: 700,
                    color: '#1d4ed8',
                    marginBottom: '0.25rem',
                    fontFamily: 'var(--font-mono)',
                  }}
                >
                  VOISAGE ASSISTANT
                </div>
                <div
                  style={{
                    backgroundColor: '#eff6ff',
                    border: '1px solid #bfdbfe',
                    padding: '0.75rem 1rem',
                    borderRadius: '10px',
                    fontSize: '0.875rem',
                    color: '#1e3a8a',
                    lineHeight: 1.5,
                  }}
                >
                  &ldquo;{current.aiSnippet}&rdquo;
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (min-width: 900px) {
          :global(.purpose-demo-card) {
            grid-template-columns: 1fr 1.25fr !important;
          }
        }
      `}</style>
    </section>
  );
}
