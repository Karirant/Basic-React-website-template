import React from 'react'
import { motion } from 'framer-motion'

import { headingVariants, strongText } from '../variants'

export const Home = _ => {

  return (
    <>
      <motion.h1
        initial="initial"
        animate="animate"
        variants={headingVariants}
      >
        Home
      </motion.h1>

      <section className='mt-4 p-4 min-h-screen pr-24'>
        <motion.div
          className="text-5xl text-secondary"
          initial="initial"
          animate="animate"
          variants={strongText}
        >
          <motion.span className='block'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </motion.span>
        </motion.div>
      </section>
    </>
  )
}


