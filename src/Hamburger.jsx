import React, { memo } from 'react'
import { motion } from 'framer-motion';

const Hamburger = memo(({isNavOpen, handleClick}) => {

  const hamburger = {
    hamburger: {
      hover: {
        y: -2,
        transition: {
          type: "spring",
          stiffness: 120,
          damper: 10,
          staggerChildren: 0.02
        }
      },
    },
  }

  const bar = {
    topBar: {
      initial: {rotate: 0},
      animate: {
        y: 10,
        scaleY: 0.6,
        scaleX: 0.8,
      },
      hover: {
        backgroundColor: "#e9edd3"
      },
    },
    middleBar: {
      initial: {rotate: 0},
      animate: {
        y: 4,
        scaleX: 0.9,
        opacity: 0
      },
      hover: {
        backgroundColor: "#e9edd3"
      },
    },
    bottomBar: {
      initial: {rotate: 0},
      animate: {
       y: 2,
       scaleY: 1.3,
       opacity: 0
      },
      hover: {
        backgroundColor: "#e9edd3"
      },
    },
  }

  return (
    <>
      <motion.div 
        className="fixed mr-2 p-1.5 w-10 h-10 cursor-pointer bg-secondary right-2 z-10 rounded shadow-lg hover:bg-tertiary"
        variants={hamburger.hamburger}
        initial="initial"
        animate={isNavOpen ? "animate" : "initial"}
        whileHover="hover"

        onClick={() => handleClick()}
      >
        <motion.div className="w-full h-2 bg-primary" variants={bar.topBar}></motion.div>
        <motion.div className="my-[4.5px] w-full h-1.5 bg-primary" variants={bar.middleBar}></motion.div>
        <motion.div className="w-full h-1 bg-primary" variants={bar.bottomBar}></motion.div>
      </motion.div>
    </>
  )
})

export default Hamburger;
