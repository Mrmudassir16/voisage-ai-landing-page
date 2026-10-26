'use client';

import React, { useState } from 'react';
import { MessageSquare, ShieldCheck, Tag, Check, Volume2 } from 'lucide-react';

interface ConversationScenario {
  id: string;
  category: string;
  purposeBadge: string;
  callerName: string;
  callerIntro: string;
  aiIntro: string;
  callerInterrupt: string;
  aiAdaptedResponse: string;
}

export default function ConversationExperienceSection() {
  const scenarios: ConversationScenario[] = [
    {
      id: 'delivery',
      category: 'Delivery',
      purposeBadge: 'Package Delivery',
      callerName: 'Suresh (BlueDart Courier)',
      callerIntro: "Hello? Is Rahul there? I'm downstairs with a shipment.",
      aiIntro: "Hi, I'm the AI assistant for Rahul. May I ask what this is regarding?",
      callerInterrupt: "I have an Amazon parcel for Flat 402 that requires a 4-digit OTP.",
      aiAdaptedResponse: "Understood. I will immediately notify Rahul with high priority for the delivery OTP."
    },
    {
      id: 'appointment',
      category: 'Appointment',
      purposeBadge: 'Clinic Confirmation',
      callerName: 'Care Clinic Reception',
      callerIntro: "Calling from Care Clinic for Mr. Rahul.",
      aiIntro: "Hello, I'm the AI assistant for Rahul. Are you calling regarding his upcoming consultation?",
      callerInterrupt: "Yes, just confirming tomorrow's 10:30 AM appointment with Dr. Mehra.",
      aiAdaptedResponse: "Thank you. I have marked your call regarding tomorrow's 10:30 AM confirmation."
    },
    {
      id: 'business',
      category: 'Business',
      purposeBadge: 'Professional Inquiry',
      callerName: 'Ananya (TalentPeak)',
      callerIntro: "Hi, reaching out regarding a senior engineering opportunity.",
      aiIntro: "Hello, I'm the AI assistant for Rahul. May I take a brief message or note your company name?",
      callerInterrupt: "This is Ananya from TalentPeak. Could Rahul call me back this evening?",
      aiAdaptedResponse: "Thank you, Ananya. I have recorded your callback request for this evening."
    },
    {
      id: 'sales',
      category: 'Sales / Promo',
      purposeBadge: 'Filtered Promotion',
      callerName: 'Personal Loan Telemarketer',
      callerIntro: "Good afternoon, calling with an exclusive pre-approved platinum card offer.",
      aiIntro: "Hello, I'm the AI assistant for Rahul. May I know the organization you represent?",
      callerInterrupt: "Platinum Bank, with zero annual fee and instant approval.",
      aiAdaptedResponse: "Thank you for the information. Rahul is currently not accepting sales or promotional calls."
    }
  ];

  const [activeScenarioId, setActiveScenarioId] = useState('delivery');
  const [isInterrupted, setIsInterrupted] = useState(false);

  const current = scenarios.find((s) => s.id === activeScenarioId) || scenarios[0];

  return (
    <section
      id="experience"
      style={{
        paddingTop: '5.5rem',
        paddingBottom: '5.5rem',
        backgroundColor: '#f8fafc',
        borderBottom: '1px solid #e2e8f0',
      }}
    >
      <div className="site-container">
        {/* Editorial Heading */}
        <div style={{ maxWidth: '800px', marginBottom: '2.5rem' }}>
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
            It knows how to have a conversation — without pretending to be you.
          </h2>
          <p style={{ fontSize: '1.0625rem', color: '#475569', lineHeight: 1.6 }}>
            VoiSage immediately discloses that it is an AI assistant. It identifies the caller,
            detects why they are calling, and pauses the moment they speak.
          </p>
        </div>

        {/* Category switcher */}
        <div
          style={{
            display: 'flex',
            gap: '0.5rem',
            overflowX: 'auto',
            paddingBottom: '0.75rem',
            marginBottom: '2rem',
          }}
        >
          {scenarios.map((scen) => (
            <button
              key={scen.id}
              type="button"
              onClick={() => {
                setActiveScenarioId(scen.id);
                setIsInterrupted(false);
              }}
              style={{
                padding: '0.45rem 0.875rem',
                borderRadius: '999px',
                border: '1px solid',
                borderColor: activeScenarioId === scen.id ? '#1d4ed8' : '#cbd5e1',
                backgroundColor: activeScenarioId === scen.id ? '#1d4ed8' : '#ffffff',
                color: activeScenarioId === scen.id ? '#ffffff' : '#475569',
                fontSize: '0.8125rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.15s ease',
                whiteSpace: 'nowrap',
              }}
            >
              {scen.category}
            </button>
          ))}
        </div>

        {/* Live Conversation Showcase */}
        <div className="conversation-layout">
          {/* Main Simulated Dialogue Box */}
          <div
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '20px',
              border: '1px solid #e2e8f0',
              padding: '1.75rem',
              boxShadow: 'var(--shadow-md)',
            }}
          >
            {/* Top Identity & Purpose Bar */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '0.75rem',
                paddingBottom: '1rem',
                borderBottom: '1px solid #f1f5f9',
                marginBottom: '1.5rem',
              }}
            >
              <div>
                <div style={{ fontSize: '0.6875rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase' }}>
                  CALLER IDENTIFIED
                </div>
                <div style={{ fontSize: '1.125rem', fontWeight: 800, color: '#0f172a' }}>
                  {current.callerName}
                </div>
              </div>

              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: '0.6875rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase' }}>
                  DETECTED PURPOSE
                </div>
                <span
                  style={{
                    display: 'inline-block',
                    backgroundColor: '#eff6ff',
                    color: '#1d4ed8',
                    border: '1px solid #bfdbfe',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    padding: '0.2rem 0.625rem',
                    borderRadius: '999px',
                    marginTop: '2px',
                  }}
                >
                  {current.purposeBadge}
                </span>
              </div>
            </div>

            {/* Conversation Flow */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '1.5rem' }}>
              {/* Caller 1 */}
              <div>
                <div style={{ fontSize: '0.6875rem', fontWeight: 700, color: '#64748b', marginBottom: '0.25rem', fontFamily: 'var(--font-mono)' }}>
                  CALLER
                </div>
                <div style={{ backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '10px', padding: '0.75rem 1rem', fontSize: '0.9375rem', color: '#1e293b' }}>
                  &ldquo;{current.callerIntro}&rdquo;
                </div>
              </div>

              {/* VoiSage Intro */}
              <div>
                <div style={{ fontSize: '0.6875rem', fontWeight: 700, color: '#1d4ed8', marginBottom: '0.25rem', fontFamily: 'var(--font-mono)' }}>
                  VOISAGE (DISCLOSES AI IDENTITY)
                </div>
                <div style={{ backgroundColor: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '10px', padding: '0.75rem 1rem', fontSize: '0.9375rem', color: '#1e3a8a', lineHeight: 1.5 }}>
                  &ldquo;{current.aiIntro}&rdquo;
                </div>
              </div>

              {/* Caller Interruption Turn */}
              <div>
                <div style={{ fontSize: '0.6875rem', fontWeight: 700, color: '#64748b', marginBottom: '0.25rem', fontFamily: 'var(--font-mono)' }}>
                  CALLER DETAILS INTENT
                </div>
                <div style={{ backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '10px', padding: '0.75rem 1rem', fontSize: '0.9375rem', color: '#1e293b' }}>
                  &ldquo;{current.callerInterrupt}&rdquo;
                </div>
              </div>

              {/* VoiSage Natural Response */}
              <div>
                <div style={{ fontSize: '0.6875rem', fontWeight: 700, color: '#1d4ed8', marginBottom: '0.25rem', fontFamily: 'var(--font-mono)' }}>
                  VOISAGE ADAPTS
                </div>
                <div style={{ backgroundColor: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '10px', padding: '0.75rem 1rem', fontSize: '0.9375rem', color: '#1e3a8a', lineHeight: 1.5 }}>
                  &ldquo;{current.aiAdaptedResponse}&rdquo;
                </div>
              </div>
            </div>

            {/* Micro Interaction: Test Barge-in */}
            <div
              style={{
                backgroundColor: '#f1f5f9',
                borderRadius: '10px',
                padding: '0.75rem 1rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                fontSize: '0.8125rem',
              }}
            >
              <div style={{ color: '#475569' }}>
                <strong>Barge-in enabled:</strong> If the caller interrupts mid-sentence, VoiSage immediately stops speaking and listens.
              </div>
            </div>
          </div>

          {/* Right Narrative Column */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0f172a', marginBottom: '1rem', letterSpacing: '-0.02em' }}>
              Natural turn-taking, zero loops.
            </h3>
            <p style={{ fontSize: '1rem', color: '#475569', lineHeight: 1.6, marginBottom: '1.5rem' }}>
              Old IVR systems repeat the same scripted question over and over.
              VoiSage listens, acknowledges what the caller said, and asks only for what is actually missing.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                <Check size={16} color="#059669" style={{ flexShrink: 0, marginTop: '3px' }} />
                <span style={{ fontSize: '0.875rem', color: '#1e293b' }}>
                  <strong>Always identifies as AI:</strong> Callers are never misled or confused.
                </span>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                <Check size={16} color="#059669" style={{ flexShrink: 0, marginTop: '3px' }} />
                <span style={{ fontSize: '0.875rem', color: '#1e293b' }}>
                  <strong>Understands Indian speech rhythms:</strong> Handles pincodes, flat numbers, and local phrasing.
                </span>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                <Check size={16} color="#059669" style={{ flexShrink: 0, marginTop: '3px' }} />
                <span style={{ fontSize: '0.875rem', color: '#1e293b' }}>
                  <strong>Filters spam politely:</strong> Unwanted marketing pitches are absorbed without ringing you.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .conversation-layout {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2.5rem;
        }

        @media (min-width: 900px) {
          .conversation-layout {
            grid-template-columns: 1.2fr 0.8fr;
            gap: 3rem;
          }
        }
      `}</style>
    </section>
  );
}
