'use client';

import React, { useState } from 'react';
import { Mic, VolumeX, MessageSquare, RefreshCw, Zap, ArrowRight, Play, Pause } from 'lucide-react';

export default function NaturalConversationSection() {
  const [interrupted, setInterrupted] = useState(false);

  return (
    <section
      style={{
        paddingTop: '6rem',
        paddingBottom: '6rem',
        backgroundColor: '#0b111e',
        color: '#ffffff',
        borderBottom: '1px solid #1e293b',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="site-container">
        {/* Header */}
        <div style={{ maxWidth: '720px', marginBottom: '3.5rem' }}>
          <div className="editorial-tag dark">
            <Zap size={14} />
            <span>Turn-Taking & Barge-In</span>
          </div>

          <h2
            style={{
              fontSize: 'clamp(2rem, 3.5vw, 3rem)',
              fontWeight: 800,
              color: '#ffffff',
              lineHeight: 1.15,
              letterSpacing: '-0.03em',
              marginBottom: '1rem',
            }}
          >
            Real conversation pauses when you speak.
          </h2>

          <p style={{ fontSize: '1.0625rem', color: '#94a3b8', lineHeight: 1.6 }}>
            Robotic voice systems keep droning on even when callers try to cut in.
            VoiSage supports <strong>barge-in</strong>: if the caller interrupts, the AI immediately stops
            speaking, resets its turn, listens to the new information, and adapts dynamically.
          </p>
        </div>

        {/* Interactive Barge-in Demo Arena */}
        <div
          style={{
            backgroundColor: '#111827',
            border: '1px solid #1f293d',
            borderRadius: '24px',
            padding: '2.5rem 2rem',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.4)',
          }}
        >
          {/* Top Control Bar */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '1rem',
              paddingBottom: '1.5rem',
              borderBottom: '1px solid #1f2937',
              marginBottom: '2rem',
            }}
          >
            <div>
              <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#60a5fa', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                INTERRUPTION HANDLER
              </div>
              <div style={{ fontSize: '1.125rem', fontWeight: 700, color: '#f8fafc' }}>
                {interrupted ? 'State: Caller Barge-in Handled' : 'State: AI Speaking Turn'}
              </div>
            </div>

            <button
              type="button"
              onClick={() => setInterrupted(!interrupted)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                backgroundColor: interrupted ? '#2563eb' : '#dc2626',
                color: '#ffffff',
                border: 'none',
                borderRadius: '8px',
                padding: '0.625rem 1.25rem',
                fontSize: '0.875rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
            >
              <RefreshCw size={15} />
              <span>{interrupted ? 'Reset Simulation' : 'Simulate Caller Interruption'}</span>
            </button>
          </div>

          {/* Turn Sequence Timeline */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {/* Turn 1: AI Starts speaking */}
            <div
              style={{
                display: 'flex',
                gap: '1rem',
                alignItems: 'flex-start',
                opacity: interrupted ? 0.6 : 1,
                transition: 'opacity 0.2s ease',
              }}
            >
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  backgroundColor: '#1e3a8a',
                  color: '#93c5fd',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  fontSize: '0.75rem',
                  fontWeight: 700,
                }}
              >
                AI
              </div>

              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.35rem' }}>
                  <span style={{ fontSize: '0.8125rem', fontWeight: 700, color: '#93c5fd' }}>
                    1. AI Speaking Turn
                  </span>
                  {!interrupted && (
                    <span
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.35rem',
                        fontSize: '0.6875rem',
                        color: '#34d399',
                        backgroundColor: 'rgba(16, 185, 129, 0.15)',
                        padding: '0.1rem 0.4rem',
                        borderRadius: '4px',
                      }}
                    >
                      <span className="live-indicator-dot" />
                      Synthesizing audio...
                    </span>
                  )}
                </div>

                <div
                  style={{
                    backgroundColor: '#1e293b',
                    border: '1px solid #334155',
                    borderRadius: '12px',
                    padding: '0.875rem 1rem',
                    fontSize: '0.9375rem',
                    color: '#e2e8f0',
                    lineHeight: 1.5,
                  }}
                >
                  &ldquo;May I know if you would like to leave a detailed message or if there is a specific date and time—&rdquo;
                  {interrupted && (
                    <span
                      style={{
                        color: '#f87171',
                        fontWeight: 700,
                        backgroundColor: 'rgba(239, 68, 68, 0.2)',
                        padding: '0.1rem 0.35rem',
                        borderRadius: '4px',
                        marginLeft: '0.35rem',
                      }}
                    >
                      [SPEECH MUTED BY BARGE-IN]
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Turn 2: Caller Interrupts */}
            <div
              style={{
                display: 'flex',
                gap: '1rem',
                alignItems: 'flex-start',
                transition: 'all 0.3s ease',
              }}
            >
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  backgroundColor: interrupted ? '#991b1b' : '#334155',
                  color: interrupted ? '#fca5a5' : '#94a3b8',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  transition: 'background-color 0.2s ease',
                }}
              >
                YOU
              </div>

              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.35rem' }}>
                  <span style={{ fontSize: '0.8125rem', fontWeight: 700, color: interrupted ? '#f87171' : '#94a3b8' }}>
                    2. Caller Interrupts Mid-Sentence
                  </span>
                  {interrupted && (
                    <span
                      style={{
                        fontSize: '0.6875rem',
                        fontWeight: 700,
                        color: '#f87171',
                        backgroundColor: 'rgba(239, 68, 68, 0.2)',
                        padding: '0.1rem 0.4rem',
                        borderRadius: '4px',
                      }}
                    >
                      VAD Triggered: AI stopped instantly
                    </span>
                  )}
                </div>

                <div
                  style={{
                    backgroundColor: interrupted ? 'rgba(153, 27, 27, 0.25)' : '#1e293b',
                    border: '1px solid',
                    borderColor: interrupted ? '#991b1b' : '#334155',
                    borderRadius: '12px',
                    padding: '0.875rem 1rem',
                    fontSize: '0.9375rem',
                    color: '#f8fafc',
                    lineHeight: 1.5,
                  }}
                >
                  &ldquo;Actually, I&apos;m right downstairs at the security gate with the parcel right now!&rdquo;
                </div>
              </div>
            </div>

            {/* Turn 3: AI Adapts to new critical info */}
            <div
              style={{
                display: 'flex',
                gap: '1rem',
                alignItems: 'flex-start',
                opacity: interrupted ? 1 : 0.4,
                transition: 'opacity 0.3s ease',
              }}
            >
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  backgroundColor: '#1e3a8a',
                  color: '#93c5fd',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  fontSize: '0.75rem',
                  fontWeight: 700,
                }}
              >
                AI
              </div>

              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.35rem' }}>
                  <span style={{ fontSize: '0.8125rem', fontWeight: 700, color: '#60a5fa' }}>
                    3. AI Contextual Pivot
                  </span>
                  {interrupted && (
                    <span
                      style={{
                        fontSize: '0.6875rem',
                        fontWeight: 700,
                        color: '#60a5fa',
                        backgroundColor: 'rgba(37, 99, 235, 0.2)',
                        padding: '0.1rem 0.4rem',
                        borderRadius: '4px',
                      }}
                    >
                      Urgency Escaped: Delivery at Gate
                    </span>
                  )}
                </div>

                <div
                  style={{
                    backgroundColor: '#1e293b',
                    border: '1px solid #1e3a8a',
                    borderRadius: '12px',
                    padding: '0.875rem 1rem',
                    fontSize: '0.9375rem',
                    color: '#93c5fd',
                    lineHeight: 1.5,
                  }}
                >
                  &ldquo;Understood. Since you are downstairs at the gate, I will immediately alert the user with high priority so they can take over or coordinate entry.&rdquo;
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
