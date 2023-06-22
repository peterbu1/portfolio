import React from 'react'
import { motion } from 'framer-motion'
import Aspnet from '../assets/aspnet.jpg'
import Axure from '../assets/axure.png'
import Csharp from '../assets/csharp.jpg'
import Figma from '../assets/figma.png'
import Java from '../assets/java.jpg'
import Javascript from '../assets/javascript.png'
import Miro from '../assets/miro.png'
import Mysql from '../assets/mssql.jpg'
import Node from '../assets/node.jpg'
import Python from '../assets/python.jpg'
import Typescript from '../assets/typescript.jpg'
import Image from 'next/image'


type Props = {}

function Skills({ }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center'>
      <h3
        className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Skills
      </h3>

      <div className= 'grid grid-cols-4 gap-5'>
      <Image src={Aspnet} alt="aspnet" className="rounded-full border border-gray-500 object-cover w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32"  />
      <Image src={Axure} alt="aspnet" className="rounded-full border border-gray-500 object-cover w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32"/>
      <Image src={Csharp} alt="aspnet" className="rounded-full border border-gray-500 object-cover w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32"/>
      <Image src={Figma} alt="aspnet" className="rounded-full border border-gray-500 object-cover w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32"/>
      <Image src={Java} alt="aspnet" className="rounded-full border border-gray-500 object-cover w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32"/>
      <Image src={Javascript} alt="aspnet" className="rounded-full border border-gray-500 object-cover w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32"/>
      <Image src={Miro} alt="aspnet" className="rounded-full border border-gray-500 object-cover w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32"/>
      <Image src={Mysql} alt="aspnet" className="rounded-full border border-gray-500 object-cover w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32"/>
      <Image src={Node} alt="aspnet" className="rounded-full border border-gray-500 object-cover w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32"/>
      <Image src={Python} alt="aspnet" className="rounded-full border border-gray-500 object-cover w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32"/>
      <Image src={Typescript} alt="aspnet" className="rounded-full border border-gray-500 object-cover w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32"/>
      
      </div>
    </motion.div>
  )
}

export default Skills