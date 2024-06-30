'use client';

import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '@/app/components/SectionHeading';
import { useSectionInView } from '@/app/lib/hooks';

export default function About() {
  const { ref } = useSectionInView('About', 0.75);

  return (
    <motion.section
      ref={ref}
      className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-0 scroll-mt-28'
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id='about'
    >
      <SectionHeading>About me</SectionHeading>
      <p className='mb-3'>
        I&lsquo;m a recent graduate from the University of California, Los
        Angeles, where I majored in{' '}
        <span className='font-medium'>Computer Science</span>. My journey in
        software engineering spans from designing and implementing solutions to
        testing and deploying them. I have a particular passion for{' '}
        <span className='font-medium'>API Development</span> and creating
        downstream <span className='font-medium'>Web Application</span> that
        leverage data provided by these APIs. My interest in machine learning
        led me to explore and study natural language processing (NLP), focusing
        on creating and refining various models through tutorials.
      </p>
      <p>
        Outside of academics and work, I enjoy playing tennis and exploring the
        latest gadgets and technologies. My fascination with software
        engineering began with my first smartphone, and I&lsquo;ve been
        dedicated to contributing to the technology industry ever since.
      </p>
    </motion.section>
  );
}
