'use client';

import React, { useState } from 'react';
import {
  FileText,
  Play,
  Pause,
  Copy,
  Check,
  Share2,
  Clock,
  PhoneIncoming,
  CheckCircle2,
  AlertCircle,
  Volume2
} from 'lucide-react';

export default function PostCallSummarySection() {
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'summary' | 'transcript'>('summary');

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      style={{
        paddingTop: '6.5rem',
        paddingBottom: '6.5rem',
        backgroundColor: '#f8fafc',
        borderBottom: '1px solid #e2e8f0',
      }}
    >
      <div className="site-container">
        {/* Header */}
        <div style={{ maxWidth: '720px', marginBottom: '3.5rem' }}>
          <div className="editorial-tag">
            <FileText size={14} />
            <span>Post-Call Intelligence</span>
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
            After the call: structured intelligence, not guessing.
          </h2>

          <p style={{ fontSize: '1.0625rem', color: '#475569', lineHeight: 1.6 }}>
            The instant a call ends, VoiSage synthesizes the dialogue into three key facts:
            who called, why they called, and what action (if any) you need to take.
          </p>
        </div>

        {/* Product UI Mockup */}
        <div className="postcall-layout">
          {/* Main Card */}
          <div
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '24px',
              border: '1px solid #e2e8f0',
              padding: '2rem',
              boxShadow: 'var(--shadow-xl)',
            }}
          >
            {/* Call Metadata Banner */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '1rem',
                paddingBottom: '1.25rem',
                borderBottom: '1px solid #f1f5f9',
                marginBottom: '1.5rem',
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                  <span
                    style={{
                      fontSize: '0.6875rem',
                      fontWeight: 700,
                      color: '#059669',
                      backgroundColor: '#ecfdf5',
                      padding: '0.2rem 0.5rem',
                      borderRadius: '4px',
                      textTransform: 'uppercase',
                    }}
                  >
                    CALL COMPLETED
                  </span>
                  <span style={{ fontSize: '0.8125rem', color: '#64748b' }}>
                    Today at 10:43 AM • SIM 1 Jio
                  </span>
                </div>
                <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0f172a' }}>
                  BlueDart Courier Services
                </div>
                <div style={{ fontSize: '0.8125rem', color: '#64748b', fontFamily: 'var(--font-mono)' }}>
                  +91 98402 11928 • Unsaved contact
                </div>
              </div>

              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: '0.75rem', color: '#64748b', marginBottom: '2px' }}>Call Duration</div>
                <div style={{ fontSize: '1.125rem', fontWeight: 700, color: '#0f172a', fontFamily: 'var(--font-mono)' }}>
                  01:24
                </div>
              </div>
            </div>

            {/* Tab switchers: Summary vs Full Transcript */}
            <div
              style={{
                display: 'flex',
                gap: '0.5rem',
                borderBottom: '1px solid #e2e8f0',
                marginBottom: '1.5rem',
              }}
            >
              <button
                type="button"
                onClick={() => setActiveTab('summary')}
                style={{
                  padding: '0.5rem 1rem',
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  borderBottom: activeTab === 'summary' ? '2px solid #1d4ed8' : '2px solid transparent',
                  color: activeTab === 'summary' ? '#1d4ed8' : '#64748b',
                  background: 'none',
                  borderTop: 'none',
                  borderLeft: 'none',
                  borderRight: 'none',
                  cursor: 'pointer',
                  marginBottom: '-1px',
                }}
              >
                Executive Summary
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('transcript')}
                style={{
                  padding: '0.5rem 1rem',
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  borderBottom: activeTab === 'transcript' ? '2px solid #1d4ed8' : '2px solid transparent',
                  color: activeTab === 'transcript' ? '#1d4ed8' : '#64748b',
                  background: 'none',
                  borderTop: 'none',
                  borderLeft: 'none',
                  borderRight: 'none',
                  cursor: 'pointer',
                  marginBottom: '-1px',
                }}
              >
                Full Transcript (3 turns)
              </button>
            </div>

            {/* Tab Content: Summary */}
            {activeTab === 'summary' ? (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {/* Purpose Pill */}
                <div
                  style={{
                    backgroundColor: '#eff6ff',
                    border: '1px solid #bfdbfe',
                    borderRadius: '12px',
                    padding: '0.875rem 1rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <span style={{ fontSize: '0.8125rem', fontWeight: 600, color: '#1e40af' }}>
                    DETECTED PURPOSE
                  </span>
                  <span
                    style={{
                      fontSize: '0.8125rem',
                      fontWeight: 700,
                      color: '#1d4ed8',
                      backgroundColor: '#ffffff',
                      padding: '0.2rem 0.625rem',
                      borderRadius: '999px',
                    }}
                  >
                    Package Delivery • Tracking #BD-9041
                  </span>
                </div>

                {/* Structured Key Details */}
                <div
                  style={{
                    backgroundColor: '#f8fafc',
                    border: '1px solid #e2e8f0',
                    borderRadius: '12px',
                    padding: '1rem',
                  }}
                >
                  <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#475569', textTransform: 'uppercase', marginBottom: '0.35rem' }}>
                    SUMMARY
                  </div>
                  <p style={{ fontSize: '0.9375rem', color: '#1e293b', lineHeight: 1.5 }}>
                    Courier agent <strong>Suresh (BlueDart)</strong> is currently at building entrance with an Amazon parcel for Flat 402.
                    The package requires an OTP verification for handover.
                  </p>
                </div>

                {/* Follow-up Action */}
                <div
                  style={{
                    backgroundColor: '#fffbeb',
                    border: '1px solid #fde68a',
                    borderRadius: '12px',
                    padding: '1rem',
                  }}
                >
                  <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#b45309', textTransform: 'uppercase', marginBottom: '0.35rem' }}>
                    REQUESTED FOLLOW-UP
                  </div>
                  <p style={{ fontSize: '0.9375rem', color: '#78350f', lineHeight: 1.5, fontWeight: 500 }}>
                    Please provide the 4-digit OTP or call back within 10 minutes to authorize delivery with security guard.
                  </p>
                </div>

                {/* Audio Recording Player Simulation */}
                <div
                  style={{
                    backgroundColor: '#f1f5f9',
                    borderRadius: '12px',
                    padding: '0.875rem 1rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '1rem',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <button
                      type="button"
                      onClick={() => setIsPlayingAudio(!isPlayingAudio)}
                      style={{
                        width: '36px',
                        height: '36px',
                        borderRadius: '50%',
                        backgroundColor: '#0f172a',
                        color: '#ffffff',
                        border: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                      }}
                    >
                      {isPlayingAudio ? <Pause size={16} /> : <Play size={16} style={{ marginLeft: '2px' }} />}
                    </button>

                    <div>
                      <div style={{ fontSize: '0.8125rem', fontWeight: 700, color: '#0f172a' }}>
                        {isPlayingAudio ? 'Playing Call Audio (0:14 / 1:24)' : 'Play Call Recording'}
                      </div>
                      <div style={{ fontSize: '0.6875rem', color: '#64748b' }}>
                        Stored locally on device • Encrypted
                      </div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <button
                      type="button"
                      onClick={handleCopy}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.35rem',
                        backgroundColor: '#ffffff',
                        border: '1px solid #cbd5e1',
                        borderRadius: '6px',
                        padding: '0.4rem 0.75rem',
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        color: '#475569',
                        cursor: 'pointer',
                      }}
                    >
                      {copied ? <Check size={14} color="#059669" /> : <Copy size={14} />}
                      <span>{copied ? 'Copied' : 'Copy Summary'}</span>
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              /* Transcript Tab */
              <div
                style={{
                  backgroundColor: '#f8fafc',
                  border: '1px solid #e2e8f0',
                  borderRadius: '12px',
                  padding: '1.25rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                  fontSize: '0.875rem',
                  lineHeight: 1.5,
                }}
              >
                <div>
                  <strong style={{ color: '#0f172a' }}>VoiSage: </strong>
                  <span style={{ color: '#475569' }}>
                    &ldquo;Hello, I&apos;m the AI assistant for Rahul. May I ask who is calling and what this is regarding?&rdquo;
                  </span>
                </div>
                <div>
                  <strong style={{ color: '#0f172a' }}>Caller (Suresh): </strong>
                  <span style={{ color: '#475569' }}>
                    &ldquo;Hi, Suresh here from BlueDart with Amazon order for Flat 402. I&apos;m outside gate.&rdquo;
                  </span>
                </div>
                <div>
                  <strong style={{ color: '#0f172a' }}>VoiSage: </strong>
                  <span style={{ color: '#475569' }}>
                    &ldquo;Understood, Suresh. Does this require OTP, or can it be left with society security?&rdquo;
                  </span>
                </div>
                <div>
                  <strong style={{ color: '#0f172a' }}>Caller (Suresh): </strong>
                  <span style={{ color: '#475569' }}>
                    &ldquo;Requires OTP. Let him know to send OTP or call back in 10 minutes.&rdquo;
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Right Explanation Column */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <h3 style={{ fontSize: '1.65rem', fontWeight: 800, color: '#0f172a', marginBottom: '1rem', letterSpacing: '-0.02em' }}>
              Zero effort. Full clarity.
            </h3>
            <p style={{ fontSize: '1rem', color: '#475569', lineHeight: 1.6, marginBottom: '1.5rem' }}>
              You don&apos;t have to decipher voicemails or wonder if the delivery guy left the package.
              Everything is condensed into a high-utility card that fits cleanly into your Android notification shade.
            </p>

            <div
              style={{
                backgroundColor: '#ffffff',
                border: '1px solid #e2e8f0',
                borderRadius: '16px',
                padding: '1.25rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.875rem',
                marginBottom: '1.5rem',
              }}
            >
              <div style={{ fontSize: '0.8125rem', fontWeight: 700, color: '#0f172a' }}>
                Summary Standards
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8125rem', color: '#475569' }}>
                <Check size={14} color="#059669" />
                <span>If summarization fails, marks &quot;Unavailable&quot; instead of fabricating details.</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8125rem', color: '#475569' }}>
                <Check size={14} color="#059669" />
                <span>Call recordings depend on technical permission and your explicit toggle.</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8125rem', color: '#475569' }}>
                <Check size={14} color="#059669" />
                <span>Single tap to copy summary or forward via WhatsApp.</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .postcall-layout {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2.5rem;
        }

        @media (min-width: 960px) {
          .postcall-layout {
            grid-template-columns: 1.25fr 0.75fr;
            gap: 3.5rem;
          }
        }
      `}</style>
    </section>
  );
}
