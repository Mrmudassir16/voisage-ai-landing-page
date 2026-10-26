'use client';

import React from 'react';
import { ShieldCheck, MessageSquare, AlertOctagon, CheckCircle2, UserX } from 'lucide-react';

export default function AiIntroSection() {
  return (
    <section
      id="experience"
      style={{
        paddingTop: '6rem',
        paddingBottom: '6rem',
        backgroundColor: '#f8fafc',
        borderBottom: '1px solid #e2e8f0',
      }}
    >
      <div className="site-container">
        <div className="ai-intro-grid">
          {/* Left Column: Product Story */}
          <div>
            <div className="editorial-tag">
              <ShieldCheck size={14} />
              <span>Ethical AI Architecture</span>
            </div>

            <h2
              style={{
                fontSize: 'clamp(2rem, 3.4vw, 3rem)',
                fontWeight: 800,
                color: '#0f172a',
                lineHeight: 1.15,
                letterSpacing: '-0.03em',
                marginBottom: '1.25rem',
              }}
            >
              It never pretends to be you.
            </h2>

            <p
              style={{
                fontSize: '1.0625rem',
                color: '#475569',
                lineHeight: 1.6,
                marginBottom: '1.5rem',
              }}
            >
              When VoiSage picks up an unknown call, the first thing it does is state with complete honesty:
              <strong> &ldquo;Hello, I&apos;m the AI assistant for the person you&apos;re calling.&rdquo;</strong>
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <div
                  style={{
                    width: '24px',
                    height: '24px',
                    borderRadius: '50%',
                    backgroundColor: '#ecfdf5',
                    color: '#059669',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    marginTop: '2px',
                  }}
                >
                  <CheckCircle2 size={15} />
                </div>
                <div>
                  <div style={{ fontSize: '0.9375rem', fontWeight: 700, color: '#0f172a' }}>
                    Transparent AI Disclosure
                  </div>
                  <div style={{ fontSize: '0.875rem', color: '#64748b' }}>
                    Callers immediately understand they are speaking with an assistant.
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <div
                  style={{
                    width: '24px',
                    height: '24px',
                    borderRadius: '50%',
                    backgroundColor: '#ecfdf5',
                    color: '#059669',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    marginTop: '2px',
                  }}
                >
                  <CheckCircle2 size={15} />
                </div>
                <div>
                  <div style={{ fontSize: '0.9375rem', fontWeight: 700, color: '#0f172a' }}>
                    No Deception or Voice Cloning
                  </div>
                  <div style={{ fontSize: '0.875rem', color: '#64748b' }}>
                    VoiSage does not copy your personal voice or deceive your callers.
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <div
                  style={{
                    width: '24px',
                    height: '24px',
                    borderRadius: '50%',
                    backgroundColor: '#ecfdf5',
                    color: '#059669',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    marginTop: '2px',
                  }}
                >
                  <CheckCircle2 size={15} />
                </div>
                <div>
                  <div style={{ fontSize: '0.9375rem', fontWeight: 700, color: '#0f172a' }}>
                    Polite Failure Recovery
                  </div>
                  <div style={{ fontSize: '0.875rem', color: '#64748b' }}>
                    If the caller&apos;s audio is muffled or noisy, VoiSage politely re-prompts without looping.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Comparison Card (Ethical Transparency vs Shady AI) */}
          <div
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '20px',
              border: '1px solid #e2e8f0',
              padding: '1.75rem',
              boxShadow: 'var(--shadow-md)',
            }}
          >
            <div
              style={{
                fontSize: '0.75rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                color: '#64748b',
                marginBottom: '1rem',
              }}
            >
              VoiSage Opening Dialogue Architecture
            </div>

            {/* Simulated Audio Exchange */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {/* Caller */}
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                <div
                  style={{
                    padding: '0.25rem 0.5rem',
                    backgroundColor: '#f1f5f9',
                    borderRadius: '6px',
                    fontSize: '0.6875rem',
                    fontWeight: 700,
                    color: '#475569',
                    fontFamily: 'var(--font-mono)',
                    flexShrink: 0,
                    marginTop: '3px',
                  }}
                >
                  CALLER
                </div>
                <div
                  style={{
                    backgroundColor: '#f8fafc',
                    border: '1px solid #e2e8f0',
                    borderRadius: '12px',
                    padding: '0.75rem 1rem',
                    fontSize: '0.9375rem',
                    color: '#1e293b',
                    flex: 1,
                  }}
                >
                  &ldquo;Hello? Is Rahul there?&rdquo;
                </div>
              </div>

              {/* VoiSage Response */}
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                <div
                  style={{
                    padding: '0.25rem 0.5rem',
                    backgroundColor: '#eff6ff',
                    borderRadius: '6px',
                    fontSize: '0.6875rem',
                    fontWeight: 700,
                    color: '#1d4ed8',
                    fontFamily: 'var(--font-mono)',
                    flexShrink: 0,
                    marginTop: '3px',
                  }}
                >
                  VOISAGE
                </div>
                <div
                  style={{
                    backgroundColor: '#eff6ff',
                    border: '1px solid #bfdbfe',
                    borderRadius: '12px',
                    padding: '0.875rem 1rem',
                    fontSize: '0.9375rem',
                    color: '#1e3a8a',
                    flex: 1,
                    lineHeight: 1.5,
                  }}
                >
                  &ldquo;Hi, I&apos;m the AI assistant for Rahul. May I ask who is calling and what this is regarding?&rdquo;
                </div>
              </div>

              {/* Caller Details */}
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                <div
                  style={{
                    padding: '0.25rem 0.5rem',
                    backgroundColor: '#f1f5f9',
                    borderRadius: '6px',
                    fontSize: '0.6875rem',
                    fontWeight: 700,
                    color: '#475569',
                    fontFamily: 'var(--font-mono)',
                    flexShrink: 0,
                    marginTop: '3px',
                  }}
                >
                  CALLER
                </div>
                <div
                  style={{
                    backgroundColor: '#f8fafc',
                    border: '1px solid #e2e8f0',
                    borderRadius: '12px',
                    padding: '0.75rem 1rem',
                    fontSize: '0.9375rem',
                    color: '#1e293b',
                    flex: 1,
                  }}
                >
                  &ldquo;Yes, this is Dr. Sen&apos;s clinic regarding the appointment reschedule.&rdquo;
                </div>
              </div>
            </div>

            {/* Bottom Status Tag */}
            <div
              style={{
                marginTop: '1.5rem',
                padding: '0.875rem 1rem',
                backgroundColor: '#f1f5f9',
                borderRadius: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                fontSize: '0.8125rem',
              }}
            >
              <span style={{ color: '#475569', fontWeight: 500 }}>
                Caller Identity captured:
              </span>
              <span style={{ fontWeight: 700, color: '#0f172a' }}>
                Dr. Sen&apos;s Clinic
              </span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .ai-intro-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2.5rem;
          align-items: center;
        }

        @media (min-width: 900px) {
          .ai-intro-grid {
            grid-template-columns: 1fr 1fr;
            gap: 3.5rem;
          }
        }
      `}</style>
    </section>
  );
}
