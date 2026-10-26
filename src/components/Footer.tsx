'use client';

import React from 'react';

interface FooterProps {
  onOpenEarlyAccess: () => void;
}

export default function Footer({ onOpenEarlyAccess }: FooterProps) {
  return (
    <footer
      style={{
        backgroundColor: '#070a12',
        borderTop: '1px solid #161e2e',
        paddingTop: '4.5rem',
        paddingBottom: '3rem',
        color: '#94a3b8',
      }}
    >
      <div className="site-container">
        {/* Main Footer Row */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '3rem',
            paddingBottom: '3rem',
            borderBottom: '1px solid #161e2e',
          }}
        >
          {/* Brand & Parent Company Col */}
          <div style={{ maxWidth: '340px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', marginBottom: '0.75rem' }}>
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '8px',
                  backgroundColor: '#1d4ed8',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#ffffff"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 10v4" />
                  <path d="M8 7v10" />
                  <path d="M12 4v16" />
                  <path d="M16 8v8" />
                  <path d="M20 11v2" />
                </svg>
              </div>
              <span style={{ fontSize: '1.25rem', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.02em' }}>
                VoiSage AI
              </span>
            </div>

            <p style={{ fontSize: '0.875rem', color: '#cbd5e1', lineHeight: 1.5, marginBottom: '0.35rem', fontWeight: 500 }}>
              Your conversations, handled intelligently.
            </p>

            <p style={{ fontSize: '0.8125rem', color: '#64748b', lineHeight: 1.5, marginBottom: '1.75rem' }}>
              A consumer AI call assistant for Android users in India.
            </p>

            {/* Official Tech22Blocks Parent Company Presentation */}
            <div>
              <div
                style={{
                  fontSize: '0.6875rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  color: '#64748b',
                  marginBottom: '0.5rem',
                }}
              >
                A PRODUCT BY
              </div>
              {/* Official Tech22Blocks Logo Asset - Preserved Exactly */}
              <div
                style={{
                  display: 'inline-block',
                  backgroundColor: 'rgba(255, 255, 255, 0.04)',
                  padding: '4px 8px',
                  borderRadius: '8px',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/tech22blocks-logo.png`}
                  alt="Tech22Blocks"
                  style={{
                    height: '32px',
                    width: 'auto',
                    display: 'block',
                    objectFit: 'contain',
                  }}
                />
              </div>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <div
              style={{
                fontSize: '0.75rem',
                fontWeight: 700,
                color: '#f8fafc',
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                marginBottom: '1rem',
              }}
            >
              PRODUCT
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <a href="#how-it-works" style={{ fontSize: '0.875rem', color: '#94a3b8', textDecoration: 'none' }}>
                How It Works
              </a>
              <a href="#takeover" style={{ fontSize: '0.875rem', color: '#94a3b8', textDecoration: 'none' }}>
                Live Monitoring
              </a>
              <a href="#takeover" style={{ fontSize: '0.875rem', color: '#94a3b8', textDecoration: 'none' }}>
                Take Over
              </a>
              <a href="#languages" style={{ fontSize: '0.875rem', color: '#94a3b8', textDecoration: 'none' }}>
                Languages
              </a>
            </div>
          </div>

          {/* Trust & Legal Links */}
          <div>
            <div
              style={{
                fontSize: '0.75rem',
                fontWeight: 700,
                color: '#f8fafc',
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                marginBottom: '1rem',
              }}
            >
              TRUST & LEGAL
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <a href="#privacy" style={{ fontSize: '0.875rem', color: '#94a3b8', textDecoration: 'none' }}>
                Privacy
              </a>
              <a href="#faq" style={{ fontSize: '0.875rem', color: '#94a3b8', textDecoration: 'none' }}>
                FAQ
              </a>
              <span style={{ fontSize: '0.875rem', color: '#64748b' }}>
                Terms
              </span>
              <a
                href="mailto:Shivasai@Tech22blocks.in"
                style={{ fontSize: '0.875rem', color: '#60a5fa', textDecoration: 'none' }}
              >
                Contact & Support
              </a>
            </div>
          </div>

          {/* Contact & Support Official Box */}
          <div>
            <div
              style={{
                fontSize: '0.75rem',
                fontWeight: 700,
                color: '#f8fafc',
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                marginBottom: '1rem',
              }}
            >
              CONTACT & SUPPORT
            </div>
            <p style={{ fontSize: '0.8125rem', color: '#64748b', lineHeight: 1.5, marginBottom: '0.75rem' }}>
              For beta inquiries, partnerships, and technical feedback:
            </p>
            <a
              href="mailto:Shivasai@Tech22blocks.in"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                color: '#93c5fd',
                fontSize: '0.875rem',
                fontWeight: 600,
                textDecoration: 'none',
                backgroundColor: 'rgba(37, 99, 235, 0.12)',
                border: '1px solid rgba(37, 99, 235, 0.25)',
                padding: '0.5rem 0.875rem',
                borderRadius: '8px',
                transition: 'all 0.15s ease',
              }}
            >
              <span>Shivasai@Tech22blocks.in</span>
            </a>
          </div>
        </div>

        {/* Bottom copyright */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            paddingTop: '2rem',
            fontSize: '0.8125rem',
            color: '#475569',
          }}
        >
          <div>
            © 2026 Tech22Blocks. All rights reserved.
          </div>

          <div>
            VoiSage AI is an Android application for consumers in India.
          </div>
        </div>
      </div>
    </footer>
  );
}
