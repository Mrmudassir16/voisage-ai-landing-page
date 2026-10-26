'use client';

import React from 'react';
import { ArrowRight, Smartphone } from 'lucide-react';

interface FinalCtaSectionProps {
  onOpenEarlyAccess: () => void;
}

export default function FinalCtaSection({ onOpenEarlyAccess }: FinalCtaSectionProps) {
  return (
    <section
      style={{
        paddingTop: '6rem',
        paddingBottom: '6rem',
        backgroundColor: '#0b111e',
        color: '#ffffff',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background ambient lighting */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '600px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(29, 78, 216, 0.25) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div className="site-container" style={{ position: 'relative', zIndex: 1 }}>
        <div
          style={{
            maxWidth: '780px',
            margin: '0 auto',
            textAlign: 'center',
          }}
        >
          <h2
            style={{
              fontSize: 'clamp(2.2rem, 4.2vw, 3.75rem)',
              fontWeight: 800,
              color: '#ffffff',
              lineHeight: 1.1,
              letterSpacing: '-0.035em',
              marginBottom: '1.25rem',
            }}
          >
            Let VoiSage handle the calls you don&apos;t have time for.
          </h2>

          <p
            style={{
              fontSize: 'clamp(1.1rem, 2vw, 1.35rem)',
              color: '#93c5fd',
              fontWeight: 500,
              lineHeight: 1.45,
              marginBottom: '2.5rem',
            }}
          >
            Stay focused. Know what matters. Step in when you need to.
          </p>

          <div style={{ marginBottom: '2.5rem' }}>
            <button
              type="button"
              className="btn-primary"
              onClick={onOpenEarlyAccess}
              style={{
                padding: '0.9375rem 2.25rem',
                fontSize: '1.0625rem',
                borderRadius: '10px',
              }}
            >
              <span>Join the Early Access List</span>
              <ArrowRight size={18} />
            </button>
          </div>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '1.25rem',
              fontSize: '0.8125rem',
              color: '#94a3b8',
            }}
          >
            <span>Android Beta</span>
            <span>•</span>
            <span>Dual-SIM Supported</span>
            <span>•</span>
            <span>English · हिन्दी · తెలుగు</span>
          </div>
        </div>
      </div>
    </section>
  );
}
