'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ProblemSection from '@/components/ProblemSection';
import CoreJourneySection from '@/components/CoreJourneySection';
import ConversationExperienceSection from '@/components/ConversationExperienceSection';
import MonitoringAndTakeoverSection from '@/components/MonitoringAndTakeoverSection';
import PostCallIntelligenceSection from '@/components/PostCallIntelligenceSection';
import LanguageAndVoiceSection from '@/components/LanguageAndVoiceSection';
import PrivacyControlSection from '@/components/PrivacyControlSection';
import VisionRoadmapSection from '@/components/VisionRoadmapSection';
import FaqSection from '@/components/FaqSection';
import FinalCtaSection from '@/components/FinalCtaSection';
import Footer from '@/components/Footer';
import EarlyAccessModal from '@/components/EarlyAccessModal';

export default function Home() {
  const [isEarlyAccessOpen, setIsEarlyAccessOpen] = useState(false);

  const openEarlyAccess = () => setIsEarlyAccessOpen(true);
  const closeEarlyAccess = () => setIsEarlyAccessOpen(false);

  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* 01 — Navigation & Hero */}
      <Navbar onOpenEarlyAccess={openEarlyAccess} />
      <HeroSection onOpenEarlyAccess={openEarlyAccess} />

      {/* 02 — The Problem */}
      <ProblemSection />

      {/* 03 — How VoiSage Handles an Unknown Call */}
      <CoreJourneySection />

      {/* 04 — Natural Conversation + Understanding Intent */}
      <ConversationExperienceSection />

      {/* 05 — Watch the Call + Take Over (Hero Feature) */}
      <MonitoringAndTakeoverSection />

      {/* 06 — After the Call: Summary + History */}
      <PostCallIntelligenceSection />

      {/* 07 — Languages + Voice Persona */}
      <LanguageAndVoiceSection />

      {/* 08 — Privacy & Control */}
      <PrivacyControlSection />

      {/* 09 — Product Vision: Today, Next, Ahead */}
      <VisionRoadmapSection />

      {/* 10 — FAQ */}
      <FaqSection />

      {/* 11 — Final CTA & Footer */}
      <FinalCtaSection onOpenEarlyAccess={openEarlyAccess} />
      <Footer onOpenEarlyAccess={openEarlyAccess} />

      {/* Early Access Modal */}
      <EarlyAccessModal isOpen={isEarlyAccessOpen} onClose={closeEarlyAccess} />
    </main>
  );
}
