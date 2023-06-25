import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles';
import ME from '../assets/peter.jpg';
import Image from 'next/image'
import Link from 'next/link';
type Props = {}

function Hero({ }: Props) {

  const [text, count] = useTypewriter({
    words: ['Hi, My Name is Peter Bui',
      'Information Science & Technology Major',
      'From Temple University',
      'Aspiring Software Engineer'],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
      <BackgroundCircles />
      <div style={{ borderRadius: '50%', overflow: 'hidden', width: '100px', height: '100px' }}>
        <Image src={ME} alt="me" width={100} height={100} objectFit="cover" />
      </div>
      <div className="z-20">
        <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>Aspiring Software Engineer </h2>

        <h1 className="text-5xl lg:text-6xl font-semibold px-10">
          <span>{text}</span>
          <Cursor cursorColor='#005a7a' />
        </h1>

        <div className='pt-5'>
          <Link href="#about"> 
            <button className="heroButton">About</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link >
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Hero