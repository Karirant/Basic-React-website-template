import { useState } from "react"
import { motion } from 'framer-motion'
import { Routes, Route, NavLink } from 'react-router-dom'

import { Home } from "./pages/Home"
import { Contact } from "./pages/Contact"
import { About } from "./pages/About"
import { Blog } from "./pages/Blog"
import { NotFound } from "./pages/NotFound"

import { navVariant, navItemVariant } from "./variants"
import Hamburger from "./Hamburger"
import Nav from "./Nav"

function App() {

  const [scrollPosition, setScrollPosition] = useState(0)

  function scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
  }

  const [isNavOpen, setIsNavOpen] = useState(false)

  function handleClick() {
    setIsNavOpen(!isNavOpen)
  }

  function handleLinkClick() {
    handleClick()
    scrollToTop()
  }

  return (
    <>
    
      <header className="p-4 flex">
        <span className="px-2 pl-3 rounded-md text-lg tracking-widest font-bold text-primary bg-tertiary">LOGO</span>

        <nav className="flex-col z-10">    
          <Hamburger isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} handleClick={handleClick} />

          {/*nav menu*/}
          <motion.ul 
            className="fixed mt-16 right-4"
            initial={{opacity: 0, x: "100%"}}
            animate={isNavOpen ? "animate" : ""}
            variants={navVariant}      
          >

            <motion.li 
              className="pr-4 pl-8 py-2 mt-2 -my-1 bg-secondary text-primary font-semibold text-2xl uppercase text-right tracking-wider cursor-pointer rounded-tl-lg rounded-tr-lg hover:text-quaternaryhover:bg-tertiary tracking-widest"
              variants={navItemVariant}
              whileHover={{x: "-100%"}}
            >
              <NavLink 
                to="/" 
                onClick={() => handleLinkClick()}
                className={({isActive}) => (isActive ? "text-quaternary" : "")}
              >
                Home
              </NavLink>
            </motion.li>

            <motion.li 
              className="pr-4 pl-8 py-2 -my-1 bg-secondary text-primary font-semibold text-2xl uppercase text-right tracking-wider cursor-pointer hover:text-quaternary hover:bg-tertiary tracking-widest"
              variants={navItemVariant}
              whileHover={{x: "-100%"}}        
            >
              <NavLink 
                to="/About" 
                onClick={() => handleLinkClick()}
                className={({isActive}) => (isActive ? "text-quaternary" : "")}           
              >
                About
              </NavLink>
            </motion.li>

            <motion.li 
              className="pr-4 pl-8 py-2 -my-1 bg-secondary text-primary font-semibold text-2xl uppercase text-right tracking-wider cursor-pointer hover:text-quaternary hover:bg-tertiary tracking-widest"
              variants={navItemVariant}
              whileHover={{x: "-100%"}}
            >
              <NavLink 
                to="/Blog" 
                onClick={() => handleLinkClick()}
                className={({isActive}) => (isActive ? "text-quaternary" : "")}
              >
                Blog
              </NavLink>
            </motion.li>

            <motion.li 
              className="pr-4 pl-8 py-2 -my-1 bg-secondary text-primary font-semibold text-2xl uppercase text-right tracking-wider cursor-pointer rounded-bl-lg rounded-br-lg hover:text-quaternaryhover:bg-tertiarytracking-widest"
              variants={navItemVariant}
              whileHover={{x: "-100%"}}
            >
              <NavLink 
                to="/Contact" 
                onClick={() => handleLinkClick()}
                className={({isActive}) => (isActive ? "text-quaternary" : "")}
              >
                Contact
              </NavLink>
            </motion.li>
          </motion.ul>

        </nav>
      </header>

      <main className="flex-col pt-4 flex-col justify-center items-center">
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
       
      </main>

      <footer className="px-4 py-8 w-screen h-[220px] flex flex-col justify-center items-center">
        <div>
          Lorem Ipsum
        </div>
        <div className="flex flex-wrap gap-x-4 gap-x-0 py-2 justify-center">   
          <NavLink to="/">Home</NavLink> |
          <NavLink to="/About">About</NavLink> |
          <NavLink to="/Blog">Blog</NavLink> |
          <NavLink to="/Contact">Contact</NavLink>
        </div>
      </footer>
   

    </>
  );
};

export default App
