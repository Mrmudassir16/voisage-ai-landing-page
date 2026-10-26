'use client';

import React, { useState } from 'react';
import {
  ArrowRight,
  Phone,
  PhoneCall,
  Eye,
  PhoneForwarded,
  Volume2,
  ShieldCheck,
  Check,
  Sparkles,
  Smartphone,
  ChevronDown
} from 'lucide-react';

interface HeroSectionProps {
  onOpenEarlyAccess: () => void;
}

interface CallerScenario {
  id: string;
  name: string;
  number: string;
  sim: string;
  location: string;
  introText: string;
  purposeLabel: string;
  purposeTag: string;
  callerResponse: string;
}

export default function HeroSection({ onOpenEarlyAccess }: HeroSectionProps) {
  const scenarios: CallerScenario[] = [
    {
      id: 'delivery',
      name: 'Unsaved Number',
      number: '+91 98XXX 44821',
      sim: 'SIM 1 (Jio 5G)',
      location: 'Bandra, Mumbai',
      introText: "Hello, I'm the AI assistant for the person you're calling. May I ask who's calling and what this is regarding?",
      purposeLabel: 'Package Delivery',
      purposeTag: 'Delivery',
      callerResponse: "Hi, this is Suresh from BlueDart. I have an Amazon parcel arriving between 1 PM and 3 PM today."
    },
    {
      id: 'clinic',
      name: 'Unsaved Number',
      number: '+91 80491 22890',
      sim: 'SIM 2 (Airtel)',
      location: 'Bengaluru, KA',
      introText: "Hello, I'm the AI assistant for the person you're calling. May I ask who's calling and what this is regarding?",
      purposeLabel: 'Medical Appointment',
      purposeTag: 'Appointment',
      callerResponse: "Hello, calling from Care Clinic to confirm tomorrow morning's 10:30 AM dental consultation."
    },
    {
      id: 'recruiter',
      name: 'Unsaved Number',
      number: '+91 99104 77123',
      sim: 'SIM 1 (Jio 5G)',
      location: 'Gurugram, HR',
      introText: "Hello, I'm the AI assistant for the person you're calling. May I ask who's calling and what this is regarding?",
      purposeLabel: 'Career Discussion',
      purposeTag: 'Business',
      callerResponse: "Hi, this is Ananya from TalentPeak. Reaching out regarding an engineering lead opportunity."
    }
  ];

  const [activeScenarioIndex, setActiveScenarioIndex] = useState(0);
  const [callState, setCallState] = useState<'answering' | 'speaking' | 'monitoring' | 'takeover'>('speaking');

  const currentScenario = scenarios[activeScenarioIndex];

  return (
    <section
      style={{
        paddingTop: '6.75rem',
        paddingBottom: '4.5rem',
        backgroundColor: '#ffffff',
        position: 'relative',
        overflow: 'hidden',
        borderBottom: '1px solid var(--border-light)',
      }}
    >
      {/* Subtle background ambient grid */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'radial-gradient(#e2e8f0 1px, transparent 1px)',
          backgroundSize: '32px 32px',
          opacity: 0.5,
          pointerEvents: 'none',
        }}
      />

      <div className="site-container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="hero-grid">
          {/* Left Column: Editorial Headline & Value Story */}
          <div className="hero-content">
            <div className="editorial-tag" style={{ letterSpacing: '0.06em', fontWeight: 700 }}>
              <span style={{ textTransform: 'uppercase' }}>Introducing VoiSage AI</span>
            </div>

            <h1
              style={{
                fontSize: 'clamp(2.35rem, 4.5vw, 3.85rem)',
                fontWeight: 800,
                color: '#0f172a',
                lineHeight: 1.08,
                letterSpacing: '-0.035em',
                marginBottom: '1.25rem',
              }}
            >
              Your conversations, handled intelligently.
            </h1>

            <p
              style={{
                fontSize: 'clamp(1.05rem, 1.8vw, 1.25rem)',
                fontWeight: 500,
                color: '#1e293b',
                lineHeight: 1.45,
                marginBottom: '0.75rem',
              }}
            >
              Unknown call? Let VoiSage answer it first.
            </p>

            <p
              style={{
                fontSize: '1.0625rem',
                color: '#475569',
                lineHeight: 1.6,
                marginBottom: '2rem',
                maxWidth: '520px',
              }}
            >
              When an eligible unsaved number rings, VoiSage answers, identifies itself as your AI assistant,
              understands who is calling and why, and lets you monitor live or take over with one tap.
            </p>

            {/* CTAs */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                gap: '0.875rem',
                marginBottom: '1.75rem',
              }}
            >
              <button
                type="button"
                className="btn-primary"
                onClick={onOpenEarlyAccess}
                style={{ padding: '0.875rem 1.75rem', fontSize: '1rem' }}
              >
                <span>Get Early Access</span>
                <ArrowRight size={18} />
              </button>

              <a
                href="#how-it-works"
                className="btn-secondary"
                style={{ padding: '0.875rem 1.5rem', fontSize: '1rem' }}
              >
                <span>See How It Works</span>
              </a>
            </div>

            <div style={{ fontSize: '0.8125rem', color: '#64748b' }}>
              Built for Android in India · English, हिन्दी & తెలుగు · Dual-SIM supported
            </div>
          </div>

          {/* Right Column: Realistic Android VoiSage Call Interface Mockup */}
          <div className="hero-mockup-wrapper">
            {/* Scenario switcher pills */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                marginBottom: '0.875rem',
                overflowX: 'auto',
                paddingBottom: '4px',
              }}
            >
              <span style={{ fontSize: '0.75rem', fontWeight: 600, color: '#64748b', whiteSpace: 'nowrap' }}>
                Simulate Call:
              </span>
              {scenarios.map((scen, idx) => (
                <button
                  key={scen.id}
                  type="button"
                  onClick={() => {
                    setActiveScenarioIndex(idx);
                    setCallState('speaking');
                  }}
                  style={{
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    padding: '0.3rem 0.65rem',
                    borderRadius: '999px',
                    border: '1px solid',
                    cursor: 'pointer',
                    whiteSpace: 'nowrap',
                    transition: 'all 0.15s ease',
                    backgroundColor: activeScenarioIndex === idx ? '#1d4ed8' : '#ffffff',
                    color: activeScenarioIndex === idx ? '#ffffff' : '#475569',
                    borderColor: activeScenarioIndex === idx ? '#1d4ed8' : '#cbd5e1',
                  }}
                >
                  {scen.purposeTag}
                </button>
              ))}
            </div>

            {/* Android Device Shell */}
            <div className="android-shell">
              {/* Android Status Bar */}
              <div className="android-status-bar">
                <span>09:41</span>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                  <span style={{ fontSize: '0.625rem', color: '#94a3b8' }}>5G</span>
                  <div style={{ width: '12px', height: '8px', border: '1px solid #94a3b8', borderRadius: '1px' }} />
                </div>
              </div>

              {/* Incoming / Active Call Content */}
              <div style={{ padding: '1.25rem 1.25rem 1rem', textAlign: 'center' }}>
                {/* Caller Badge & SIM indicator */}
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    backgroundColor: 'rgba(255, 255, 255, 0.08)',
                    padding: '0.2rem 0.625rem',
                    borderRadius: '999px',
                    fontSize: '0.6875rem',
                    fontWeight: 600,
                    color: '#94a3b8',
                    letterSpacing: '0.04em',
                    marginBottom: '0.75rem',
                  }}
                >
                  <span className="live-indicator-dot" />
                  <span>INCOMING CALL • {currentScenario.sim}</span>
                </div>

                <div
                  style={{
                    fontSize: '1.5rem',
                    fontWeight: 800,
                    color: '#f8fafc',
                    fontFamily: 'var(--font-mono)',
                    letterSpacing: '0.01em',
                    marginBottom: '0.2rem',
                  }}
                >
                  {currentScenario.number}
                </div>

                <div style={{ fontSize: '0.8125rem', color: '#94a3b8', marginBottom: '1.25rem' }}>
                  {currentScenario.location} • Not in contacts
                </div>

                {/* VoiSage State Banner */}
                <div
                  style={{
                    backgroundColor: '#162238',
                    border: '1px solid #1e3a8a',
                    borderRadius: '12px',
                    padding: '0.875rem 1rem',
                    textAlign: 'left',
                    marginBottom: '1rem',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '0.5rem',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <div
                        style={{
                          width: '20px',
                          height: '20px',
                          borderRadius: '6px',
                          backgroundColor: '#2563eb',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <Volume2 size={12} color="#ffffff" />
                      </div>
                      <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#93c5fd' }}>
                        VoiSage is handling call
                      </span>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
                      <div className="soundwave-bar" />
                      <div className="soundwave-bar" />
                      <div className="soundwave-bar" />
                      <div className="soundwave-bar" />
                      <div className="soundwave-bar" />
                    </div>
                  </div>

                  {/* AI Speech Bubble */}
                  <div
                    style={{
                      fontSize: '0.8125rem',
                      color: '#e2e8f0',
                      lineHeight: 1.45,
                      fontStyle: 'normal',
                      backgroundColor: 'rgba(0,0,0,0.25)',
                      padding: '0.625rem 0.75rem',
                      borderRadius: '8px',
                      borderLeft: '3px solid #3b82f6',
                      marginBottom: '0.625rem',
                    }}
                  >
                    &ldquo;{currentScenario.introText}&rdquo;
                  </div>

                  {/* Live Caller Speech */}
                  <div
                    style={{
                      fontSize: '0.8125rem',
                      color: '#cbd5e1',
                      lineHeight: 1.45,
                      backgroundColor: 'rgba(30, 41, 59, 0.6)',
                      padding: '0.625rem 0.75rem',
                      borderRadius: '8px',
                      borderLeft: '3px solid #10b981',
                    }}
                  >
                    <div style={{ fontSize: '0.6875rem', fontWeight: 700, color: '#34d399', marginBottom: '2px' }}>
                      CALLER RESPONDED
                    </div>
                    &ldquo;{currentScenario.callerResponse}&rdquo;
                  </div>
                </div>

                {/* Detected Intent Pill */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    padding: '0.625rem 0.875rem',
                    borderRadius: '8px',
                    marginBottom: '1.25rem',
                  }}
                >
                  <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Detected Purpose</span>
                  <span
                    style={{
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      color: '#60a5fa',
                      backgroundColor: 'rgba(37, 99, 235, 0.2)',
                      padding: '0.125rem 0.5rem',
                      borderRadius: '4px',
                      border: '1px solid rgba(96, 165, 250, 0.3)',
                    }}
                  >
                    {currentScenario.purposeLabel}
                  </span>
                </div>

                {/* Action Buttons inside simulated interface */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                  <button
                    type="button"
                    onClick={() => {
                      setCallState('monitoring');
                      const el = document.getElementById('live-monitoring');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.35rem',
                      padding: '0.625rem',
                      borderRadius: '8px',
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      border: '1px solid rgba(255, 255, 255, 0.15)',
                      color: '#f8fafc',
                      fontSize: '0.8125rem',
                      fontWeight: 600,
                      cursor: 'pointer',
                    }}
                  >
                    <Eye size={14} />
                    <span>Watch Live</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setCallState('takeover');
                      const el = document.getElementById('takeover');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.35rem',
                      padding: '0.625rem',
                      borderRadius: '8px',
                      backgroundColor: '#ea580c',
                      border: 'none',
                      color: '#ffffff',
                      fontSize: '0.8125rem',
                      fontWeight: 600,
                      cursor: 'pointer',
                    }}
                  >
                    <PhoneForwarded size={14} />
                    <span>Take Over</span>
                  </button>
                </div>
              </div>

              {/* Bottom Android home bar indicator */}
              <div
                style={{
                  height: '24px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <div style={{ width: '90px', height: '4px', backgroundColor: '#334155', borderRadius: '2px' }} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 3rem;
          align-items: center;
        }

        @media (min-width: 980px) {
          .hero-grid {
            grid-template-columns: 1.15fr 0.85fr;
            gap: 4rem;
          }
        }

        .android-shell {
          width: 100%;
          max-width: 380px;
          margin-left: auto;
          margin-right: auto;
          background-color: #0b111e;
          border-radius: 28px;
          border: 4px solid #1e293b;
          box-shadow: 0 25px 60px -15px rgba(15, 23, 42, 0.35), 0 0 0 1px rgba(255, 255, 255, 0.08);
          overflow: hidden;
          position: relative;
        }

        .android-status-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.625rem 1.25rem 0.25rem;
          font-size: 0.6875rem;
          font-weight: 600;
          color: #94a3b8;
          font-family: var(--font-mono);
        }
      `}</style>
    </section>
  );
}
