'use client';

import React, { useState, useEffect } from 'react';
import { AlignLeft, Check, Sparkles, RefreshCw, Volume2, Globe } from 'lucide-react';

export default function LiveTranscriptSection() {
  const fullTranscript = [
    { speaker: 'CALLER', time: '10:14:02', text: 'Hello, am I speaking with Mr. Rahul?' },
    { speaker: 'VOISAGE', time: '10:14:06', text: "Hello! I'm the AI assistant for Rahul. May I ask who is calling and what this is regarding?" },
    { speaker: 'CALLER', time: '10:14:12', text: "Yes, I am calling from Apollo Diagnostics. We have the routine health check-up report ready for collection or digital dispatch." },
    { speaker: 'VOISAGE', time: '10:14:19', text: 'Thank you for calling. Could you please confirm if the report can be shared directly via WhatsApp or email on this registered number?' },
    { speaker: 'CALLER', time: '10:14:26', text: 'Yes, we will send the encrypted PDF on WhatsApp within 15 minutes. No further action is required from Mr. Rahul.' },
    { speaker: 'VOISAGE', time: '10:14:32', text: 'Perfect. I will note that down and share this immediate update with Rahul. Have a great day.' }
  ];

  const [visibleTurns, setVisibleTurns] = useState(fullTranscript.slice(0, 3));
  const [isPlaying, setIsPlaying] = useState(false);

  const handleSimulateStreaming = () => {
    setVisibleTurns([fullTranscript[0]]);
    setIsPlaying(true);
    let index = 1;
    const interval = setInterval(() => {
      if (index < fullTranscript.length) {
        setVisibleTurns((prev) => [...prev, fullTranscript[index]]);
        index++;
      } else {
        clearInterval(interval);
        setIsPlaying(false);
      }
    }, 900);
  };

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
        <div style={{ maxWidth: '750px', marginBottom: '3.5rem' }}>
          <div className="editorial-tag">
            <AlignLeft size={14} />
            <span>Streaming Audio-to-Text</span>
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
            Speech turns into readable text in real time.
          </h2>

          <p style={{ fontSize: '1.0625rem', color: '#475569', lineHeight: 1.6 }}>
            VoiSage streams low-latency speech recognition built for Indian speech rhythms,
            local terminology, numbers, addresses, and multi-lingual accents.
          </p>
        </div>

        {/* Live Streaming Terminal Card */}
        <div className="transcript-layout">
          {/* Left Console */}
          <div
            style={{
              backgroundColor: '#0f172a',
              borderRadius: '20px',
              border: '1px solid #1e293b',
              padding: '1.75rem',
              color: '#ffffff',
              boxShadow: 'var(--shadow-xl)',
            }}
          >
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
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span className="live-indicator-dot" />
                <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#93c5fd', textTransform: 'uppercase' }}>
                  Apollo Diagnostics • SIM 1 Jio
                </span>
              </div>

              <button
                type="button"
                onClick={handleSimulateStreaming}
                disabled={isPlaying}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  color: '#ffffff',
                  padding: '0.35rem 0.75rem',
                  borderRadius: '6px',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  cursor: isPlaying ? 'not-allowed' : 'pointer',
                }}
              >
                <RefreshCw size={12} className={isPlaying ? 'soundwave-bar' : ''} />
                <span>{isPlaying ? 'Streaming Audio...' : 'Replay Streaming Demo'}</span>
              </button>
            </div>

            {/* Transcript Stream Box */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                minHeight: '280px',
              }}
            >
              {visibleTurns.map((turn, i) => {
                const isCaller = turn.speaker === 'CALLER';
                return (
                  <div
                    key={i}
                    style={{
                      display: 'flex',
                      gap: '0.75rem',
                      alignItems: 'flex-start',
                      animation: 'fadeInTurn 0.25s ease-out',
                    }}
                  >
                    <div
                      style={{
                        padding: '0.2rem 0.5rem',
                        borderRadius: '4px',
                        fontSize: '0.625rem',
                        fontWeight: 700,
                        fontFamily: 'var(--font-mono)',
                        backgroundColor: isCaller ? '#334155' : '#1d4ed8',
                        color: '#ffffff',
                        flexShrink: 0,
                        marginTop: '3px',
                      }}
                    >
                      {turn.speaker}
                    </div>

                    <div style={{ flex: 1 }}>
                      <div
                        style={{
                          fontSize: '0.6875rem',
                          color: '#64748b',
                          fontFamily: 'var(--font-mono)',
                          marginBottom: '2px',
                        }}
                      >
                        {turn.time}
                      </div>
                      <div
                        style={{
                          backgroundColor: isCaller ? 'rgba(30, 41, 59, 0.5)' : 'rgba(37, 99, 235, 0.12)',
                          border: '1px solid',
                          borderColor: isCaller ? '#334155' : 'rgba(37, 99, 235, 0.3)',
                          borderRadius: '10px',
                          padding: '0.75rem 1rem',
                          fontSize: '0.875rem',
                          color: isCaller ? '#f1f5f9' : '#bfdbfe',
                          lineHeight: 1.5,
                        }}
                      >
                        &ldquo;{turn.text}&rdquo;
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Editorial Features */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div
              style={{
                backgroundColor: '#f8fafc',
                border: '1px solid #e2e8f0',
                borderRadius: '16px',
                padding: '1.75rem',
                marginBottom: '1.5rem',
              }}
            >
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.75rem' }}>
                Engineered for Indian Speech Nuances
              </h3>
              <p style={{ fontSize: '0.9375rem', color: '#64748b', lineHeight: 1.55, marginBottom: '1.25rem' }}>
                Phone conversations in India frequently blend regional vocabulary, pincodes,
                flat numbers, and Hindi/Telugu loan words. VoiSage transcribes contextually.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8125rem', color: '#1e293b' }}>
                  <Check size={16} color="#2563eb" />
                  <span>Recognizes Indian pincodes, mobile digits, and flat addresses</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8125rem', color: '#1e293b' }}>
                  <Check size={16} color="#2563eb" />
                  <span>Filters background traffic noise and street honking</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8125rem', color: '#1e293b' }}>
                  <Check size={16} color="#2563eb" />
                  <span>Clearly marks partial or uncertain speech without hallucinating</span>
                </div>
              </div>
            </div>

            <div
              style={{
                padding: '1rem 1.25rem',
                backgroundColor: '#eff6ff',
                borderRadius: '12px',
                border: '1px solid #bfdbfe',
                fontSize: '0.8125rem',
                color: '#1e40af',
                lineHeight: 1.45,
              }}
            >
              <strong>Honest Note on Transcription:</strong> Heavy background audio, muffled network connections,
              or sudden language switching can occasionally affect accuracy. VoiSage flags low-confidence speech rather than fabricating details.
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .transcript-layout {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2.5rem;
        }

        @media (min-width: 960px) {
          .transcript-layout {
            grid-template-columns: 1.15fr 0.85fr;
            gap: 3rem;
          }
        }

        @keyframes fadeInTurn {
          from {
            opacity: 0;
            transform: translateY(4px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
