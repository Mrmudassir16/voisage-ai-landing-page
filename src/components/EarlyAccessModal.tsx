'use client';

import React, { useState } from 'react';
import { X, CheckCircle2, ShieldCheck, Smartphone, Sparkles, ArrowRight } from 'lucide-react';

interface EarlyAccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function EarlyAccessModal({ isOpen, onClose }: EarlyAccessModalProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [deviceModel, setDeviceModel] = useState('');
  const [preferredLang, setPreferredLang] = useState('English');
  const [simType, setSimType] = useState('dual');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setName('');
    setPhone('');
    setDeviceModel('');
    onClose();
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem',
        backgroundColor: 'rgba(15, 23, 42, 0.7)',
        backdropFilter: 'blur(8px)',
      }}
      onClick={onClose}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '520px',
          backgroundColor: '#ffffff',
          borderRadius: '20px',
          boxShadow: '0 25px 50px -12px rgba(15, 23, 42, 0.25)',
          border: '1px solid #e2e8f0',
          position: 'relative',
          overflow: 'hidden',
          animation: 'fadeInModal 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header bar with accent */}
        <div
          style={{
            height: '4px',
            background: 'linear-gradient(90deg, #1d4ed8, #3b82f6, #60a5fa)',
          }}
        />

        <button
          type="button"
          onClick={onClose}
          aria-label="Close modal"
          style={{
            position: 'absolute',
            top: '1rem',
            right: '1rem',
            width: '32px',
            height: '32px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '50%',
            background: '#f1f5f9',
            border: 'none',
            color: '#64748b',
            cursor: 'pointer',
          }}
        >
          <X size={18} />
        </button>

        <div style={{ padding: '2rem 1.75rem 2rem' }}>
          {!isSubmitted ? (
            <>
              <div style={{ marginBottom: '1.5rem' }}>
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.375rem',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    color: '#1d4ed8',
                    backgroundColor: '#eff6ff',
                    padding: '0.25rem 0.625rem',
                    borderRadius: '999px',
                    marginBottom: '0.75rem',
                  }}
                >
                  <Smartphone size={13} />
                  <span>STAGE 1 MVP • ANDROID BETA (INDIA)</span>
                </div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.35rem' }}>
                  Request Early Access
                </h3>
                <p style={{ fontSize: '0.875rem', color: '#64748b', lineHeight: 1.5 }}>
                  Be among the first to experience intelligent call answering on your Android phone.
                  Supports unsaved unknown numbers, dual-SIM setups, and Indian languages.
                </p>
              </div>

              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div>
                  <label
                    style={{
                      display: 'block',
                      fontSize: '0.8125rem',
                      fontWeight: 600,
                      color: '#1e293b',
                      marginBottom: '0.375rem',
                    }}
                  >
                    Your Full Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rahul Sharma"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '0.625rem 0.875rem',
                      fontSize: '0.875rem',
                      borderRadius: '8px',
                      border: '1px solid #cbd5e1',
                      outline: 'none',
                      backgroundColor: '#f8fafc',
                      transition: 'border-color 0.15s ease',
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = '#2563eb';
                      e.target.style.backgroundColor = '#ffffff';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = '#cbd5e1';
                      e.target.style.backgroundColor = '#f8fafc';
                    }}
                  />
                </div>

                <div>
                  <label
                    style={{
                      display: 'block',
                      fontSize: '0.8125rem',
                      fontWeight: 600,
                      color: '#1e293b',
                      marginBottom: '0.375rem',
                    }}
                  >
                    WhatsApp / Mobile Number (India)
                  </label>
                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <div
                      style={{
                        padding: '0.625rem 0.75rem',
                        fontSize: '0.875rem',
                        fontWeight: 600,
                        borderRadius: '8px',
                        border: '1px solid #cbd5e1',
                        backgroundColor: '#f1f5f9',
                        color: '#475569',
                      }}
                    >
                      +91
                    </div>
                    <input
                      type="tel"
                      required
                      pattern="[0-9]{10}"
                      placeholder="9876543210"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      style={{
                        flex: 1,
                        padding: '0.625rem 0.875rem',
                        fontSize: '0.875rem',
                        borderRadius: '8px',
                        border: '1px solid #cbd5e1',
                        outline: 'none',
                        backgroundColor: '#f8fafc',
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = '#2563eb';
                        e.target.style.backgroundColor = '#ffffff';
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = '#cbd5e1';
                        e.target.style.backgroundColor = '#f8fafc';
                      }}
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                  <div>
                    <label
                      style={{
                        display: 'block',
                        fontSize: '0.8125rem',
                        fontWeight: 600,
                        color: '#1e293b',
                        marginBottom: '0.375rem',
                      }}
                    >
                      Primary Language
                    </label>
                    <select
                      value={preferredLang}
                      onChange={(e) => setPreferredLang(e.target.value)}
                      style={{
                        width: '100%',
                        padding: '0.625rem 0.75rem',
                        fontSize: '0.875rem',
                        borderRadius: '8px',
                        border: '1px solid #cbd5e1',
                        backgroundColor: '#f8fafc',
                        color: '#0f172a',
                        outline: 'none',
                      }}
                    >
                      <option value="English">English (India)</option>
                      <option value="Hindi">हिन्दी (Hindi)</option>
                      <option value="Telugu">తెలుగు (Telugu)</option>
                    </select>
                  </div>

                  <div>
                    <label
                      style={{
                        display: 'block',
                        fontSize: '0.8125rem',
                        fontWeight: 600,
                        color: '#1e293b',
                        marginBottom: '0.375rem',
                      }}
                    >
                      SIM Configuration
                    </label>
                    <select
                      value={simType}
                      onChange={(e) => setSimType(e.target.value)}
                      style={{
                        width: '100%',
                        padding: '0.625rem 0.75rem',
                        fontSize: '0.875rem',
                        borderRadius: '8px',
                        border: '1px solid #cbd5e1',
                        backgroundColor: '#f8fafc',
                        color: '#0f172a',
                        outline: 'none',
                      }}
                    >
                      <option value="dual">Dual SIM (Active)</option>
                      <option value="single">Single SIM</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    style={{
                      display: 'block',
                      fontSize: '0.8125rem',
                      fontWeight: 600,
                      color: '#1e293b',
                      marginBottom: '0.375rem',
                    }}
                  >
                    Android Device Model (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Samsung Galaxy S23, OnePlus 12, Pixel 8"
                    value={deviceModel}
                    onChange={(e) => setDeviceModel(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '0.625rem 0.875rem',
                      fontSize: '0.875rem',
                      borderRadius: '8px',
                      border: '1px solid #cbd5e1',
                      backgroundColor: '#f8fafc',
                      outline: 'none',
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = '#2563eb';
                      e.target.style.backgroundColor = '#ffffff';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = '#cbd5e1';
                      e.target.style.backgroundColor = '#f8fafc';
                    }}
                  />
                </div>

                <div
                  style={{
                    backgroundColor: '#f8fafc',
                    border: '1px solid #e2e8f0',
                    borderRadius: '8px',
                    padding: '0.625rem 0.75rem',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.5rem',
                  }}
                >
                  <ShieldCheck size={16} color="#059669" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span style={{ fontSize: '0.75rem', color: '#64748b', lineHeight: 1.4 }}>
                    We respect your privacy. Beta invitations are rolled out progressively based on device
                    and carrier validation. No spam, ever.
                  </span>
                </div>

                <button
                  type="submit"
                  className="btn-primary"
                  disabled={isSubmitting}
                  style={{
                    width: '100%',
                    padding: '0.875rem',
                    fontSize: '0.9375rem',
                    marginTop: '0.5rem',
                  }}
                >
                  {isSubmitting ? 'Reserving Your Spot...' : 'Join Android Early Access'}
                  {!isSubmitting && <ArrowRight size={16} />}
                </button>
              </form>
            </>
          ) : (
            <div style={{ textAlign: 'center', padding: '1rem 0' }}>
              <div
                style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '50%',
                  backgroundColor: '#ecfdf5',
                  color: '#059669',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.25rem',
                }}
              >
                <CheckCircle2 size={32} />
              </div>
              <h3 style={{ fontSize: '1.375rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.5rem' }}>
                You are on the list!
              </h3>
              <p style={{ fontSize: '0.875rem', color: '#64748b', lineHeight: 1.5, marginBottom: '1.5rem' }}>
                Thank you, <strong>{name}</strong>. We will notify you at{' '}
                <strong>+91 {phone}</strong> as soon as the Android beta build opens for your device.
              </p>

              <div
                style={{
                  backgroundColor: '#f8fafc',
                  border: '1px solid #e2e8f0',
                  borderRadius: '10px',
                  padding: '1rem',
                  textAlign: 'left',
                  fontSize: '0.8125rem',
                  color: '#475569',
                  marginBottom: '1.5rem',
                }}
              >
                <div style={{ fontWeight: 600, color: '#0f172a', marginBottom: '0.35rem' }}>
                  What happens next?
                </div>
                <ul style={{ paddingLeft: '1.25rem', lineHeight: 1.6 }}>
                  <li>You will receive an invite to the internal Google Play testing track.</li>
                  <li>Works for unsaved unknown calls with full user monitoring and takeover.</li>
                  <li>Compatible with Dual-SIM Jio/Airtel/Vi configurations.</li>
                </ul>
              </div>

              <button
                type="button"
                className="btn-secondary"
                onClick={handleReset}
                style={{ width: '100%', padding: '0.75rem' }}
              >
                Done
              </button>
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInModal {
          from {
            opacity: 0;
            transform: scale(0.96);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
}
