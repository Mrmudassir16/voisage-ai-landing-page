'use client';

import React, { useState } from 'react';
import { Languages, MessageCircle, Check, ArrowRight } from 'lucide-react';

export default function LanguageSection() {
  const [selectedLang, setSelectedLang] = useState<'english' | 'hindi' | 'telugu'>('english');

  const languageData = {
    english: {
      name: 'English (India)',
      tagline: 'Natural Indian English cadence and vocabulary',
      intro: "Hello, I'm the AI assistant for Rahul. May I ask who's calling and what this is regarding?",
      callerTurn: "Hi, I'm calling from BlueDart with a package delivery for your address.",
      aiResponse: "Thank you. Is there an OTP required, or should the package be left with building security?",
      scriptSnippet: 'Handles mixed pincodes, local apartment references, and standard terms effortlessly.',
      badge: 'Native Indian English'
    },
    hindi: {
      name: 'हिन्दी (Hindi)',
      tagline: 'स्पष्ट और सम्मानजनक बातचीत (Respectful & Clear)',
      intro: "नमस्ते, मैं राहुल के लिए एआई असिस्टेंट हूँ। क्या मैं जान सकता हूँ कि आप कौन बोल रहे हैं और किस बारे में कॉल किया है?",
      callerTurn: "नमस्ते, मैं ब्लू डार्ट से बोल रहा हूँ, आपके पते पर एक पार्सल पहुँचाना है।",
      aiResponse: "धन्यवाद। क्या इसके लिए किसी ओटीपी की आवश्यकता है, या इसे गार्ड के पास रखवाया जा सकता है?",
      scriptSnippet: 'प्राकृतिक हिंदी व्याकरण, बोलचाल की भाषा और सम्मानसूचक शब्दों (आप/जी) का सटीक उपयोग।',
      badge: 'प्राकृतिक हिंदी वार्तालाप'
    },
    telugu: {
      name: 'తెలుగు (Telugu)',
      tagline: 'స్పష్టమైన మరియు సహజమైన తెలుగు సంభాషణ (Clear & Natural)',
      intro: "నమస్కారం, నేను రాహుల్ కోసం మాట్లాడుతున్న AI అసిస్టెంట్‌ని. మీరు ఎవరు మాట్లాడుతున్నారో మరియు కాల్ కారణం ఏమిటో తెలుసుకోవచ్చా?",
      callerTurn: "నమస్కారం అండి, నేను బ్లూడార్ట్ నుండి మాట్లాడుతున్నాను. మీ అడ్రస్‌కి ఒక కొరియర్ డెలివరీ ఉంది.",
      aiResponse: "ధన్యవాదాలు. దీనికి ఏమైనా OTP అవసరమా, లేక గేట్ వద్ద సెక్యూరిటీ వారికి ఇవ్వవచ్చా?",
      scriptSnippet: 'తెలుగు ఉచ్చారణ, సంబోధనలు మరియు సాధారణ డెలివరీ లేదా అపాయింట్‌మెంట్ పదాల స్పష్టమైన గుర్తింపు.',
      badge: 'స్పష్టమైన తెలుగు'
    }
  };

  const current = languageData[selectedLang];

  return (
    <section
      id="languages"
      style={{
        paddingTop: '6.5rem',
        paddingBottom: '6.5rem',
        backgroundColor: '#ffffff',
        borderBottom: '1px solid #e2e8f0',
      }}
    >
      <div className="site-container">
        {/* Header */}
        <div style={{ maxWidth: '750px', marginBottom: '3.5rem' }}>
          <div className="editorial-tag">
            <Languages size={14} />
            <span>Multi-Lingual Core</span>
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
            Speak naturally. In the language you choose.
          </h2>

          <p style={{ fontSize: '1.0625rem', color: '#475569', lineHeight: 1.6 }}>
            In India, conversations flow across English, Hindi, and regional languages.
            VoiSage Stage 1 provides native voice and understanding across English, हिन्दी, and తెలుగు.
          </p>
        </div>

        {/* Language Tabs */}
        <div
          style={{
            display: 'flex',
            gap: '0.75rem',
            marginBottom: '2rem',
            overflowX: 'auto',
            paddingBottom: '4px',
          }}
        >
          <button
            type="button"
            onClick={() => setSelectedLang('english')}
            style={{
              padding: '0.625rem 1.25rem',
              borderRadius: '10px',
              border: '1px solid',
              borderColor: selectedLang === 'english' ? '#1d4ed8' : '#e2e8f0',
              backgroundColor: selectedLang === 'english' ? '#1d4ed8' : '#ffffff',
              color: selectedLang === 'english' ? '#ffffff' : '#475569',
              fontSize: '0.9375rem',
              fontWeight: 700,
              cursor: 'pointer',
              transition: 'all 0.15s ease',
            }}
          >
            English (India)
          </button>

          <button
            type="button"
            onClick={() => setSelectedLang('hindi')}
            style={{
              padding: '0.625rem 1.25rem',
              borderRadius: '10px',
              border: '1px solid',
              borderColor: selectedLang === 'hindi' ? '#1d4ed8' : '#e2e8f0',
              backgroundColor: selectedLang === 'hindi' ? '#1d4ed8' : '#ffffff',
              color: selectedLang === 'hindi' ? '#ffffff' : '#475569',
              fontSize: '0.9375rem',
              fontWeight: 700,
              cursor: 'pointer',
              transition: 'all 0.15s ease',
            }}
          >
            हिन्दी (Hindi)
          </button>

          <button
            type="button"
            onClick={() => setSelectedLang('telugu')}
            style={{
              padding: '0.625rem 1.25rem',
              borderRadius: '10px',
              border: '1px solid',
              borderColor: selectedLang === 'telugu' ? '#1d4ed8' : '#e2e8f0',
              backgroundColor: selectedLang === 'telugu' ? '#1d4ed8' : '#ffffff',
              color: selectedLang === 'telugu' ? '#ffffff' : '#475569',
              fontSize: '0.9375rem',
              fontWeight: 700,
              cursor: 'pointer',
              transition: 'all 0.15s ease',
            }}
          >
            తెలుగు (Telugu)
          </button>
        </div>

        {/* Live Conversation Showcase for selected language */}
        <div
          style={{
            backgroundColor: '#0f172a',
            borderRadius: '24px',
            border: '1px solid #1e293b',
            padding: '2.25rem',
            color: '#ffffff',
            boxShadow: 'var(--shadow-xl)',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '1rem',
              paddingBottom: '1.25rem',
              borderBottom: '1px solid #1e293b',
              marginBottom: '1.5rem',
            }}
          >
            <div>
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
                {current.badge}
              </span>
              <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#f8fafc', marginTop: '0.35rem' }}>
                {current.name}
              </div>
            </div>

            <div style={{ fontSize: '0.8125rem', color: '#94a3b8' }}>
              {current.tagline}
            </div>
          </div>

          {/* Dialogue Turns */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '1.75rem' }}>
            {/* Step 1: VoiSage Greeting */}
            <div>
              <div style={{ fontSize: '0.6875rem', fontWeight: 700, color: '#60a5fa', fontFamily: 'var(--font-mono)', marginBottom: '0.35rem' }}>
                VOISAGE AI (OPENING GREETING)
              </div>
              <div
                style={{
                  backgroundColor: 'rgba(37, 99, 235, 0.12)',
                  border: '1px solid rgba(37, 99, 235, 0.3)',
                  borderRadius: '12px',
                  padding: '1rem',
                  fontSize: '1rem',
                  color: '#bfdbfe',
                  lineHeight: 1.5,
                }}
              >
                &ldquo;{current.intro}&rdquo;
              </div>
            </div>

            {/* Step 2: Caller response */}
            <div>
              <div style={{ fontSize: '0.6875rem', fontWeight: 700, color: '#94a3b8', fontFamily: 'var(--font-mono)', marginBottom: '0.35rem' }}>
                CALLER (BLUEDART COURIER)
              </div>
              <div
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '12px',
                  padding: '1rem',
                  fontSize: '1rem',
                  color: '#f8fafc',
                  lineHeight: 1.5,
                }}
              >
                &ldquo;{current.callerTurn}&rdquo;
              </div>
            </div>

            {/* Step 3: VoiSage natural follow-up */}
            <div>
              <div style={{ fontSize: '0.6875rem', fontWeight: 700, color: '#60a5fa', fontFamily: 'var(--font-mono)', marginBottom: '0.35rem' }}>
                VOISAGE AI (FOLLOW-UP)
              </div>
              <div
                style={{
                  backgroundColor: 'rgba(37, 99, 235, 0.12)',
                  border: '1px solid rgba(37, 99, 235, 0.3)',
                  borderRadius: '12px',
                  padding: '1rem',
                  fontSize: '1rem',
                  color: '#bfdbfe',
                  lineHeight: 1.5,
                }}
              >
                &ldquo;{current.aiResponse}&rdquo;
              </div>
            </div>
          </div>

          {/* Nuance Footnote */}
          <div
            style={{
              padding: '0.875rem 1rem',
              backgroundColor: 'rgba(255, 255, 255, 0.04)',
              borderRadius: '10px',
              border: '1px solid #1e293b',
              fontSize: '0.8125rem',
              color: '#94a3b8',
            }}
          >
            {current.scriptSnippet}
          </div>
        </div>
      </div>
    </section>
  );
}
