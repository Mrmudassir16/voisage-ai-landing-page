'use client';

import React, { useState } from 'react';
import {
  History,
  Trash2,
  Search,
  Filter,
  ChevronRight,
  PhoneIncoming,
  Clock,
  FileText,
  Volume2,
  Calendar,
  X
} from 'lucide-react';

interface CallRecord {
  id: string;
  caller: string;
  number: string;
  dateGroup: 'Today' | 'Yesterday';
  time: string;
  duration: string;
  purpose: string;
  purposeColor: string;
  summary: string;
  hasRecording: boolean;
  transcriptPreview: string;
}

export default function CallHistorySection() {
  const [selectedCallId, setSelectedCallId] = useState<string | null>('1');
  const [filter, setFilter] = useState<string>('all');

  const records: CallRecord[] = [
    {
      id: '1',
      caller: 'BlueDart Delivery (Suresh)',
      number: '+91 98402 11928',
      dateGroup: 'Today',
      time: '10:43 AM',
      duration: '1:24',
      purpose: 'Delivery',
      purposeColor: '#2563eb',
      summary: 'Package arrives today by 3 PM. Requires OTP verification upon arrival.',
      hasRecording: true,
      transcriptPreview: 'Caller stated he is at the society gate with Amazon order #BD-9041...'
    },
    {
      id: '2',
      caller: 'Unsaved Mobile Number',
      number: '+91 91082 55431',
      dateGroup: 'Today',
      time: '09:15 AM',
      duration: '0:48',
      purpose: 'Sales / Promo',
      purposeColor: '#d97706',
      summary: 'Credit card telemarketing pitch from personal loan agency. Politely declined.',
      hasRecording: false,
      transcriptPreview: 'Caller offered zero-annual-fee platinum card; AI responded user is not accepting offers.'
    },
    {
      id: '3',
      caller: 'Care Clinic (Dr. Mehra)',
      number: '+91 80491 22890',
      dateGroup: 'Yesterday',
      time: '04:20 PM',
      duration: '2:10',
      purpose: 'Appointment',
      purposeColor: '#059669',
      summary: 'Confirmed follow-up consultation for Thursday at 4:30 PM. Fasting not required.',
      hasRecording: true,
      transcriptPreview: 'Receptionist confirmed time slot and doctor availability for routine ultrasound follow-up.'
    },
    {
      id: '4',
      caller: 'TalentPeak Recruiter (Ananya)',
      number: '+91 99104 77123',
      dateGroup: 'Yesterday',
      time: '11:05 AM',
      duration: '1:12',
      purpose: 'Business',
      purposeColor: '#7c3aed',
      summary: 'Inquiry regarding open Engineering Lead role. Requested callback after 6 PM.',
      hasRecording: false,
      transcriptPreview: 'Caller asked for preferred callback window; assistant recorded available hours after 6 PM.'
    }
  ];

  const filteredRecords = filter === 'all'
    ? records
    : records.filter((r) => r.purpose.toLowerCase().includes(filter.toLowerCase()));

  const selectedRecord = records.find((r) => r.id === selectedCallId) || records[0];

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
            <History size={14} />
            <span>Searchable Activity Archive</span>
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
            A calm, organized log of every interaction.
          </h2>

          <p style={{ fontSize: '1.0625rem', color: '#475569', lineHeight: 1.6 }}>
            Browse past AI-handled calls with caller names, categorized intents, time stamps,
            and complete transcripts. You can delete any individual call or wipe your entire history at will.
          </p>
        </div>

        {/* History Explorer UI */}
        <div className="history-grid">
          {/* Left Column: Call List */}
          <div
            style={{
              backgroundColor: '#f8fafc',
              borderRadius: '20px',
              border: '1px solid #e2e8f0',
              padding: '1.5rem',
            }}
          >
            {/* Filter buttons */}
            <div
              style={{
                display: 'flex',
                gap: '0.35rem',
                overflowX: 'auto',
                paddingBottom: '0.75rem',
                borderBottom: '1px solid #e2e8f0',
                marginBottom: '1.25rem',
              }}
            >
              {['all', 'delivery', 'appointment', 'business', 'sales'].map((f) => (
                <button
                  key={f}
                  type="button"
                  onClick={() => setFilter(f)}
                  style={{
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    textTransform: 'capitalize',
                    padding: '0.25rem 0.65rem',
                    borderRadius: '999px',
                    border: '1px solid',
                    borderColor: filter === f ? '#1d4ed8' : '#cbd5e1',
                    backgroundColor: filter === f ? '#1d4ed8' : '#ffffff',
                    color: filter === f ? '#ffffff' : '#64748b',
                    cursor: 'pointer',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {f}
                </button>
              ))}
            </div>

            {/* List */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {filteredRecords.map((item) => {
                const isSelected = selectedCallId === item.id;
                return (
                  <div
                    key={item.id}
                    onClick={() => setSelectedCallId(item.id)}
                    style={{
                      backgroundColor: isSelected ? '#eff6ff' : '#ffffff',
                      border: '1px solid',
                      borderColor: isSelected ? '#bfdbfe' : '#e2e8f0',
                      borderRadius: '12px',
                      padding: '1rem',
                      cursor: 'pointer',
                      transition: 'all 0.15s ease',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}
                  >
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                        <span
                          style={{
                            fontSize: '0.6875rem',
                            fontWeight: 700,
                            color: item.purposeColor,
                            backgroundColor: '#f1f5f9',
                            padding: '0.1rem 0.4rem',
                            borderRadius: '4px',
                          }}
                        >
                          {item.purpose}
                        </span>
                        <span style={{ fontSize: '0.75rem', color: '#64748b' }}>
                          {item.dateGroup} • {item.time}
                        </span>
                      </div>

                      <div style={{ fontSize: '0.9375rem', fontWeight: 700, color: '#0f172a' }}>
                        {item.caller}
                      </div>
                      <div style={{ fontSize: '0.75rem', color: '#64748b', fontFamily: 'var(--font-mono)' }}>
                        {item.number} • {item.duration}
                      </div>
                    </div>

                    <ChevronRight size={18} color={isSelected ? '#1d4ed8' : '#cbd5e1'} />
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Detailed Call Sheet Viewer */}
          <div
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '20px',
              border: '1px solid #e2e8f0',
              padding: '1.75rem',
              boxShadow: 'var(--shadow-md)',
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
                  justifyContent: 'space-between',
                  paddingBottom: '1rem',
                  borderBottom: '1px solid #f1f5f9',
                  marginBottom: '1.25rem',
                }}
              >
                <div>
                  <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase' }}>
                    CALL RECORD DETAILS
                  </div>
                  <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0f172a' }}>
                    {selectedRecord.caller}
                  </div>
                </div>

                <div
                  style={{
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    color: selectedRecord.purposeColor,
                    backgroundColor: '#f8fafc',
                    border: '1px solid #e2e8f0',
                    padding: '0.25rem 0.625rem',
                    borderRadius: '999px',
                  }}
                >
                  {selectedRecord.purpose}
                </div>
              </div>

              {/* Summary Block */}
              <div
                style={{
                  backgroundColor: '#f8fafc',
                  border: '1px solid #e2e8f0',
                  borderRadius: '12px',
                  padding: '1rem',
                  marginBottom: '1rem',
                }}
              >
                <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#475569', textTransform: 'uppercase', marginBottom: '0.35rem' }}>
                  AI Summary
                </div>
                <p style={{ fontSize: '0.875rem', color: '#1e293b', lineHeight: 1.5 }}>
                  {selectedRecord.summary}
                </p>
              </div>

              {/* Transcript snippet */}
              <div
                style={{
                  backgroundColor: '#ffffff',
                  border: '1px solid #e2e8f0',
                  borderRadius: '12px',
                  padding: '1rem',
                  marginBottom: '1rem',
                }}
              >
                <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', marginBottom: '0.35rem' }}>
                  Transcript Snippet
                </div>
                <p style={{ fontSize: '0.8125rem', color: '#64748b', fontStyle: 'italic', lineHeight: 1.5 }}>
                  &ldquo;{selectedRecord.transcriptPreview}&rdquo;
                </p>
              </div>

              {/* Recording Status */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontSize: '0.75rem',
                  color: selectedRecord.hasRecording ? '#059669' : '#64748b',
                  backgroundColor: selectedRecord.hasRecording ? '#ecfdf5' : '#f1f5f9',
                  padding: '0.5rem 0.75rem',
                  borderRadius: '8px',
                }}
              >
                <Volume2 size={14} />
                <span>
                  {selectedRecord.hasRecording
                    ? 'Audio recording available on device'
                    : 'No recording generated (disabled or unsupported on device)'}
                </span>
              </div>
            </div>

            {/* Bottom Actions */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingTop: '1.25rem',
                borderTop: '1px solid #f1f5f9',
                marginTop: '1.5rem',
              }}
            >
              <button
                type="button"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  background: 'none',
                  border: 'none',
                  color: '#dc2626',
                  fontSize: '0.8125rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                }}
              >
                <Trash2 size={14} />
                <span>Delete Call Record</span>
              </button>

              <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>
                Local SQLite Storage
              </span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .history-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
        }

        @media (min-width: 900px) {
          .history-grid {
            grid-template-columns: 1fr 1fr;
            gap: 2.5rem;
          }
        }
      `}</style>
    </section>
  );
}
