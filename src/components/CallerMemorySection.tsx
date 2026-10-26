'use client';

import React from 'react';
import { Bookmark, Shield, AlertTriangle, ArrowRight, RotateCcw, Check } from 'lucide-react';

export default function CallerMemorySection() {
  return (
    <section
      style={{
        paddingTop: '6rem',
        paddingBottom: '6rem',
        backgroundColor: '#f8fafc',
        borderBottom: '1px solid #e2e8f0',
      }}
    >
      <div className="site-container">
        {/* Header */}
        <div style={{ maxWidth: '750px', marginBottom: '3.5rem' }}>
          <div className="editorial-tag">
            <Bookmark size={14} />
            <span>Assistive Context Retention</span>
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
            It remembers useful context without repeating basic questions.
          </h2>

          <p style={{ fontSize: '1.0625rem', color: '#475569', lineHeight: 1.6 }}>
            When a delivery agent or vendor calls back an hour later or the following morning,
            VoiSage doesn&apos;t force them to start from zero. It recalls relevant prior context
            while maintaining safety checks.
          </p>
        </div>

        {/* Repeat Caller Timeline Demonstration */}
        <div className="memory-layout">
          {/* Day 1 Call */}
          <div
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '20px',
              border: '1px solid #e2e8f0',
              padding: '1.75rem',
              boxShadow: 'var(--shadow-sm)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
              <span
                style={{
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  color: '#64748b',
                  backgroundColor: '#f1f5f9',
                  padding: '0.2rem 0.5rem',
                  borderRadius: '4px',
                }}
              >
                CALL 1 • YESTERDAY 4:15 PM
              </span>
              <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>+91 98XXX 44821</span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div>
                <div style={{ fontSize: '0.6875rem', fontWeight: 700, color: '#64748b', marginBottom: '0.2rem' }}>
                  CALLER
                </div>
                <div style={{ backgroundColor: '#f8fafc', padding: '0.75rem', borderRadius: '8px', fontSize: '0.875rem', color: '#1e293b' }}>
                  &ldquo;Hi, I am calling from Urban Company regarding the AC servicing booking scheduled for tomorrow.&rdquo;
                </div>
              </div>

              <div>
                <div style={{ fontSize: '0.6875rem', fontWeight: 700, color: '#1d4ed8', marginBottom: '0.2rem' }}>
                  VOISAGE
                </div>
                <div style={{ backgroundColor: '#eff6ff', padding: '0.75rem', borderRadius: '8px', fontSize: '0.875rem', color: '#1e3a8a' }}>
                  &ldquo;Thank you. I have recorded that you are from Urban Company regarding the AC service.&rdquo;
                </div>
              </div>
            </div>

            <div
              style={{
                marginTop: '1.25rem',
                padding: '0.625rem 0.75rem',
                backgroundColor: '#f1f5f9',
                borderRadius: '8px',
                fontSize: '0.75rem',
                color: '#475569',
              }}
            >
              <strong>Saved Context:</strong> Urban Company • AC Service Appointment
            </div>
          </div>

          {/* Day 2 Repeat Call */}
          <div
            style={{
              backgroundColor: '#0f172a',
              borderRadius: '20px',
              border: '1px solid #1e293b',
              padding: '1.75rem',
              color: '#ffffff',
              boxShadow: 'var(--shadow-lg)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
              <span
                style={{
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  color: '#60a5fa',
                  backgroundColor: 'rgba(37, 99, 235, 0.2)',
                  padding: '0.2rem 0.5rem',
                  borderRadius: '4px',
                }}
              >
                CALL 2 • TODAY 10:00 AM (REPEAT)
              </span>
              <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>+91 98XXX 44821</span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div>
                <div style={{ fontSize: '0.6875rem', fontWeight: 700, color: '#94a3b8', marginBottom: '0.2rem' }}>
                  VOISAGE (UTILIZING SAVED CONTEXT)
                </div>
                <div
                  style={{
                    backgroundColor: 'rgba(37, 99, 235, 0.15)',
                    border: '1px solid #1d4ed8',
                    padding: '0.75rem',
                    borderRadius: '8px',
                    fontSize: '0.875rem',
                    color: '#bfdbfe',
                    lineHeight: 1.45,
                  }}
                >
                  &ldquo;Hello again! Are you calling with an update regarding the Urban Company AC servicing appointment?&rdquo;
                </div>
              </div>

              <div>
                <div style={{ fontSize: '0.6875rem', fontWeight: 700, color: '#34d399', marginBottom: '0.2rem' }}>
                  CALLER
                </div>
                <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.08)', padding: '0.75rem', borderRadius: '8px', fontSize: '0.875rem', color: '#f8fafc' }}>
                  &ldquo;Yes! The technician will be arriving at 11:30 AM instead of 10 AM. Just wanted to confirm.&rdquo;
                </div>
              </div>
            </div>

            <div
              style={{
                marginTop: '1.25rem',
                padding: '0.625rem 0.75rem',
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                borderRadius: '8px',
                fontSize: '0.75rem',
                color: '#94a3b8',
              }}
            >
              ✓ Context matched • Avoided repeating introductory screening
            </div>
          </div>
        </div>

        {/* Clear boundaries and honesty alert */}
        <div
          style={{
            marginTop: '2rem',
            backgroundColor: '#ffffff',
            border: '1px solid #e2e8f0',
            borderRadius: '16px',
            padding: '1.25rem 1.5rem',
            display: 'flex',
            alignItems: 'flex-start',
            gap: '1rem',
          }}
        >
          <Shield size={20} color="#1d4ed8" style={{ flexShrink: 0, marginTop: '2px' }} />
          <div>
            <div style={{ fontSize: '0.875rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.25rem' }}>
              Responsible Context Boundaries
            </div>
            <p style={{ fontSize: '0.8125rem', color: '#64748b', lineHeight: 1.5 }}>
              Phone numbers can be shared, spoofed, or recycled. VoiSage uses memory solely as helpful conversational context,
              <strong> not as biometric proof of legal identity</strong>. Repeat callers are never automatically transferred or granted sensitive access
              without explicit user rules and permission.
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .memory-layout {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
        }

        @media (min-width: 900px) {
          .memory-layout {
            grid-template-columns: 1fr 1fr;
            gap: 2.5rem;
          }
        }
      `}</style>
    </section>
  );
}
