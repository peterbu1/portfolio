import React from 'react'
import { motion } from 'framer-motion'
type Props = {}

function ExperienceCard({ }: Props) {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] xl:h-[700px] snap-center p-10 bg-[#292929] hover:opacity-100
    opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
      <motion.img
      initial={{
        y:-11,
        opacity: 0,
      }}
      transition={{duration: 1.2}}
      whileInView={{opacity: 1, y:0}}
      viewport={{once: true}}
      className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe_8J1q4zV10CJd_JKXUtQn4cGIH0rs6z7-A&usqp=CAU" 
        alt=""/>

        <div className='px-0 md:px-10'>
          <h4 className='text-4xl font-light'>Barista</h4>
          <p className='font-bold text-2xl mt-1'>Lead</p>
          <div className= 'flex space-x-2 my-2'>

          </div>
          <p className='uppercase py-5 text-gray-300'>January 2019 - December 2022</p>
          <ul className="list-disc space-y-4 ml-5 text-lg scrollable">
            <li>Managed and oversee operation of the bubble tea shop from opening to closing and sales</li>
            <li>Managed financial security and analyzed trends of orders and products to maximize profits by 35% in one year</li>
            <li>Trained 38 new hires to of the essential skills of a barista, great customer service and safety guidelines whilst assessing them</li>
            <li>Displayed and enforced high standards of performance and customer service to keep consistency throughout the staff</li>
          </ul>
        </div>
    </article>


  )
}

export default ExperienceCard