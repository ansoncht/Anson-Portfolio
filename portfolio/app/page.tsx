'use client';
import Image from 'next/image';
import Intro from '@/app/components/Intro';
import SectionDivider from '@/app/components/SectionDivider';
import About from '@/app/components/About';
import Projects from '@/app/components/Projects';

export default function Home() {
  return (
    <main className='flex flex-col items-center px-4'>
      <Intro />
      <SectionDivider />
      <About />
      <SectionDivider />
      <Projects />
    </main>
  );
}
