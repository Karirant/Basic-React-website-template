import React from 'react'
import { motion } from 'framer-motion'

import { headingVariants } from '../variants'

export const NotFound = _ => {

  return (
    <>
    <motion.h1
        initial="initial"
        animate="animate"
        variants={headingVariants}
      >
    NotFound
    </motion.h1>

      <section className='mt-4 p-4 min-h-screen pr-24 flex justify-center'>
        <span className='text-tertiary text-6xl'>404</span>
      </section>
     
    </>
  )
}


