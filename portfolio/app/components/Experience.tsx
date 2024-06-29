'use client';

import React from 'react';
import SectionHeading from '@/app/components/SectionHeading';
import { experiencesData } from '@/app/lib/data';
import { useSectionInView } from '@/app/lib/hooks';
import { useTheme } from '@/app/context/ThemeContext';
import dynamic from 'next/dynamic';
import { CgWorkAlt } from 'react-icons/cg';

const Chrono = dynamic(() => import('react-chrono').then((mod) => mod.Chrono), {
  ssr: false,
});

export default function Experience() {
  const { ref } = useSectionInView('Experience');
  const { isDarkMode } = useTheme();

  const chronoTheme = {
    primary: isDarkMode ? 'rgba(255, 255, 255, 0.2)' : '#e5e7eb',
    secondary: 'transparent',
    cardBgColor: isDarkMode ? 'rgba(255, 255, 255, 0.05)' : '#f3f4f6',
    cardDetailsBackGround: isDarkMode ? 'rgba(255, 255, 255, 0.05)' : '#f3f4f6',
    cardForeColor: isDarkMode ? 'rgba(255, 255, 255, 0.05)' : '#f3f4f6',
    titleColor: isDarkMode ? 'rgba(255, 255, 255, 0.75)' : 'rgb(107 114 128)',
    titleColorActive: isDarkMode
      ? 'rgba(255, 255, 255, 0.75)'
      : 'rgb(107 114 128)',
    iconBackgroundColor: isDarkMode ? 'rgba(255, 255, 255, 0.15)' : 'white',
    cardTitleColor: isDarkMode ? 'white' : 'black',
    cardSubtitleColor: isDarkMode ? 'white' : 'black',
    cardDetailsColor: isDarkMode
      ? 'rgba(255, 255, 255, 0.75)'
      : 'rgb(55 65 81)',
    detailsColor: isDarkMode ? 'rgba(255, 255, 255, 0.75)' : 'rgb(55 65 81)',
  };

  return (
    <section
      id='experience'
      ref={ref}
      className='scroll-mt-28 mb-28 sm:mb-0'
    >
      <SectionHeading>My experience</SectionHeading>
      <div style={{ width: '100%', height: '100%' }}>
        <Chrono
          key={isDarkMode ? 'dark' : 'light'}
          items={experiencesData}
          mode='VERTICAL_ALTERNATING'
          disableToolbar
          timelinePointDimension={50}
          theme={chronoTheme}
          fontSizes={{
            cardSubtitle: '0.9rem',
            cardText: '0.8rem',
            cardTitle: '1rem',
            title: '1rem',
          }}
        >
          <div className='chrono-icons'>
            <CgWorkAlt className='text-3xl' />
            <CgWorkAlt className='text-3xl' />
            <CgWorkAlt className='text-3xl' />
            <CgWorkAlt className='text-3xl' />
          </div>
        </Chrono>
      </div>
    </section>
  );
}
