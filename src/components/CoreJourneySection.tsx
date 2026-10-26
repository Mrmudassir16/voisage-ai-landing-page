'use client';

import React, { useState } from 'react';
import {
  PhoneIncoming,
  Bot,
  UserCheck,
  HelpCircle,
  Eye,
  PhoneForwarded,
  Volume2,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';

export default function CoreJourneySection() {
  const steps = [
    {
      id: 'ring',
      label: 'Unknown Number',
      title: 'An unsaved number rings',
      narrative: 'If a caller is in your contacts, your phone rings normally. If it is an eligible unsaved number, VoiSage prepares to answer.',
      screenHeader: 'INCOMING CALL • SIM 1 Jio',
      callerNumber: '+91 98XXX 44821',
      callerSub: 'Bandra, Mumbai • Not in contacts',
      stateBadge: 'Incoming Call Detection',
      previewContent: 'Incoming call identified as unsaved contact. User rules check: AI Answering enabled.',
    },
    {
      id: 'answer',
      label: 'VoiSage Answers',
      title: 'VoiSage picks up on your behalf',
      narrative: 'The call connects smoothly without loud disruptive ringing, while your phone displays the silent active call notice.',
      screenHeader: 'VOISAGE ANSWERING • 00:04',
      callerNumber: '+91 98XXX 44821',
      callerSub: 'Line connected • Synthesizing opening greeting',
      stateBadge: 'Silent Call Pickup',
      previewContent: 'Audio connection established. Telecom channel routed to assistant engine.',
    },
    {
      id: 'intro',
      label: 'AI Identifies Itself',
      title: 'Transparent from the first second',
      narrative: 'VoiSage clearly introduces itself: "Hello, I\'m the AI assistant for Rahul." It never pretends to be you or clones your voice.',
      screenHeader: 'AI SPEAKING • 00:08',
      callerNumber: '+91 98XXX 44821',
      callerSub: 'Assistant playing transparent disclosure',
      stateBadge: 'Honest AI Disclosure',
      previewContent: '“Hello, I’m the AI assistant for Rahul. May I ask who is calling and what this is regarding?”',
    },
    {
      id: 'who',
      label: 'Who Is Calling?',
      title: 'Discovers the caller identity',
      narrative: 'The caller states their name and organization (for example, BlueDart, Apollo Clinic, or a personal inquiry).',
      screenHeader: 'CALLER SPEAKING • 00:15',
      callerNumber: '+91 98XXX 44821',
      callerSub: 'Caller speech recognized in real time',
      stateBadge: 'Identity Captured',
      previewContent: 'Caller: “Hi, this is Suresh from BlueDart with an Amazon delivery for flat 402.”',
    },
    {
      id: 'why',
      label: 'Understands Why',
      title: 'Understands the exact purpose',
      narrative: 'VoiSage asks relevant follow-up questions instead of repeating rigid scripts, classifying the intent as Delivery, Appointment, or Business.',
      screenHeader: 'PURPOSE DETECTED: DELIVERY • 00:26',
      callerNumber: '+91 98XXX 44821',
      callerSub: 'Suresh (BlueDart) • Delivery OTP required',
      stateBadge: 'Intent Understood',
      previewContent: 'VoiSage: “Understood. Does this package require an OTP, or can it be left with security?”',
    },
    {
      id: 'watch',
      label: 'You Watch',
      title: 'Read live text without speaking',
      narrative: 'You read recognized speech in real time on your screen. You have full visibility into the conversation without uttering a sound.',
      screenHeader: 'LIVE STREAMING TRANSCRIPT • 00:38',
      callerNumber: '+91 98XXX 44821',
      callerSub: 'Full visibility on Android display',
      stateBadge: 'Silent Monitoring',
      previewContent: 'Caller: “It needs a 4-digit OTP. Can I talk to Rahul directly?”',
    },
    {
      id: 'decide',
      label: 'You Decide',
      title: 'Take Over or get the summary',
      narrative: 'If it matters, tap Take Over to connect directly. If not, let VoiSage complete the call and deliver a structured summary.',
      screenHeader: 'USER ACTION REQUIRED',
      callerNumber: '+91 98XXX 44821',
      callerSub: 'Caller requested user • Ready for handoff',
      stateBadge: 'User in Command',
      previewContent: '[ Take Over Call ] — Connects your mic and hands off the live call instantly where supported.',
    },
  ];

  const [activeIndex, setActiveIndex] = useState(2);
  const current = steps[activeIndex];

  return (
    <section
      id="how-it-works"
      style={{
        paddingTop: '5.5rem',
        paddingBottom: '5.5rem',
        backgroundColor: '#ffffff',
        borderBottom: '1px solid #e2e8f0',
      }}
    >
      <div className="site-container">
        {/* Editorial Heading */}
        <div style={{ maxWidth: '750px', marginBottom: '2.5rem' }}>
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
            How VoiSage handles an unknown call.
          </h2>
          <p style={{ fontSize: '1.0625rem', color: '#475569', lineHeight: 1.6 }}>
            A calm, structured journey that replaces sudden phone interruptions with total clarity.
          </p>
        </div>

        {/* Visual Walkthrough Progress Bar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.25rem',
            overflowX: 'auto',
            paddingBottom: '0.75rem',
            marginBottom: '2.5rem',
          }}
        >
          {steps.map((step, idx) => {
            const isActive = activeIndex === idx;
            return (
              <React.Fragment key={step.id}>
                <button
                  type="button"
                  onClick={() => setActiveIndex(idx)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    padding: '0.45rem 0.8rem',
                    borderRadius: '8px',
                    border: '1px solid',
                    borderColor: isActive ? '#1d4ed8' : '#e2e8f0',
                    backgroundColor: isActive ? '#eff6ff' : '#ffffff',
                    color: isActive ? '#1d4ed8' : '#64748b',
                    fontSize: '0.8125rem',
                    fontWeight: isActive ? 700 : 500,
                    cursor: 'pointer',
                    whiteSpace: 'nowrap',
                    transition: 'all 0.15s ease',
                  }}
                >
                  <span style={{ fontSize: '0.6875rem', fontWeight: 700, opacity: 0.7 }}>0{idx + 1}</span>
                  <span>{step.label}</span>
                </button>
                {idx < steps.length - 1 && (
                  <span style={{ color: '#cbd5e1', fontSize: '0.75rem' }}>→</span>
                )}
              </React.Fragment>
            );
          })}
        </div>

        {/* Interactive Walkthrough Showcase */}
        <div className="walkthrough-layout">
          {/* Left Narrative */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div
              style={{
                fontSize: '0.75rem',
                fontWeight: 700,
                color: '#1d4ed8',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                marginBottom: '0.5rem',
              }}
            >
              STAGE 0{activeIndex + 1} OF 07
            </div>

            <h3
              style={{
                fontSize: 'clamp(1.5rem, 2.5vw, 2.1rem)',
                fontWeight: 800,
                color: '#0f172a',
                lineHeight: 1.2,
                marginBottom: '1rem',
                letterSpacing: '-0.02em',
              }}
            >
              {current.title}
            </h3>

            <p style={{ fontSize: '1.0625rem', color: '#475569', lineHeight: 1.6, marginBottom: '2rem' }}>
              {current.narrative}
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <button
                type="button"
                disabled={activeIndex === 0}
                onClick={() => setActiveIndex((prev) => Math.max(0, prev - 1))}
                style={{
                  backgroundColor: '#ffffff',
                  border: '1px solid #cbd5e1',
                  borderRadius: '8px',
                  padding: '0.5rem 1rem',
                  fontSize: '0.8125rem',
                  fontWeight: 600,
                  color: activeIndex === 0 ? '#94a3b8' : '#0f172a',
                  cursor: activeIndex === 0 ? 'not-allowed' : 'pointer',
                }}
              >
                Previous Step
              </button>

              <button
                type="button"
                disabled={activeIndex === steps.length - 1}
                onClick={() => setActiveIndex((prev) => Math.min(steps.length - 1, prev + 1))}
                style={{
                  backgroundColor: '#1d4ed8',
                  border: 'none',
                  borderRadius: '8px',
                  padding: '0.5rem 1.25rem',
                  fontSize: '0.8125rem',
                  fontWeight: 600,
                  color: '#ffffff',
                  cursor: activeIndex === steps.length - 1 ? 'not-allowed' : 'pointer',
                }}
              >
                Next Step →
              </button>
            </div>
          </div>

          {/* Right Product Screen */}
          <div
            style={{
              backgroundColor: '#0b111e',
              borderRadius: '20px',
              border: '1px solid #1e293b',
              padding: '1.75rem',
              color: '#ffffff',
              boxShadow: 'var(--shadow-xl)',
            }}
          >
            {/* Screen Top Status */}
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
                <span style={{ fontSize: '0.6875rem', fontWeight: 700, color: '#93c5fd', letterSpacing: '0.04em' }}>
                  {current.screenHeader}
                </span>
              </div>
              <span
                style={{
                  fontSize: '0.6875rem',
                  fontWeight: 600,
                  color: '#60a5fa',
                  backgroundColor: 'rgba(37, 99, 235, 0.2)',
                  padding: '0.15rem 0.5rem',
                  borderRadius: '4px',
                }}
              >
                {current.stateBadge}
              </span>
            </div>

            {/* Caller Header */}
            <div style={{ marginBottom: '1.25rem' }}>
              <div style={{ fontSize: '1.35rem', fontWeight: 800, color: '#f8fafc', fontFamily: 'var(--font-mono)' }}>
                {current.callerNumber}
              </div>
              <div style={{ fontSize: '0.8125rem', color: '#94a3b8' }}>
                {current.callerSub}
              </div>
            </div>

            {/* Dynamic Content Box */}
            <div
              style={{
                backgroundColor: '#111827',
                border: '1px solid #1f2937',
                borderRadius: '12px',
                padding: '1.25rem',
                minHeight: '90px',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <div style={{ fontSize: '0.9375rem', color: '#e2e8f0', lineHeight: 1.5 }}>
                {current.previewContent}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .walkthrough-layout {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2.5rem;
          align-items: center;
        }

        @media (min-width: 900px) {
          .walkthrough-layout {
            grid-template-columns: 1.1fr 0.9fr;
            gap: 3.5rem;
          }
        }
      `}</style>
    </section>
  );
}
