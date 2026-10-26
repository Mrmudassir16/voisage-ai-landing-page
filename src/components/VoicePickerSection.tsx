'use client';

import React, { useState } from 'react';
import { Volume2, Play, Pause, Check, SlidersHorizontal, Sparkles } from 'lucide-react';

interface VoiceOption {
  id: string;
  name: string;
  language: string;
  tone: string;
  gender: 'Feminine' | 'Masculine';
  sampleQuote: string;
}

export default function VoicePickerSection() {
  const [selectedVoiceId, setSelectedVoiceId] = useState('en-1');
  const [playingVoiceId, setPlayingVoiceId] = useState<string | null>(null);

  const voices: VoiceOption[] = [
    {
      id: 'en-1',
      name: 'Voice 01 — Aditi',
      language: 'English (India)',
      tone: 'Calm & Courteous',
      gender: 'Feminine',
      sampleQuote: "Hello, I'm the AI assistant for Rahul. May I ask who is calling?"
    },
    {
      id: 'en-2',
      name: 'Voice 02 — Rohan',
      language: 'English (India)',
      tone: 'Crisp & Professional',
      gender: 'Masculine',
      sampleQuote: "Hi, I'm the assistant for Rahul. Could you specify the reason for your call?"
    },
    {
      id: 'hi-1',
      name: 'Voice 01 — Priya',
      language: 'हिन्दी (Hindi)',
      tone: 'Warm & Respectful',
      gender: 'Feminine',
      sampleQuote: "नमस्ते, मैं राहुल के लिए कॉल असिस्ट कर रही हूँ। क्या मैं आपका नाम जान सकती हूँ?"
    },
    {
      id: 'hi-2',
      name: 'Voice 02 — Aarav',
      language: 'हिन्दी (Hindi)',
      tone: 'Direct & Assured',
      gender: 'Masculine',
      sampleQuote: "नमस्ते, राहुल जी की तरफ से कॉल संभाल रहा हूँ। कृपया बताइए क्या काम है?"
    },
    {
      id: 'te-1',
      name: 'Voice 01 — Kavya',
      language: 'తెలుగు (Telugu)',
      tone: 'Friendly & Natural',
      gender: 'Feminine',
      sampleQuote: "నమస్కారం, రాహుల్ గారి తరపున మాట్లాడుతున్నాను. మీరు ఎవరండి?"
    },
    {
      id: 'te-2',
      name: 'Voice 02 — Karthik',
      language: 'తెలుగు (Telugu)',
      tone: 'Clear & Polished',
      gender: 'Masculine',
      sampleQuote: "నమస్కారం, కాల్ వివరాలు మరియు మీ పేరు చెప్తారా అండి?"
    }
  ];

  const togglePlay = (id: string) => {
    if (playingVoiceId === id) {
      setPlayingVoiceId(null);
    } else {
      setPlayingVoiceId(id);
      setTimeout(() => {
        setPlayingVoiceId(null);
      }, 3500);
    }
  };

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
        <div style={{ maxWidth: '720px', marginBottom: '3.5rem' }}>
          <div className="editorial-tag">
            <Volume2 size={14} />
            <span>Voice Persona Customization</span>
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
            Choose your VoiSage voice.
          </h2>

          <p style={{ fontSize: '1.0625rem', color: '#475569', lineHeight: 1.6 }}>
            Select the tone and voice profile that represents your personal boundary.
            Preview voice options across English, Hindi, and Telugu.
          </p>
        </div>

        {/* Voices Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1.25rem',
            marginBottom: '2rem',
          }}
        >
          {voices.map((v) => {
            const isSelected = selectedVoiceId === v.id;
            const isPlaying = playingVoiceId === v.id;

            return (
              <div
                key={v.id}
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '16px',
                  border: '1px solid',
                  borderColor: isSelected ? '#1d4ed8' : '#e2e8f0',
                  padding: '1.5rem',
                  boxShadow: isSelected ? 'var(--shadow-md)' : 'var(--shadow-sm)',
                  transition: 'all 0.2s ease',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                    <span
                      style={{
                        fontSize: '0.6875rem',
                        fontWeight: 700,
                        color: '#1d4ed8',
                        backgroundColor: '#eff6ff',
                        padding: '0.2rem 0.5rem',
                        borderRadius: '4px',
                      }}
                    >
                      {v.language}
                    </span>

                    <span style={{ fontSize: '0.75rem', color: '#64748b' }}>
                      {v.gender} • {v.tone}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.125rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.5rem' }}>
                    {v.name}
                  </h3>

                  <div
                    style={{
                      backgroundColor: '#f8fafc',
                      border: '1px solid #f1f5f9',
                      borderRadius: '8px',
                      padding: '0.75rem',
                      fontSize: '0.8125rem',
                      color: '#475569',
                      lineHeight: 1.45,
                      marginBottom: '1.25rem',
                      minHeight: '52px',
                    }}
                  >
                    &ldquo;{v.sampleQuote}&rdquo;
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.75rem' }}>
                  <button
                    type="button"
                    onClick={() => togglePlay(v.id)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      backgroundColor: isPlaying ? '#0f172a' : '#f1f5f9',
                      color: isPlaying ? '#ffffff' : '#1e293b',
                      border: 'none',
                      borderRadius: '8px',
                      padding: '0.5rem 0.875rem',
                      fontSize: '0.8125rem',
                      fontWeight: 600,
                      cursor: 'pointer',
                    }}
                  >
                    {isPlaying ? <Pause size={14} /> : <Play size={14} />}
                    <span>{isPlaying ? 'Playing Sample...' : 'Preview Voice'}</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setSelectedVoiceId(v.id)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      backgroundColor: isSelected ? '#1d4ed8' : 'transparent',
                      color: isSelected ? '#ffffff' : '#64748b',
                      border: isSelected ? 'none' : '1px solid #cbd5e1',
                      borderRadius: '8px',
                      padding: '0.5rem 0.875rem',
                      fontSize: '0.8125rem',
                      fontWeight: 600,
                      cursor: 'pointer',
                    }}
                  >
                    {isSelected && <Check size={14} />}
                    <span>{isSelected ? 'Active Voice' : 'Select'}</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Note on provider synthesis */}
        <div
          style={{
            backgroundColor: '#ffffff',
            border: '1px solid #e2e8f0',
            borderRadius: '12px',
            padding: '1rem 1.25rem',
            fontSize: '0.8125rem',
            color: '#64748b',
            lineHeight: 1.5,
          }}
        >
          <strong>Voice Availability Note:</strong> Voice models and gender options depend on the configured speech synthesis engine
          and carrier latency requirements. Changing your voice setting alters the assistant&apos;s synthesized speech; it never modifies the incoming caller&apos;s audio.
        </div>
      </div>
    </section>
  );
}
