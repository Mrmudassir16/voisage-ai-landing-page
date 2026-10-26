'use client';

import React from 'react';
import { Briefcase, Car, Coffee, ArrowRight } from 'lucide-react';

export default function ProblemSection() {
  const situations = [
    {
      icon: Briefcase,
      title: 'Working',
      desc: 'In deep focus or an important meeting.',
    },
    {
      icon: Car,
      title: 'Driving',
      desc: 'Navigating traffic when picking up is unsafe.',
    },
    {
      icon: Coffee,
      title: 'Already Busy',
      desc: 'With family, resting, or simply occupied.',
    },
  ];

  return (
    <section
      style={{
        paddingTop: '5.5rem',
        paddingBottom: '5.5rem',
        backgroundColor: '#f8fafc',
        borderBottom: '1px solid #e2e8f0',
        position: 'relative',
      }}
    >
      <div className="site-container">
        {/* Editorial Statement */}
        <div style={{ maxWidth: '820px', marginBottom: '3rem' }}>
          <h2
            style={{
              fontSize: 'clamp(2.15rem, 4vw, 3.25rem)',
              fontWeight: 800,
              color: '#0f172a',
              lineHeight: 1.12,
              letterSpacing: '-0.03em',
              marginBottom: '1rem',
            }}
          >
            Not every call deserves your attention.
          </h2>

          <p
            style={{
              fontSize: 'clamp(1.05rem, 1.8vw, 1.25rem)',
              color: '#475569',
              lineHeight: 1.6,
            }}
          >
            In India, phones ring constantly with unsaved numbers. Most are routine deliveries, appointment
            confirmations, or telemarketing. Every ring forces you to pause, check, and gamble on who is calling.
          </p>
        </div>

        {/* 3 Situations Editorial Row */}
        <div className="situations-grid" style={{ marginBottom: '3.5rem' }}>
          {situations.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                style={{
                  borderLeft: '2px solid #cbd5e1',
                  paddingLeft: '1.25rem',
                  paddingTop: '0.25rem',
                  paddingBottom: '0.25rem',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.35rem' }}>
                  <Icon size={18} color="#1d4ed8" />
                  <span style={{ fontSize: '1.125rem', fontWeight: 700, color: '#0f172a' }}>
                    {item.title}
                  </span>
                </div>
                <p style={{ fontSize: '0.9375rem', color: '#64748b', lineHeight: 1.5 }}>
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Transition statement */}
        <div
          style={{
            paddingTop: '2rem',
            borderTop: '1px solid #e2e8f0',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'baseline',
            justifyContent: 'space-between',
            gap: '1rem',
          }}
        >
          <div style={{ fontSize: 'clamp(1.5rem, 2.8vw, 2.25rem)', fontWeight: 800, color: '#0f172a', letterSpacing: '-0.02em' }}>
            So let VoiSage answer first.
          </div>
          <div style={{ fontSize: '0.9375rem', color: '#64748b', maxWidth: '420px', lineHeight: 1.5 }}>
            You stay focused. The assistant discovers who is on the line, what they need, and keeps you informed.
          </div>
        </div>
      </div>

      <style jsx>{`
        .situations-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
        }

        @media (min-width: 768px) {
          .situations-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 2.5rem;
          }
        }
      `}</style>
    </section>
  );
}
