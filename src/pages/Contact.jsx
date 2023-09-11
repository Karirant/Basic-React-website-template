import React from 'react'
import { motion } from 'framer-motion'

import { headingVariants } from '../variants'
import { cardParent, cardChild } from '../variants'

export const Contact = _ => {
  return (
    <>
      <motion.h1
        initial="initial"
        animate="animate"
        variants={headingVariants}
      >
        Contact
      </motion.h1>

      <section className='mt-4 p-4 min-h-screen flex justify-center'>

        <motion.form 
          className='w-[400px]'
          initial="initial"
          animate="animate"
          variants={cardParent}
          >

          <motion.div 
            className="input-group flex flex-col justify-center my-3"
            variants={cardChild}
            >
            <label htmlFor="name" className=''>Name:</label>
            <input type="text" className='py-1 px-2 rounded shadow-sm outline-none bg-[#f5edeb] focus:bg-white' />
          </motion.div>

          <motion.div 
            className="input-group flex flex-col justify-center my-3"
            variants={cardChild}
            >
            <label htmlFor="email" className=''>Email:</label>
            <input type="email" className='py-1 px-2 rounded shadow-sm outline-none bg-[#f5edeb] focus:bg-white' />
          </motion.div>

          <motion.div 
            className="input-group flex flex-col justify-center my-3"
            variants={cardChild}
            >
            <label htmlFor="message" className=''>Message:</label>
            <textarea type="text" className='py-1 h-[120px] px-2 rounded shadow-sm outline-none bg-[#f5edeb] focus:bg-white' />
          </motion.div>

          <motion.div 
            className="mt-8 mb-2 input-group flex flex-col justify-center relative"
            variants={cardChild}
            >
            <button className='px-4 py-1 rounded-lg bg-secondary text-primary m-auto flex justify-center items-center w-fit hover:bg-tertiary hover:text-white'>Send</button>
          </motion.div>

          <motion.p variants={cardChild} className='flex justify-center'>(Demo only)</motion.p>

        </motion.form>

      </section>

    </>
  )
}


