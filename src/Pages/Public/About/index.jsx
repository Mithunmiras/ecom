import React from 'react';
import Header from '../LandingPage/components/Header.jsx';
import FooterSection from '../LandingPage/components/FooterSection.jsx';
import PageHeader from './Components/PageHeader.jsx';
import OurStory from './Components/OurStory.jsx';
import Values from './Components/Values.jsx';
import Process from './Components/Process.jsx';
import Stats from './Components/Stats.jsx';

export default function AboutPage() {
  return (
    <div className="bg-white text-slate-900">
      <Header />
      <main>
        <PageHeader />
        <OurStory />
        <Values />
        <Process />
        <Stats />
      </main>
      <FooterSection />
    </div>
  );
}
