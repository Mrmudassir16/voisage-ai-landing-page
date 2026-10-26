'use client';

import React, { useState } from 'react';
import { ShieldCheck, ToggleLeft, ToggleRight, Trash2, Check } from 'lucide-react';

export default function PrivacyControlSection() {
  const [aiAnswering, setAiAnswering] = useState(true);
  const [unsavedOnly, setUnsavedOnly] = useState(true);
  const [recordAudio, setRecordAudio] = useState(false);
  const [callerMemory, setCallerMemory] = useState(true);
  const [clearedNotice, setClearedNotice] = useState(false);

  const handleClear = () => {
    setClearedNotice(true);
    setTimeout(() => setClearedNotice(false), 2000);
  };

  return (
    <section
      id="privacy"
      style={{
        paddingTop: '5.5rem',
        paddingBottom: '5.5rem',
        backgroundColor: '#ffffff',
        borderBottom: '1px solid #e2e8f0',
      }}
    >
      <div className="site-container">
        {/* Editorial Heading */}
        <div style={{ maxWidth: '780px', marginBottom: '2.5rem' }}>
          <h2
            style={{
              fontSize: 'clamp(2rem, 3.5vw, 3rem)',
              fontWeight: 800,
              color: '#0f172a',
              lineHeight: 1.15,
              letterSpacing: '-0.03em',
              marginBottom: '0.75rem',
            }}
          >
            Your calls. Your control.
          </h2>
          <p style={{ fontSize: '1.0625rem', color: '#475569', lineHeight: 1.6 }}>
            Every interaction happens according to simple rules you set.
            You choose when the assistant answers, which callers qualify, and when to wipe your history.
          </p>
        </div>

        {/* Clean 2-column layout */}
        <div className="privacy-clean-grid">
          {/* Left Column: Direct Settings Panel */}
          <div
            style={{
              backgroundColor: '#f8fafc',
              borderRadius: '20px',
              border: '1px solid #e2e8f0',
              padding: '1.75rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
            }}
          >
            {/* Setting 1 */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.75rem 0', borderBottom: '1px solid #e2e8f0' }}>
              <div>
                <div style={{ fontSize: '0.9375rem', fontWeight: 700, color: '#0f172a' }}>AI Call Answering</div>
                <div style={{ fontSize: '0.8125rem', color: '#64748b' }}>When on, VoiSage answers eligible calls automatically.</div>
              </div>
              <button
                type="button"
                onClick={() => setAiAnswering(!aiAnswering)}
                style={{ background: 'none', border: 'none', cursor: 'pointer', color: aiAnswering ? '#1d4ed8' : '#94a3b8' }}
              >
                {aiAnswering ? <ToggleRight size={34} /> : <ToggleLeft size={34} />}
              </button>
            </div>

            {/* Setting 2 */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.75rem 0', borderBottom: '1px solid #e2e8f0' }}>
              <div>
                <div style={{ fontSize: '0.9375rem', fontWeight: 700, color: '#0f172a' }}>Only Unsaved Numbers</div>
                <div style={{ fontSize: '0.8125rem', color: '#64748b' }}>Saved contacts (family, friends, coworkers) always ring you directly.</div>
              </div>
              <button
                type="button"
                onClick={() => setUnsavedOnly(!unsavedOnly)}
                style={{ background: 'none', border: 'none', cursor: 'pointer', color: unsavedOnly ? '#1d4ed8' : '#94a3b8' }}
              >
                {unsavedOnly ? <ToggleRight size={34} /> : <ToggleLeft size={34} />}
              </button>
            </div>

            {/* Setting 3 */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.75rem 0', borderBottom: '1px solid #e2e8f0' }}>
              <div>
                <div style={{ fontSize: '0.9375rem', fontWeight: 700, color: '#0f172a' }}>Call Audio Recording</div>
                <div style={{ fontSize: '0.8125rem', color: '#64748b' }}>Off by default. When enabled, records only where legally permissible.</div>
              </div>
              <button
                type="button"
                onClick={() => setRecordAudio(!recordAudio)}
                style={{ background: 'none', border: 'none', cursor: 'pointer', color: recordAudio ? '#1d4ed8' : '#94a3b8' }}
              >
                {recordAudio ? <ToggleRight size={34} /> : <ToggleLeft size={34} />}
              </button>
            </div>

            {/* Setting 4 */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.75rem 0' }}>
              <div>
                <div style={{ fontSize: '0.9375rem', fontWeight: 700, color: '#0f172a' }}>Caller Memory</div>
                <div style={{ fontSize: '0.8125rem', color: '#64748b' }}>Remembers recent courier or clinic names to avoid repeating questions.</div>
              </div>
              <button
                type="button"
                onClick={() => setCallerMemory(!callerMemory)}
                style={{ background: 'none', border: 'none', cursor: 'pointer', color: callerMemory ? '#1d4ed8' : '#94a3b8' }}
              >
                {callerMemory ? <ToggleRight size={34} /> : <ToggleLeft size={34} />}
              </button>
            </div>

            {/* Purge button */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '0.5rem', borderTop: '1px solid #e2e8f0' }}>
              <button
                type="button"
                onClick={handleClear}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  backgroundColor: '#fee2e2',
                  border: '1px solid #fecaca',
                  borderRadius: '6px',
                  padding: '0.4rem 0.8rem',
                  color: '#dc2626',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                }}
              >
                <Trash2 size={13} />
                <span>Delete Call History & Memory</span>
              </button>

              {clearedNotice && (
                <span style={{ fontSize: '0.75rem', color: '#059669', fontWeight: 600 }}>
                  ✓ Wiped successfully
                </span>
              )}
            </div>
          </div>

          {/* Right Column: Consumer Trust Promises */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0f172a', marginBottom: '1rem', letterSpacing: '-0.02em' }}>
              Clear boundaries from day one.
            </h3>
            <p style={{ fontSize: '1rem', color: '#475569', lineHeight: 1.6, marginBottom: '1.5rem' }}>
              We don&apos;t make vague &ldquo;100% private&rdquo; claims. We build transparent product guardrails:
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                <Check size={16} color="#059669" style={{ flexShrink: 0, marginTop: '3px' }} />
                <span style={{ fontSize: '0.875rem', color: '#1e293b' }}>
                  <strong>Explicit AI introduction:</strong> Callers always know they are speaking with an assistant.
                </span>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                <Check size={16} color="#059669" style={{ flexShrink: 0, marginTop: '3px' }} />
                <span style={{ fontSize: '0.875rem', color: '#1e293b' }}>
                  <strong>Your data stays yours:</strong> We do not sell conversational data or transcripts to advertisers.
                </span>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                <Check size={16} color="#059669" style={{ flexShrink: 0, marginTop: '3px' }} />
                <span style={{ fontSize: '0.875rem', color: '#1e293b' }}>
                  <strong>Respects your phone settings:</strong> Observes Android Do Not Disturb and notification profiles.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .privacy-clean-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
        }

        @media (min-width: 900px) {
          .privacy-clean-grid {
            grid-template-columns: 1.15fr 0.85fr;
            gap: 3rem;
          }
        }
      `}</style>
    </section>
  );
}
