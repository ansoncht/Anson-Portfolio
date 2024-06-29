'use client';

import Image from 'next/image';
import Intro from '@/app/components/Intro';
import SectionDivider from '@/app/components/SectionDivider';
import About from '@/app/components/About';
import Projects from '@/app/components/Projects';
import Skills from '@/app/components/Skills';
import Experience from '@/app/components/Experience';
import Contact from '@/app/components/Contact';

export default function Home() {
  return (
    <main className='flex flex-col items-center px-4'>
      <Intro />
      <SectionDivider />
      <About />
      <SectionDivider />
      <Projects />
      <SectionDivider />
      <Skills />
      <SectionDivider />
      <Experience />
      <SectionDivider />
      <Contact />
    </main>
  );
}
