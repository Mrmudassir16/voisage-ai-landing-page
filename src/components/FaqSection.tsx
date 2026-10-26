'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FaqItem[] = [
    {
      question: 'What is VoiSage?',
      answer: 'VoiSage is a consumer AI call assistant built for Android users in India. When an unsaved number rings, VoiSage answers, introduces itself as an AI assistant, understands who is calling and why, and lets you watch live or take over when you need to.'
    },
    {
      question: 'How does VoiSage handle unknown calls?',
      answer: 'When AI answering is enabled, VoiSage only answers eligible calls from numbers not saved in your contacts. Calls from saved family, friends, and colleagues always ring your phone directly.'
    },
    {
      question: 'Does VoiSage identify itself as AI?',
      answer: 'Yes, always. At the start of every call, VoiSage states: “Hello, I’m the AI assistant for Rahul. May I ask who is calling and what this is regarding?” VoiSage never impersonates the user, never clones your personal voice, and never misleads callers.'
    },
    {
      question: 'Can I watch the call?',
      answer: 'Yes. Speech is transcribed in real time on your screen so you can read the conversation as it happens without uttering a sound.'
    },
    {
      question: 'Can I take over a call?',
      answer: 'Yes. If a caller needs you or you decide to step in, you tap “Take Over” and the assistant exits the audio channel so you can speak directly. Direct take-over availability depends on your device, carrier, and telephony support.'
    },
    {
      question: 'Which languages are supported?',
      answer: 'Stage 1 supports English (Indian English), हिन्दी (Hindi), and తెలుగు (Telugu), tuned for Indian accents and common code-switching.'
    },
    {
      question: 'Does it work with dual SIM?',
      answer: 'Yes. VoiSage detects incoming calls across supported SIM 1 and SIM 2 slots on dual-SIM Android devices and applies your call-screening rules.'
    },
    {
      question: 'Does it work on every Android phone?',
      answer: 'Telephony routing, permissions, and audio handling can vary between Android versions (Android 12+) and manufacturer skins (Samsung, OnePlus, Xiaomi, Pixel). Supported configurations are documented during our Android beta.'
    }
  ];

  return (
    <section
      id="faq"
      style={{
        paddingTop: '5.5rem',
        paddingBottom: '5.5rem',
        backgroundColor: '#ffffff',
        borderBottom: '1px solid #e2e8f0',
      }}
    >
      <div className="site-container">
        {/* Editorial Heading */}
        <div style={{ maxWidth: '750px', marginBottom: '2.5rem' }}>
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
            Frequently Asked Questions
          </h2>
          <p style={{ fontSize: '1.0625rem', color: '#475569', lineHeight: 1.6 }}>
            Clear details about device support, dual-SIM behavior, and privacy.
          </p>
        </div>

        {/* Compact Accordion */}
        <div style={{ maxWidth: '820px', display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                style={{
                  backgroundColor: isOpen ? '#f8fafc' : '#ffffff',
                  border: '1px solid',
                  borderColor: isOpen ? '#cbd5e1' : '#e2e8f0',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  transition: 'all 0.15s ease',
                }}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  style={{
                    width: '100%',
                    padding: '1.125rem 1.25rem',
                    textAlign: 'left',
                    background: 'none',
                    border: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '1rem',
                    cursor: 'pointer',
                  }}
                >
                  <span
                    style={{
                      fontSize: '0.9375rem',
                      fontWeight: 700,
                      color: isOpen ? '#1d4ed8' : '#0f172a',
                      lineHeight: 1.4,
                    }}
                  >
                    {faq.question}
                  </span>
                  <div style={{ color: isOpen ? '#1d4ed8' : '#94a3b8' }}>
                    {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </div>
                </button>

                {isOpen && (
                  <div
                    style={{
                      padding: '0 1.25rem 1.125rem',
                      fontSize: '0.875rem',
                      color: '#475569',
                      lineHeight: 1.6,
                      borderTop: '1px solid #f1f5f9',
                      paddingTop: '0.75rem',
                    }}
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
