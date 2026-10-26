'use client';

import React, { useState } from 'react';
import { Languages, Volume2, Play, Pause, Check } from 'lucide-react';

interface VoiceOption {
  id: string;
  name: string;
  lang: string;
  tone: string;
  gender: string;
}

export default function LanguageAndVoiceSection() {
  const [selectedLang, setSelectedLang] = useState<'english' | 'hindi' | 'telugu'>('english');
  const [activeVoiceId, setActiveVoiceId] = useState('en-1');
  const [playingVoiceId, setPlayingVoiceId] = useState<string | null>(null);

  const languageData = {
    english: {
      name: 'English (India)',
      intro: "“Hello, I'm the AI assistant for Rahul. May I ask who's calling and what this is regarding?”",
      response: "“Hi, this is Suresh from BlueDart. I have a package delivery for your address.”",
      followup: "“Thank you. Does this shipment require an OTP, or can it be left with building security?”",
      nuance: 'Handles Indian English, mixed pincodes, and local address references naturally.',
    },
    hindi: {
      name: 'हिन्दी (Hindi)',
      intro: "“नमस्ते, मैं राहुल के लिए एआई असिस्टेंट हूँ। क्या मैं जान सकता हूँ कि आप कौन बोल रहे हैं और किस बारे में कॉल किया है?”",
      response: "“नमस्ते, मैं ब्लू डार्ट से बोल रहा हूँ, आपके पते पर एक पार्सल पहुँचाना है।”",
      followup: "“धन्यवाद। क्या इसके लिए किसी ओटीपी की आवश्यकता है, या इसे गार्ड के पास रखवाया जा सकता है?”",
      nuance: 'प्राकृतिक हिंदी व्याकरण, बोलचाल की भाषा और सम्मानसूचक शब्दों (आप/जी) का सटीक उपयोग।',
    },
    telugu: {
      name: 'తెలుగు (Telugu)',
      intro: "“నమస్కారం, నేను రాహుల్ కోసం మాట్లాడుతున్న AI అసిస్టెంట్‌ని. మీరు ఎవరు మాట్లాడుతున్నారో తెలుసుకోవచ్చా?”",
      response: "“నమస్కారం అండి, నేను బ్లూడార్ట్ నుండి మాట్లాడుతున్నాను. మీ అడ్రస్‌కి కొరియర్ డెలివరీ ఉంది.”",
      followup: "“ధన్యవాదాలు. దీనికి ఏమైనా OTP అవసరమా, లేక గేట్ వద్ద సెక్యూరిటీ వారికి ఇవ్వవచ్చా?”",
      nuance: 'స్పష్టమైన తెలుగు ఉచ్చారణ, సంబోధనలు మరియు సాధారణ డెలివరీ లేదా అపాయింట్‌మెంట్ పదాల స్పష్టమైన గుర్తింపు.',
    }
  };

  const voices: VoiceOption[] = [
    { id: 'en-1', name: 'Aditi', lang: 'English', tone: 'Calm & Courteous', gender: 'Feminine' },
    { id: 'en-2', name: 'Rohan', lang: 'English', tone: 'Crisp & Professional', gender: 'Masculine' },
    { id: 'hi-1', name: 'Priya', lang: 'हिन्दी', tone: 'Warm & Respectful', gender: 'Feminine' },
    { id: 'hi-2', name: 'Aarav', lang: 'हिन्दी', tone: 'Direct & Assured', gender: 'Masculine' },
    { id: 'te-1', name: 'Kavya', lang: 'తెలుగు', tone: 'Friendly & Natural', gender: 'Feminine' },
    { id: 'te-2', name: 'Karthik', lang: 'తెలుగు', tone: 'Clear & Polished', gender: 'Masculine' },
  ];

  const currentLang = languageData[selectedLang];

  const handlePreviewVoice = (id: string) => {
    if (playingVoiceId === id) {
      setPlayingVoiceId(null);
    } else {
      setPlayingVoiceId(id);
      setTimeout(() => setPlayingVoiceId(null), 3000);
    }
  };

  return (
    <section
      id="languages"
      style={{
        paddingTop: '5.5rem',
        paddingBottom: '5.5rem',
        backgroundColor: '#f8fafc',
        borderBottom: '1px solid #e2e8f0',
      }}
    >
      <div className="site-container">
        {/* Editorial Heading */}
        <div style={{ maxWidth: '780px', marginBottom: '2.5rem' }}>
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
            Speak naturally. Choose how VoiSage sounds.
          </h2>
          <p style={{ fontSize: '1.0625rem', color: '#475569', lineHeight: 1.6 }}>
            VoiSage understands Indian conversational contexts in English, हिन्दी, and తెలుగు.
            Pick the language and voice persona that best represents your phone boundary.
          </p>
        </div>

        {/* Combined Layout: Dialogue Showcase + Compact Voice Selector */}
        <div className="lang-voice-grid">
          {/* Left Column: Language Conversation Demo */}
          <div
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '20px',
              border: '1px solid #e2e8f0',
              padding: '1.75rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div>
              {/* Language Pills */}
              <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.25rem' }}>
                {(['english', 'hindi', 'telugu'] as const).map((lang) => (
                  <button
                    key={lang}
                    type="button"
                    onClick={() => setSelectedLang(lang)}
                    style={{
                      padding: '0.45rem 0.875rem',
                      borderRadius: '8px',
                      border: '1px solid',
                      borderColor: selectedLang === lang ? '#1d4ed8' : '#e2e8f0',
                      backgroundColor: selectedLang === lang ? '#eff6ff' : '#ffffff',
                      color: selectedLang === lang ? '#1d4ed8' : '#475569',
                      fontSize: '0.8125rem',
                      fontWeight: selectedLang === lang ? 700 : 500,
                      cursor: 'pointer',
                    }}
                  >
                    {lang === 'english' ? 'English' : lang === 'hindi' ? 'हिन्दी' : 'తెలుగు'}
                  </button>
                ))}
              </div>

              {/* Dialogue Box */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem', marginBottom: '1.25rem' }}>
                <div style={{ backgroundColor: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '10px', padding: '0.75rem 1rem', fontSize: '0.875rem', color: '#1e3a8a', lineHeight: 1.5 }}>
                  <div style={{ fontSize: '0.6875rem', fontWeight: 700, color: '#1d4ed8', marginBottom: '2px' }}>VOISAGE AI</div>
                  {currentLang.intro}
                </div>

                <div style={{ backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '10px', padding: '0.75rem 1rem', fontSize: '0.875rem', color: '#1e293b', lineHeight: 1.5 }}>
                  <div style={{ fontSize: '0.6875rem', fontWeight: 700, color: '#64748b', marginBottom: '2px' }}>CALLER</div>
                  {currentLang.response}
                </div>

                <div style={{ backgroundColor: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '10px', padding: '0.75rem 1rem', fontSize: '0.875rem', color: '#1e3a8a', lineHeight: 1.5 }}>
                  <div style={{ fontSize: '0.6875rem', fontWeight: 700, color: '#1d4ed8', marginBottom: '2px' }}>VOISAGE AI</div>
                  {currentLang.followup}
                </div>
              </div>
            </div>

            <div style={{ fontSize: '0.8125rem', color: '#64748b', paddingTop: '0.75rem', borderTop: '1px solid #f1f5f9' }}>
              {currentLang.nuance}
            </div>
          </div>

          {/* Right Column: Compact Voice Persona Selector */}
          <div
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '20px',
              border: '1px solid #e2e8f0',
              padding: '1.75rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.25rem' }}>
                <Volume2 size={18} color="#1d4ed8" />
                <span style={{ fontSize: '1rem', fontWeight: 800, color: '#0f172a' }}>
                  Available Voice Personas
                </span>
              </div>

              {/* Compact voice list */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {voices.map((v) => {
                  const isActive = activeVoiceId === v.id;
                  const isPlaying = playingVoiceId === v.id;

                  return (
                    <div
                      key={v.id}
                      style={{
                        padding: '0.75rem 1rem',
                        borderRadius: '10px',
                        border: '1px solid',
                        borderColor: isActive ? '#1d4ed8' : '#e2e8f0',
                        backgroundColor: isActive ? '#eff6ff' : '#ffffff',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: '0.5rem',
                      }}
                    >
                      <div>
                        <div style={{ fontSize: '0.875rem', fontWeight: 700, color: '#0f172a' }}>
                          {v.name} • {v.lang}
                        </div>
                        <div style={{ fontSize: '0.75rem', color: '#64748b' }}>
                          {v.gender} • {v.tone}
                        </div>
                      </div>

                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                        <button
                          type="button"
                          onClick={() => handlePreviewVoice(v.id)}
                          style={{
                            padding: '0.3rem 0.6rem',
                            borderRadius: '6px',
                            border: '1px solid #cbd5e1',
                            backgroundColor: '#ffffff',
                            color: '#475569',
                            fontSize: '0.75rem',
                            fontWeight: 600,
                            cursor: 'pointer',
                          }}
                        >
                          {isPlaying ? 'Playing...' : 'Preview'}
                        </button>

                        <button
                          type="button"
                          onClick={() => setActiveVoiceId(v.id)}
                          style={{
                            padding: '0.3rem 0.65rem',
                            borderRadius: '6px',
                            border: 'none',
                            backgroundColor: isActive ? '#1d4ed8' : '#f1f5f9',
                            color: isActive ? '#ffffff' : '#475569',
                            fontSize: '0.75rem',
                            fontWeight: 600,
                            cursor: 'pointer',
                          }}
                        >
                          {isActive ? 'Active' : 'Select'}
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div style={{ fontSize: '0.75rem', color: '#94a3b8', marginTop: '1.25rem' }}>
              Voice options and synthesis quality depend on supported speech providers per language.
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .lang-voice-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
        }

        @media (min-width: 900px) {
          .lang-voice-grid {
            grid-template-columns: 1.15fr 0.85fr;
            gap: 2.5rem;
          }
        }
      `}</style>
    </section>
  );
}
