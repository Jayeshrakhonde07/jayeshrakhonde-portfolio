import React from 'react'
import Navbar from './components/layout/Navbar'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Skills from './components/sections/Skills'
import Projects from './components/sections/Projects'
import Certifications from './components/sections/Certifications'
import Contact from './components/sections/Contact'
import Footer from './components/layout/Footer'
import resume from '../public/resume/Jayesh_Rakhonde_Resume.pdf'
const App = () => {
  return (
   <>
   <Navbar />
   {<Hero resume = {resume} />
   /* <About />
   <Skills />
   <Projects />
   <Certifications />
   <Contact />
   <Footer /> */}
   </>
  )
}

export default App 