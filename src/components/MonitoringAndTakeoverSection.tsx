'use client';

import React, { useState } from 'react';
import { Eye, PhoneForwarded, Radio, Volume2, Check, AlertCircle, RefreshCw } from 'lucide-react';

export default function MonitoringAndTakeoverSection() {
  const [handoffState, setHandoffState] = useState<'monitoring' | 'requested' | 'connected'>('monitoring');

  return (
    <section
      id="takeover"
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
        {/* Editorial Heading */}
        <div style={{ maxWidth: '780px', marginBottom: '3rem' }}>
          <h2
            style={{
              fontSize: 'clamp(2.1rem, 3.8vw, 3.25rem)',
              fontWeight: 800,
              color: '#ffffff',
              lineHeight: 1.15,
              letterSpacing: '-0.03em',
              marginBottom: '1rem',
            }}
          >
            Stay in the loop without answering the call.
          </h2>
          <p style={{ fontSize: '1.0625rem', color: '#94a3b8', lineHeight: 1.6 }}>
            Watch speech stream across your screen in near real time. You see who is calling, why they are calling,
            and whether it matters—ready to step in the instant you want to talk.
          </p>
        </div>

        {/* Cinematic State Selector Tabs */}
        <div
          style={{
            display: 'flex',
            gap: '0.5rem',
            overflowX: 'auto',
            paddingBottom: '0.75rem',
            marginBottom: '2rem',
          }}
        >
          <button
            type="button"
            onClick={() => setHandoffState('monitoring')}
            style={{
              padding: '0.5rem 1rem',
              borderRadius: '8px',
              border: '1px solid',
              borderColor: handoffState === 'monitoring' ? '#2563eb' : '#334155',
              backgroundColor: handoffState === 'monitoring' ? '#1d4ed8' : 'rgba(255, 255, 255, 0.05)',
              color: '#ffffff',
              fontSize: '0.8125rem',
              fontWeight: 600,
              cursor: 'pointer',
              whiteSpace: 'nowrap',
              transition: 'all 0.15s ease',
            }}
          >
            1. Watching Live Call
          </button>

          <button
            type="button"
            onClick={() => setHandoffState('requested')}
            style={{
              padding: '0.5rem 1rem',
              borderRadius: '8px',
              border: '1px solid',
              borderColor: handoffState === 'requested' ? '#ea580c' : '#334155',
              backgroundColor: handoffState === 'requested' ? '#ea580c' : 'rgba(255, 255, 255, 0.05)',
              color: '#ffffff',
              fontSize: '0.8125rem',
              fontWeight: 600,
              cursor: 'pointer',
              whiteSpace: 'nowrap',
              transition: 'all 0.15s ease',
            }}
          >
            2. Caller Requests You
          </button>

          <button
            type="button"
            onClick={() => setHandoffState('connected')}
            style={{
              padding: '0.5rem 1rem',
              borderRadius: '8px',
              border: '1px solid',
              borderColor: handoffState === 'connected' ? '#059669' : '#334155',
              backgroundColor: handoffState === 'connected' ? '#059669' : 'rgba(255, 255, 255, 0.05)',
              color: '#ffffff',
              fontSize: '0.8125rem',
              fontWeight: 600,
              cursor: 'pointer',
              whiteSpace: 'nowrap',
              transition: 'all 0.15s ease',
            }}
          >
            3. You Take Over (Connected)
          </button>
        </div>

        {/* Central Cinematic Product Interface */}
        <div
          style={{
            backgroundColor: '#111827',
            borderRadius: '24px',
            border: '1px solid #1f293d',
            padding: '2rem',
            boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.5)',
            marginBottom: '2rem',
          }}
        >
          {/* Top Status Bar */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '1rem',
              paddingBottom: '1.25rem',
              borderBottom: '1px solid #1f2937',
              marginBottom: '1.5rem',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
              <span className="live-indicator-dot" />
              <div>
                <div style={{ fontSize: '0.6875rem', fontWeight: 700, color: '#94a3b8', textTransform: 'uppercase' }}>
                  CALL IN PROGRESS • SIM 2 AIRTEL
                </div>
                <div style={{ fontSize: '1.125rem', fontWeight: 800, color: '#f8fafc' }}>
                  Care Clinic (Dr. Mehra)
                </div>
              </div>
            </div>

            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: '0.6875rem', fontWeight: 700, color: '#94a3b8', textTransform: 'uppercase' }}>
                STATUS
              </div>
              <div
                style={{
                  fontSize: '0.8125rem',
                  fontWeight: 700,
                  color:
                    handoffState === 'connected'
                      ? '#34d399'
                      : handoffState === 'requested'
                      ? '#fb923c'
                      : '#60a5fa',
                }}
              >
                {handoffState === 'connected'
                  ? 'Connected: You are speaking'
                  : handoffState === 'requested'
                  ? 'Caller requesting user'
                  : 'AI handling call quietly'}
              </div>
            </div>
          </div>

          {/* Live Streaming Dialogue Box */}
          <div
            style={{
              backgroundColor: '#0b111e',
              border: '1px solid #1e293b',
              borderRadius: '16px',
              padding: '1.5rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.25rem',
              marginBottom: '1.75rem',
            }}
          >
            {/* Turn 1 */}
            <div>
              <div style={{ fontSize: '0.6875rem', fontWeight: 700, color: '#94a3b8', fontFamily: 'var(--font-mono)', marginBottom: '0.25rem' }}>
                CALLER
              </div>
              <div style={{ fontSize: '0.9375rem', color: '#e2e8f0', lineHeight: 1.5 }}>
                &ldquo;Hello, this is Dr. Mehra&apos;s assistant from Care Clinic. I have an urgent update regarding Rahul&apos;s test report.&rdquo;
              </div>
            </div>

            {/* Turn 2 */}
            <div>
              <div style={{ fontSize: '0.6875rem', fontWeight: 700, color: '#60a5fa', fontFamily: 'var(--font-mono)', marginBottom: '0.25rem' }}>
                VOISAGE AI
              </div>
              <div style={{ fontSize: '0.9375rem', color: '#93c5fd', lineHeight: 1.5 }}>
                &ldquo;Thank you for calling. I am recording your update. Would you like to leave a note, or should I notify Rahul right now?&rdquo;
              </div>
            </div>

            {/* Turn 3 (Dynamic based on state) */}
            {handoffState !== 'monitoring' && (
              <div>
                <div style={{ fontSize: '0.6875rem', fontWeight: 700, color: '#fb923c', fontFamily: 'var(--font-mono)', marginBottom: '0.25rem' }}>
                  CALLER
                </div>
                <div style={{ fontSize: '0.9375rem', color: '#f8fafc', lineHeight: 1.5, fontWeight: 500 }}>
                  &ldquo;Please connect me to Rahul directly if possible. It is important to confirm fasting instructions for tomorrow.&rdquo;
                </div>
              </div>
            )}
          </div>

          {/* Action Callout Bar */}
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
            <div style={{ fontSize: '0.875rem', color: '#94a3b8' }}>
              {handoffState === 'connected' ? (
                <span style={{ color: '#34d399', fontWeight: 600 }}>
                  ✓ Live call handoff complete. AI audio synthesis exited.
                </span>
              ) : handoffState === 'requested' ? (
                <span style={{ color: '#fb923c', fontWeight: 600 }}>
                  ⚠️ Caller asked to speak directly. Tap to take over immediately.
                </span>
              ) : (
                <span>Streaming live transcript without audio ringing.</span>
              )}
            </div>

            <div>
              {handoffState === 'connected' ? (
                <button
                  type="button"
                  onClick={() => setHandoffState('monitoring')}
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    border: '1px solid #334155',
                    color: '#ffffff',
                    padding: '0.625rem 1.25rem',
                    borderRadius: '8px',
                    fontSize: '0.875rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                  }}
                >
                  Reset Demo
                </button>
              ) : (
                <button
                  type="button"
                  className="btn-takeover"
                  onClick={() => setHandoffState('connected')}
                  style={{ padding: '0.75rem 1.75rem', fontSize: '0.9375rem' }}
                >
                  <PhoneForwarded size={16} />
                  <span>Take Over Call Now</span>
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Technical Caveat */}
        <div style={{ fontSize: '0.8125rem', color: '#64748b', textAlign: 'center' }}>
          Take Over availability depends on device, carrier, and telephony support.
        </div>
      </div>
    </section>
  );
}
