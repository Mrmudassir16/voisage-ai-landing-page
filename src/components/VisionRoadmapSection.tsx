'use client';

import React from 'react';
import { ArrowDown, CheckCircle2, Clock, Sparkles } from 'lucide-react';

export default function VisionRoadmapSection() {
  return (
    <section
      style={{
        paddingTop: '5.5rem',
        paddingBottom: '5.5rem',
        backgroundColor: '#f8fafc',
        borderBottom: '1px solid #e2e8f0',
      }}
    >
      <div className="site-container">
        {/* Editorial Heading */}
        <div style={{ maxWidth: '780px', marginBottom: '3rem' }}>
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
            VoiSage is only getting started.
          </h2>
          <p style={{ fontSize: '1.0625rem', color: '#475569', lineHeight: 1.6 }}>
            Here is our honest breakdown between what is available today in our Android beta,
            what is coming next, and our longer-term product vision.
          </p>
        </div>

        {/* Editorial Progression Timeline */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {/* Phase 1: Today */}
          <div
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '20px',
              border: '2px solid #1d4ed8',
              padding: '2rem',
              boxShadow: 'var(--shadow-md)',
            }}
          >
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', marginBottom: '1rem' }}>
              <span
                style={{
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  color: '#1d4ed8',
                  backgroundColor: '#eff6ff',
                  padding: '0.25rem 0.625rem',
                  borderRadius: '999px',
                }}
              >
                LIVE IN STAGE 1 ANDROID BETA
              </span>
              <span style={{ fontSize: '0.8125rem', color: '#059669', fontWeight: 600 }}>
                ● Active Core Product
              </span>
            </div>

            <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.75rem' }}>
              Reliable Call Handling, Live Monitoring & Control
            </h3>

            <p style={{ fontSize: '0.9375rem', color: '#475569', lineHeight: 1.6, marginBottom: '1.25rem' }}>
              Answers eligible unknown numbers, identifies itself as AI, captures caller identity and purpose,
              streams live transcripts, supports Take Over where available, delivers concise summaries,
              and supports English, Hindi, and Telugu across dual-SIM Android devices.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', fontSize: '0.8125rem', color: '#1e293b' }}>
              <span style={{ backgroundColor: '#f1f5f9', padding: '0.2rem 0.5rem', borderRadius: '4px' }}>✓ Unsaved Call Pickup</span>
              <span style={{ backgroundColor: '#f1f5f9', padding: '0.2rem 0.5rem', borderRadius: '4px' }}>✓ Real-time Monitoring</span>
              <span style={{ backgroundColor: '#f1f5f9', padding: '0.2rem 0.5rem', borderRadius: '4px' }}>✓ One-Tap Take Over</span>
              <span style={{ backgroundColor: '#f1f5f9', padding: '0.2rem 0.5rem', borderRadius: '4px' }}>✓ Post-Call Summaries</span>
              <span style={{ backgroundColor: '#f1f5f9', padding: '0.2rem 0.5rem', borderRadius: '4px' }}>✓ Dual-SIM Support</span>
            </div>
          </div>

          {/* Stepper Arrow */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <ArrowDown size={20} color="#94a3b8" />
          </div>

          {/* Phase 2: Next */}
          <div
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '20px',
              border: '1px solid #cbd5e1',
              padding: '1.75rem',
            }}
          >
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', marginBottom: '0.75rem' }}>
              <span
                style={{
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  color: '#2563eb',
                  backgroundColor: '#eff6ff',
                  padding: '0.25rem 0.625rem',
                  borderRadius: '999px',
                }}
              >
                COMING SOON (STAGE 2)
              </span>
              <span style={{ fontSize: '0.8125rem', color: '#64748b' }}>In Active Development</span>
            </div>

            <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.5rem' }}>
              Smarter Screening & Custom Persona Rules
            </h3>

            <p style={{ fontSize: '0.9375rem', color: '#64748b', lineHeight: 1.55 }}>
              Heuristic spam and robocall blocking, tailored greetings for different caller categories,
              instant WhatsApp summary notifications, and calendar busy-status detection.
            </p>
          </div>

          {/* Stepper Arrow */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <ArrowDown size={20} color="#94a3b8" />
          </div>

          {/* Phase 3: Further Ahead */}
          <div
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '20px',
              border: '1px dashed #cbd5e1',
              padding: '1.75rem',
            }}
          >
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', marginBottom: '0.75rem' }}>
              <span
                style={{
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  color: '#7c3aed',
                  backgroundColor: '#f5f3ff',
                  padding: '0.25rem 0.625rem',
                  borderRadius: '999px',
                }}
              >
                FUTURE ROADMAP (STAGE 3)
              </span>
              <span style={{ fontSize: '0.8125rem', color: '#94a3b8' }}>Product Vision</span>
            </div>

            <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.5rem' }}>
              Proactive Task Assistant & Pan-Indian Languages
            </h3>

            <p style={{ fontSize: '0.9375rem', color: '#64748b', lineHeight: 1.55 }}>
              Autonomous appointment rescheduling within user bounds, expansion to Tamil, Kannada, Marathi,
              and Bengali, and two-way messaging coordination for documents and delivery links.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
