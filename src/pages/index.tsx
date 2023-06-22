import Head from 'next/head';
import { Inter } from 'next/font/google';
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import WorkExperience from "../components/Experience";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80' >
      <Head>
        <title>Peter's Portfolio</title>
      </Head>
      {/* Header */}
      <Header />

      {/* Hero */}
      <section id='hero' className='snap-start'>
        <Hero />
      </section>
      {/* About */}
      <section id="about" className='snap-center'>
        <About />
      </section>

      {/* Experience */}
      <section id='experience' className='snap-center'>
        <WorkExperience />
      </section>

      {/* Skills */}
      <section id='skills' className='snap-center'>
        <Skills />
      </section>
      {/* Projects */}
      <section id='projects' className='snap-start'>
        <Projects />
      </section>

      <section id='contacts' className='snap-center'>
        <Contact />
      </section>

    </div>
  )
}
