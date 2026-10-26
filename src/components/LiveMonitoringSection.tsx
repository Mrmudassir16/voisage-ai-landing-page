'use client';

import React, { useState } from 'react';
import { Eye, ShieldCheck, PhoneForwarded, Radio, Sparkles, Check, ChevronRight } from 'lucide-react';

interface LiveMonitoringSectionProps {
  onOpenEarlyAccess: () => void;
}

export default function LiveMonitoringSection({ onOpenEarlyAccess }: LiveMonitoringSectionProps) {
  const [hasTakenOver, setHasTakenOver] = useState(false);

  return (
    <section
      id="live-monitoring"
      style={{
        paddingTop: '6.5rem',
        paddingBottom: '6.5rem',
        backgroundColor: '#ffffff',
        borderBottom: '1px solid #e2e8f0',
      }}
    >
      <div className="site-container">
        {/* Header */}
        <div style={{ maxWidth: '750px', marginBottom: '3.5rem' }}>
          <div className="editorial-tag">
            <Eye size={14} />
            <span>Silent Visibility</span>
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
            You can watch the entire call unfold.
          </h2>

          <p style={{ fontSize: '1.0625rem', color: '#475569', lineHeight: 1.6 }}>
            You do not have to pick up blind. While VoiSage speaks to the caller,
            words stream across your screen in real time. You see who it is, what they need,
            and whether it is worth your time—without ever unmuting or uttering a single syllable.
          </p>
        </div>

        {/* Live Monitoring Terminal / Card Layout */}
        <div className="monitoring-wrapper">
          {/* Main Simulated Monitor Console */}
          <div
            style={{
              backgroundColor: '#0b111e',
              borderRadius: '24px',
              border: '1px solid #1f293d',
              padding: '1.75rem',
              color: '#ffffff',
              boxShadow: 'var(--shadow-xl)',
            }}
          >
            {/* Top Bar */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingBottom: '1rem',
                borderBottom: '1px solid #1e293b',
                marginBottom: '1.25rem',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
                <span className="live-indicator-dot" />
                <span
                  style={{
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: '#34d399',
                  }}
                >
                  LIVE CALL IN PROGRESS
                </span>
              </div>

              <div
                style={{
                  fontSize: '0.75rem',
                  fontFamily: 'var(--font-mono)',
                  color: '#94a3b8',
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  padding: '0.2rem 0.5rem',
                  borderRadius: '4px',
                }}
              >
                00:48 ELAPSED
              </div>
            </div>

            {/* Caller Header Card */}
            <div
              style={{
                backgroundColor: '#162238',
                borderRadius: '12px',
                padding: '1rem',
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '1rem',
                marginBottom: '1.25rem',
                border: '1px solid #1e3a8a',
              }}
            >
              <div>
                <div style={{ fontSize: '0.6875rem', color: '#93c5fd', textTransform: 'uppercase', fontWeight: 600 }}>
                  CALLER (DETECTED)
                </div>
                <div style={{ fontSize: '1.125rem', fontWeight: 700, color: '#f8fafc' }}>
                  BlueDart Courier Services
                </div>
                <div style={{ fontSize: '0.8125rem', color: '#94a3b8' }}>
                  +91 98402 11928 • Mumbai Hub
                </div>
              </div>

              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: '0.6875rem', color: '#94a3b8', textTransform: 'uppercase', fontWeight: 600 }}>
                  PURPOSE CLASSIFIED
                </div>
                <span
                  style={{
                    display: 'inline-block',
                    backgroundColor: 'rgba(37, 99, 235, 0.25)',
                    color: '#60a5fa',
                    border: '1px solid rgba(96, 165, 250, 0.4)',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    padding: '0.2rem 0.625rem',
                    borderRadius: '999px',
                    marginTop: '2px',
                  }}
                >
                  Package Delivery • Urgent
                </span>
              </div>
            </div>

            {/* Live Streaming Transcript Window */}
            <div
              style={{
                backgroundColor: '#0f172a',
                border: '1px solid #1e293b',
                borderRadius: '14px',
                padding: '1.25rem',
                maxHeight: '260px',
                overflowY: 'auto',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                marginBottom: '1.5rem',
              }}
            >
              <div>
                <div
                  style={{
                    fontSize: '0.6875rem',
                    fontWeight: 700,
                    color: '#94a3b8',
                    fontFamily: 'var(--font-mono)',
                    marginBottom: '0.25rem',
                  }}
                >
                  CALLER [10:42:04]
                </div>
                <div style={{ fontSize: '0.875rem', color: '#e2e8f0', lineHeight: 1.5 }}>
                  &ldquo;Hello, I have a package from Amazon India for flat 402. I am outside the building gate.&rdquo;
                </div>
              </div>

              <div>
                <div
                  style={{
                    fontSize: '0.6875rem',
                    fontWeight: 700,
                    color: '#60a5fa',
                    fontFamily: 'var(--font-mono)',
                    marginBottom: '0.25rem',
                  }}
                >
                  VOISAGE AI [10:42:09]
                </div>
                <div style={{ fontSize: '0.875rem', color: '#93c5fd', lineHeight: 1.5 }}>
                  &ldquo;Thank you for letting me know. Does this package require an OTP or cash on delivery, or can it be left with building security?&rdquo;
                </div>
              </div>

              <div>
                <div
                  style={{
                    fontSize: '0.6875rem',
                    fontWeight: 700,
                    color: '#94a3b8',
                    fontFamily: 'var(--font-mono)',
                    marginBottom: '0.25rem',
                  }}
                >
                  CALLER [10:42:15]
                </div>
                <div style={{ fontSize: '0.875rem', color: '#f8fafc', lineHeight: 1.5, fontWeight: 500 }}>
                  &ldquo;It requires a 4-digit OTP. Can I talk to the customer directly to get it?&rdquo;
                </div>
              </div>
            </div>

            {/* Bottom Action Footer */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '1rem',
                paddingTop: '0.5rem',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Radio size={16} color="#34d399" />
                <span style={{ fontSize: '0.8125rem', color: '#cbd5e1' }}>
                  {hasTakenOver ? 'Connected: You are speaking to caller directly' : 'AI is holding the line quietly'}
                </span>
              </div>

              {!hasTakenOver ? (
                <button
                  type="button"
                  className="btn-takeover"
                  onClick={() => setHasTakenOver(true)}
                  style={{ padding: '0.75rem 1.5rem', fontSize: '0.9375rem' }}
                >
                  <PhoneForwarded size={16} />
                  <span>Take Over Call Now</span>
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => setHasTakenOver(false)}
                  style={{
                    backgroundColor: '#10b981',
                    color: '#ffffff',
                    border: 'none',
                    padding: '0.75rem 1.25rem',
                    borderRadius: '8px',
                    fontSize: '0.875rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                  }}
                >
                  ✓ Takeover Active (Tap to Reset)
                </button>
              )}
            </div>
          </div>

          {/* Side Narrative: Peace of mind */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <h3
              style={{
                fontSize: '1.75rem',
                fontWeight: 800,
                color: '#0f172a',
                lineHeight: 1.2,
                marginBottom: '1rem',
                letterSpacing: '-0.02em',
              }}
            >
              &ldquo;I can see what&apos;s happening without answering myself.&rdquo;
            </h3>

            <p style={{ fontSize: '1rem', color: '#475569', lineHeight: 1.6, marginBottom: '1.5rem' }}>
              Unlike traditional voicemail, which forces callers to leave a monologue that you might check hours later,
              VoiSage has an active, two-way dialogue while you silently watch the transcript appear.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                <div
                  style={{
                    width: '24px',
                    height: '24px',
                    borderRadius: '50%',
                    backgroundColor: '#eff6ff',
                    color: '#1d4ed8',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    marginTop: '2px',
                  }}
                >
                  <Check size={14} strokeWidth={3} />
                </div>
                <div>
                  <div style={{ fontSize: '0.9375rem', fontWeight: 700, color: '#0f172a' }}>
                    Zero Caller Anxiety
                  </div>
                  <div style={{ fontSize: '0.875rem', color: '#64748b' }}>
                    The caller does not get an abrupt rejection or silent dead-air ring.
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                <div
                  style={{
                    width: '24px',
                    height: '24px',
                    borderRadius: '50%',
                    backgroundColor: '#eff6ff',
                    color: '#1d4ed8',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    marginTop: '2px',
                  }}
                >
                  <Check size={14} strokeWidth={3} />
                </div>
                <div>
                  <div style={{ fontSize: '0.9375rem', fontWeight: 700, color: '#0f172a' }}>
                    Context Before Speaking
                  </div>
                  <div style={{ fontSize: '0.875rem', color: '#64748b' }}>
                    If you do choose to take over, you already know their name and purpose before saying hello.
                  </div>
                </div>
              </div>
            </div>

            <div>
              <button
                type="button"
                className="btn-secondary"
                onClick={onOpenEarlyAccess}
                style={{ padding: '0.75rem 1.25rem' }}
              >
                <span>Request Android Early Access</span>
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .monitoring-wrapper {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2.5rem;
        }

        @media (min-width: 980px) {
          .monitoring-wrapper {
            grid-template-columns: 1.2fr 0.8fr;
            gap: 3.5rem;
          }
        }
      `}</style>
    </section>
  );
}
