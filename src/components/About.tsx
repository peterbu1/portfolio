import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import ME2 from '../assets/peter2.jpg'

type Props = {}

function About({ }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
        About
      </h3>
      <Image src={ME2} alt="pic" height='240' width='240' className='flex--shrink-0 rounded-full object-cover' />

      <div className='space-y-10 px-0 md:px-10'>
        <h4 className='text-4xl font-semibold'>Here is a <span className='underline decoration-[#F7AB0A]/50'>little</span>{" "} background</h4>
        <p className="text-base">I'm Peter. I currently attend Temple University studing Information Science & Technology and am looking to graduate
          this coming May! I'm a detail-oriented, collaborative, and innovative student seeking for career opportunities in the tech industry with the
          drive to link the bridge between tech and reality. Looking for a dynamic organization to challenge and strengthen my passion of earning and analytical ability and to be
          part of a team to grow both personally and professionally.</p>
      </div>
    </motion.div>
  )
}

export default About