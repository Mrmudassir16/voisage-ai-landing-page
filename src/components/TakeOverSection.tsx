'use client';

import React, { useState } from 'react';
import { PhoneForwarded, Bell, UserCheck, ShieldCheck, ArrowRight, Check, AlertCircle } from 'lucide-react';

export default function TakeOverSection() {
  const [activeStep, setActiveStep] = useState(3);

  const takeoverStages = [
    {
      num: 1,
      title: 'AI Handling',
      desc: 'Assistant is conversing politely with the unknown caller.',
      pill: 'Silent Monitoring'
    },
    {
      num: 2,
      title: 'Caller Requests You',
      desc: '"Can I speak directly to Rahul? I have his blood test report."',
      pill: 'Urgent Request'
    },
    {
      num: 3,
      title: 'Distinct Notification',
      desc: 'High-priority banner and vibration triggers on your Android device.',
      pill: 'User Alert'
    },
    {
      num: 4,
      title: 'One-Tap Take Over',
      desc: 'You tap Take Over. The assistant smoothly exits audio channel.',
      pill: 'Instant Handoff'
    },
    {
      num: 5,
      title: 'You Are Connected',
      desc: 'Direct conversation begins with zero caller disconnect.',
      pill: 'Live Line Active'
    }
  ];

  return (
    <section
      id="takeover"
      style={{
        paddingTop: '6.5rem',
        paddingBottom: '6.5rem',
        backgroundColor: '#f8fafc',
        borderBottom: '1px solid #e2e8f0',
      }}
    >
      <div className="site-container">
        {/* Editorial Headline */}
        <div style={{ maxWidth: '780px', marginBottom: '3.5rem' }}>
          <div className="editorial-tag">
            <PhoneForwarded size={14} />
            <span>Fluid AI → Human Handoff</span>
          </div>

          <h2
            style={{
              fontSize: 'clamp(2.1rem, 3.8vw, 3.25rem)',
              fontWeight: 800,
              color: '#0f172a',
              lineHeight: 1.12,
              letterSpacing: '-0.03em',
              marginBottom: '1rem',
            }}
          >
            When you need to step in, you can.
          </h2>

          <p style={{ fontSize: '1.0625rem', color: '#475569', lineHeight: 1.6 }}>
            VoiSage is not a wall that locks people out. It is a protective filter.
            Whenever a caller asks to speak directly or you see something that requires your personal voice,
            one tap hands the live call directly over to you.
          </p>
        </div>

        {/* Handoff Visual Progression */}
        <div
          style={{
            backgroundColor: '#ffffff',
            borderRadius: '24px',
            border: '1px solid #e2e8f0',
            padding: '2rem',
            boxShadow: 'var(--shadow-lg)',
            marginBottom: '2rem',
          }}
        >
          {/* Step Pill Navigation */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
              gap: '0.75rem',
              marginBottom: '2.5rem',
            }}
          >
            {takeoverStages.map((stage) => {
              const isCurrent = activeStep === stage.num;
              return (
                <div
                  key={stage.num}
                  onClick={() => setActiveStep(stage.num)}
                  style={{
                    backgroundColor: isCurrent ? '#eff6ff' : '#f8fafc',
                    border: '1px solid',
                    borderColor: isCurrent ? '#2563eb' : '#e2e8f0',
                    borderRadius: '12px',
                    padding: '1rem',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
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
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        color: isCurrent ? '#1d4ed8' : '#94a3b8',
                      }}
                    >
                      STEP 0{stage.num}
                    </span>
                    <span
                      style={{
                        fontSize: '0.6875rem',
                        fontWeight: 600,
                        color: isCurrent ? '#1d4ed8' : '#64748b',
                      }}
                    >
                      {stage.pill}
                    </span>
                  </div>
                  <div style={{ fontSize: '0.9375rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.25rem' }}>
                    {stage.title}
                  </div>
                  <div style={{ fontSize: '0.75rem', color: '#64748b', lineHeight: 1.4 }}>
                    {stage.desc}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Interactive Handoff State Showcase */}
          <div
            style={{
              backgroundColor: '#0f172a',
              borderRadius: '16px',
              padding: '2rem',
              color: '#ffffff',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
            }}
          >
            <div
              style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                backgroundColor: activeStep === 5 ? '#059669' : '#ea580c',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1rem',
                boxShadow: '0 0 25px rgba(234, 88, 12, 0.4)',
                transition: 'all 0.3s ease',
              }}
            >
              <PhoneForwarded size={28} color="#ffffff" />
            </div>

            <div style={{ fontSize: '0.8125rem', fontWeight: 700, color: '#fba55d', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.25rem' }}>
              {activeStep === 5 ? 'TRANSFER COMPLETE' : 'HANDOFF READY'}
            </div>

            <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.5rem' }}>
              {activeStep === 5
                ? 'You are now speaking with Dr. Reddy\'s Clinic'
                : 'Caller is asking to speak with you directly'}
            </div>

            <p style={{ maxWidth: '540px', fontSize: '0.9375rem', color: '#94a3b8', lineHeight: 1.5, marginBottom: '1.5rem' }}>
              {activeStep === 5
                ? 'VoiSage has completed the handoff and quietly disconnected its synthesis channel. Your standard phone microphone and ear-speaker are active.'
                : 'The AI assistant collected their identity and purpose. Tap the button below to connect seamlessly.'}
            </p>

            <button
              type="button"
              className="btn-takeover"
              onClick={() => setActiveStep(activeStep === 5 ? 1 : 5)}
              style={{ padding: '0.875rem 2rem', fontSize: '1rem' }}
            >
              <PhoneForwarded size={18} />
              <span>{activeStep === 5 ? 'Reset Simulation Flow' : 'Simulate Take Over (One Tap)'}</span>
            </button>
          </div>
        </div>

        {/* Honest Technical Transparency Note */}
        <div
          style={{
            backgroundColor: '#ffffff',
            border: '1px solid #e2e8f0',
            borderRadius: '12px',
            padding: '1rem 1.25rem',
            display: 'flex',
            alignItems: 'flex-start',
            gap: '0.75rem',
          }}
        >
          <AlertCircle size={18} color="#d97706" style={{ flexShrink: 0, marginTop: '2px' }} />
          <p style={{ fontSize: '0.8125rem', color: '#475569', lineHeight: 1.5 }}>
            <strong>Take over when supported:</strong> Direct in-call takeover depends on your Android OS version,
            OEM manufacturer permissions, carrier network support (Jio, Airtel, Vi), and telephony integration capabilities.
            In configurations where live bridge transfer is restricted, VoiSage immediately alerts you with the summary so you can place an informed callback.
          </p>
        </div>
      </div>
    </section>
  );
}
