'use client';

import React, { useState } from 'react';
import {
  FileText,
  Play,
  Pause,
  Copy,
  Check,
  History,
  RotateCcw,
  Volume2,
  ChevronRight
} from 'lucide-react';

interface CallRecord {
  id: string;
  caller: string;
  number: string;
  time: string;
  duration: string;
  purpose: string;
  purposeColor: string;
  summary: string;
  followUp: string;
  repeatContext?: string;
  hasAudio: boolean;
}

export default function PostCallIntelligenceSection() {
  const records: CallRecord[] = [
    {
      id: '1',
      caller: 'BlueDart Express (Suresh)',
      number: '+91 98402 11928',
      time: '10:43 AM',
      duration: '01:24',
      purpose: 'Delivery',
      purposeColor: '#2563eb',
      summary: 'Courier is at society gate with Amazon order #BD-9041 for Flat 402. Requires OTP handover.',
      followUp: 'Provide 4-digit OTP or authorize society security guard within 10 minutes.',
      repeatContext: 'Yesterday, Suresh delivered part 1 of this shipment.',
      hasAudio: true,
    },
    {
      id: '2',
      caller: 'Care Clinic (Dr. Mehra)',
      number: '+91 80491 22890',
      time: 'Yesterday 04:20 PM',
      duration: '02:10',
      purpose: 'Appointment',
      purposeColor: '#059669',
      summary: 'Confirmed routine checkup for Thursday at 10:30 AM. Fasting not required.',
      followUp: 'Arrive 10 minutes prior for blood pressure reading.',
      repeatContext: 'Receptionist previously booked original consultation.',
      hasAudio: true,
    },
    {
      id: '3',
      caller: 'TalentPeak (Ananya)',
      number: '+91 99104 77123',
      time: 'Yesterday 11:05 AM',
      duration: '01:12',
      purpose: 'Business',
      purposeColor: '#7c3aed',
      summary: 'Reaching out regarding senior engineering role. Requested callback after 6 PM.',
      followUp: 'Place callback if interested in discussing position details.',
      hasAudio: false,
    }
  ];

  const [selectedId, setSelectedId] = useState('1');
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [copied, setCopied] = useState(false);

  const current = records.find((r) => r.id === selectedId) || records[0];

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
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
            When the call ends, you know what happened.
          </h2>
          <p style={{ fontSize: '1.0625rem', color: '#475569', lineHeight: 1.6 }}>
            You don&apos;t have to remember the call or listen to voicemail recordings.
            VoiSage delivers the useful parts: who called, the detected purpose, and what needs follow-up.
          </p>
        </div>

        {/* Combined Intelligence & History Layout */}
        <div className="postcall-combined-grid">
          {/* Main Card: Post-Call Summary Details */}
          <div
            style={{
              backgroundColor: '#f8fafc',
              borderRadius: '20px',
              border: '1px solid #e2e8f0',
              padding: '1.75rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div>
              {/* Header */}
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '0.75rem',
                  paddingBottom: '1rem',
                  borderBottom: '1px solid #e2e8f0',
                  marginBottom: '1.25rem',
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.2rem' }}>
                    <span
                      style={{
                        fontSize: '0.6875rem',
                        fontWeight: 700,
                        color: current.purposeColor,
                        backgroundColor: '#ffffff',
                        border: '1px solid #e2e8f0',
                        padding: '0.15rem 0.5rem',
                        borderRadius: '4px',
                        textTransform: 'uppercase',
                      }}
                    >
                      {current.purpose}
                    </span>
                    <span style={{ fontSize: '0.75rem', color: '#64748b' }}>
                      {current.time} • {current.duration}
                    </span>
                  </div>
                  <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0f172a' }}>
                    {current.caller}
                  </div>
                </div>

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
                    padding: '0.35rem 0.75rem',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    color: '#475569',
                    cursor: 'pointer',
                  }}
                >
                  {copied ? <Check size={14} color="#059669" /> : <Copy size={14} />}
                  <span>{copied ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              {/* Summary Block */}
              <div style={{ marginBottom: '1rem' }}>
                <div style={{ fontSize: '0.6875rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', marginBottom: '0.35rem' }}>
                  SUMMARY
                </div>
                <p style={{ fontSize: '0.9375rem', color: '#1e293b', lineHeight: 1.5 }}>
                  {current.summary}
                </p>
              </div>

              {/* Follow-up Block */}
              <div
                style={{
                  backgroundColor: '#ffffff',
                  border: '1px solid #e2e8f0',
                  borderRadius: '10px',
                  padding: '0.875rem 1rem',
                  marginBottom: '1.25rem',
                }}
              >
                <div style={{ fontSize: '0.6875rem', fontWeight: 700, color: '#b45309', textTransform: 'uppercase', marginBottom: '0.25rem' }}>
                  FOLLOW-UP
                </div>
                <div style={{ fontSize: '0.875rem', color: '#78350f', lineHeight: 1.5, fontWeight: 500 }}>
                  {current.followUp}
                </div>
              </div>

              {/* Repeat Caller Context Highlight */}
              {current.repeatContext && (
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    fontSize: '0.8125rem',
                    color: '#475569',
                    backgroundColor: '#eff6ff',
                    border: '1px solid #bfdbfe',
                    borderRadius: '8px',
                    padding: '0.625rem 0.875rem',
                    marginBottom: '1rem',
                  }}
                >
                  <RotateCcw size={14} color="#1d4ed8" style={{ flexShrink: 0 }} />
                  <span>
                    <strong>Useful Context:</strong> {current.repeatContext}
                  </span>
                </div>
              )}
            </div>

            {/* Audio Recording Status */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingTop: '0.75rem',
                borderTop: '1px solid #e2e8f0',
                fontSize: '0.75rem',
                color: '#64748b',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Volume2 size={15} color={current.hasAudio ? '#059669' : '#94a3b8'} />
                <span>
                  {current.hasAudio
                    ? 'Recording stored locally on device (where supported)'
                    : 'No recording generated'}
                </span>
              </div>

              {current.hasAudio && (
                <button
                  type="button"
                  onClick={() => setIsPlayingAudio(!isPlayingAudio)}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: '#1d4ed8',
                    fontWeight: 600,
                    cursor: 'pointer',
                    fontSize: '0.75rem',
                  }}
                >
                  {isPlayingAudio ? 'Pause Audio' : 'Play Audio'}
                </button>
              )}
            </div>
          </div>

          {/* Right/Sidebar: Compact Call History Feed */}
          <div
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '20px',
              border: '1px solid #e2e8f0',
              padding: '1.5rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontSize: '0.8125rem',
                  fontWeight: 700,
                  color: '#0f172a',
                  marginBottom: '1rem',
                }}
              >
                <History size={16} />
                <span>Recent Screened Calls</span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
                {records.map((r) => {
                  const isSelected = selectedId === r.id;
                  return (
                    <div
                      key={r.id}
                      onClick={() => setSelectedId(r.id)}
                      style={{
                        padding: '0.875rem 1rem',
                        borderRadius: '10px',
                        border: '1px solid',
                        borderColor: isSelected ? '#1d4ed8' : '#e2e8f0',
                        backgroundColor: isSelected ? '#eff6ff' : '#ffffff',
                        cursor: 'pointer',
                        transition: 'all 0.15s ease',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                      }}
                    >
                      <div>
                        <div style={{ fontSize: '0.875rem', fontWeight: 700, color: '#0f172a' }}>
                          {r.caller}
                        </div>
                        <div style={{ fontSize: '0.75rem', color: '#64748b' }}>
                          {r.purpose} • {r.duration}
                        </div>
                      </div>
                      <ChevronRight size={16} color={isSelected ? '#1d4ed8' : '#cbd5e1'} />
                    </div>
                  );
                })}
              </div>
            </div>

            <div style={{ fontSize: '0.75rem', color: '#64748b', marginTop: '1.5rem', lineHeight: 1.4 }}>
              You can delete any single call record or wipe your history with one tap in settings.
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .postcall-combined-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
        }

        @media (min-width: 920px) {
          .postcall-combined-grid {
            grid-template-columns: 1.25fr 0.75fr;
            gap: 2.5rem;
          }
        }
      `}</style>
    </section>
  );
}
