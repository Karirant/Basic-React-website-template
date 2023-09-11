import React, { memo } from 'react'

import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';

const Nav = memo(({ isNavOpen }) => {
    const ulVariant = {
    initial: {
      y: -600,
      opacity: 0,
    },
    animate: {
      y: -600,
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    },
  }

  const liVariant = {
    initial: {
      y: -600,
    },
    animate: {
      y: 600,
      transition: {
        type: "spring",
        stiffness: 800,
        damping: 70,
      }
    },
  }

  return (
    <motion.ul 
      className="fixed mt-16 right-2"
      initial={{opacity: 0, y: -600}}
      animate={isNavOpen ? "animate" : ""}
      variants={ulVariant}
      >
      <motion.div 
        className="px-8 py-2 my-2 bg-quaternary text-secondary font-bold text-2xl uppercase text-right tracking-wider cursor-pointer border-solid border-4 rounded border-secondary hover:text-tertiary"
        variants={liVariant}
        >
        <NavLink to="/" onClick={() => setIsNavOpen(!isNavOpen)}>Home</NavLink>
      </motion.div>
      <motion.div 
        className="px-8 py-2 my-2 bg-quaternary text-secondary font-bold text-2xl uppercase text-right tracking-wider cursor-pointer border-solid border-4 rounded border-secondary hover:text-tertiary"
        variants={liVariant}
        >
        <NavLink to="/Contact" onClick={() => setIsNavOpen(!isNavOpen)}>Contact</NavLink>
      </motion.div>
      <motion.div 
        className="px-8 py-2 my-2 bg-quaternary text-secondary font-bold text-2xl uppercase text-right tracking-wider cursor-pointer border-solid border-4 rounded border-secondary hover:text-tertiary"
        variants={liVariant}
        >
        Lorem
      </motion.div>

    </motion.ul>
  )
})

export default Nav
