import React from 'react'
import { motion } from 'framer-motion'

import { headingVariants, cardParent, cardChild } from '../variants'

export const About = _ => {

  return (
    <>
      <motion.h1
        initial="initial"
        animate="animate"
        variants={headingVariants}
      >
        About
      </motion.h1>

       <motion.section 
        className='mt-4 p-4 m-auto sm:p-4 max-w-[768px] min-h-screen flex-col justify-center'
        initial="initial"
        animate="animate"
        variants={cardParent}
        >

        <motion.h2 variants={cardChild}>
          What is Lorem Ipsum?
        </motion.h2>

        <motion.p className='mt-4' variants={cardChild}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been   the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of   type and scrambled it to make a type specimen book. It has survived not only five centuries, but  also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in  the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently   with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </motion.p>

      </motion.section>
    
    </>
  )
}


