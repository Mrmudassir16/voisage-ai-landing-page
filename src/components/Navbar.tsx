'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, PhoneCall, ShieldCheck, ChevronRight } from 'lucide-react';

interface NavbarProps {
  onOpenEarlyAccess: () => void;
}

export default function Navbar({ onOpenEarlyAccess }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'How it Works', href: '#how-it-works' },
    { label: 'Features', href: '#experience' },
    { label: 'Privacy', href: '#privacy' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          transition: 'all 0.25s ease',
          backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.94)' : 'rgba(255, 255, 255, 0.8)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          borderBottom: isScrolled ? '1px solid #e2e8f0' : '1px solid rgba(226, 232, 240, 0.6)',
        }}
      >
        <div className="site-container">
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              height: '4.25rem',
            }}
          >
            {/* Logo */}
            <a
              href="#"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.625rem',
                textDecoration: 'none',
              }}
            >
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '10px',
                  backgroundColor: '#0f172a',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 2px 8px rgba(15, 23, 42, 0.15)',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    background: 'radial-gradient(circle at 70% 30%, rgba(37, 99, 235, 0.8), transparent 70%)',
                  }}
                />
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#ffffff"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ position: 'relative', zIndex: 1 }}
                >
                  <path d="M4 10v4" />
                  <path d="M8 7v10" />
                  <path d="M12 4v16" />
                  <path d="M16 8v8" />
                  <path d="M20 11v2" />
                </svg>
              </div>

              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                  <span
                    style={{
                      fontFamily: 'var(--font-main)',
                      fontWeight: 800,
                      fontSize: '1.1875rem',
                      letterSpacing: '-0.03em',
                      color: '#0f172a',
                    }}
                  >
                    VoiSage
                  </span>
                  <span
                    style={{
                      fontSize: '0.6875rem',
                      fontWeight: 700,
                      color: '#1d4ed8',
                      backgroundColor: '#eff6ff',
                      padding: '0.125rem 0.375rem',
                      borderRadius: '4px',
                      letterSpacing: '0.04em',
                    }}
                  >
                    AI
                  </span>
                </div>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav
              style={{
                display: 'none',
                alignItems: 'center',
                gap: '1.75rem',
              }}
              className="desktop-nav"
            >
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  style={{
                    fontSize: '0.875rem',
                    fontWeight: 500,
                    color: '#475569',
                    textDecoration: 'none',
                    transition: 'color 0.15s ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#0f172a')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#475569')}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Desktop Actions */}
            <div
              style={{
                display: 'none',
                alignItems: 'center',
                gap: '1rem',
              }}
              className="desktop-actions"
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  padding: '0.3rem 0.625rem',
                  borderRadius: '20px',
                  backgroundColor: '#f1f5f9',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  color: '#64748b',
                }}
                title="Supported languages in Stage 1"
              >
                <span style={{ color: '#1e293b' }}>EN</span>
                <span style={{ color: '#cbd5e1' }}>•</span>
                <span style={{ color: '#1e293b' }}>हिन्दी</span>
                <span style={{ color: '#cbd5e1' }}>•</span>
                <span style={{ color: '#1e293b' }}>తెలుగు</span>
              </div>

              <button
                type="button"
                className="btn-primary"
                onClick={onOpenEarlyAccess}
                style={{ padding: '0.5625rem 1.125rem', fontSize: '0.875rem' }}
              >
                <span>Get Early Access</span>
                <ArrowUpRight size={15} />
              </button>
            </div>

            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '40px',
                height: '40px',
                borderRadius: '8px',
                border: '1px solid #e2e8f0',
                background: '#ffffff',
                color: '#0f172a',
                cursor: 'pointer',
              }}
              className="mobile-menu-btn"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div
            style={{
              backgroundColor: '#ffffff',
              borderBottom: '1px solid #e2e8f0',
              padding: '1.25rem 1rem 1.75rem',
              boxShadow: '0 10px 25px rgba(0,0,0,0.08)',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingBottom: '1rem',
                borderBottom: '1px solid #f1f5f9',
                marginBottom: '1rem',
              }}
            >
              <span style={{ fontSize: '0.75rem', fontWeight: 600, color: '#64748b' }}>
                INDIAN LANGUAGES
              </span>
              <span style={{ fontSize: '0.8125rem', fontWeight: 700, color: '#1d4ed8' }}>
                English · हिन्दी · తెలుగు
              </span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    fontSize: '1rem',
                    fontWeight: 600,
                    color: '#0f172a',
                    textDecoration: 'none',
                    padding: '0.5rem 0',
                  }}
                >
                  <span>{link.label}</span>
                  <ChevronRight size={16} color="#94a3b8" />
                </a>
              ))}

              <div style={{ paddingTop: '0.75rem' }}>
                <button
                  type="button"
                  className="btn-primary"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenEarlyAccess();
                  }}
                  style={{ width: '100%', padding: '0.875rem', justifyContent: 'center' }}
                >
                  <span>Get Early Access (Android)</span>
                  <ArrowUpRight size={16} />
                </button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Responsive media query helpers */}
      <style jsx>{`
        @media (min-width: 900px) {
          :global(.desktop-nav) {
            display: flex !important;
          }
          :global(.desktop-actions) {
            display: flex !important;
          }
          :global(.mobile-menu-btn) {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
}
