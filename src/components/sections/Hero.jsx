import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { FaGithub,FaLinkedin } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
const Hero = ({resume}) => {


  const socialLinks = [
    {icon:<FaGithub />,href:'https://github.com/Jayeshrakhonde07',label:"GitHub"},
    {icon:<FaLinkedin />  ,href:'https://www.linkedin.com/in/jayesh-rakhonde-186b18290/',label:"LinkedIn"},
    {icon:<TfiEmail /> ,href:'https://mailto.google.com/mail/?view=cm&fs=1&to=jayeshrakhonde05@gmail.com',label:"Email"},
  ]


  return (
    <section className='min-h-screen flex items-center justify-center px-6 md:px-8 lg:px-10 py-10'>
      <div className='max-w-7xl mx-auto '>

        <div className='grid grid-cols-1 md:grid-cols-2'>

          {/* left content  */}
          <div className=' text-center md:text-left'>
            <p className='text-text-muted'>Hello, I am</p>
            <h1 className='text-text-main text-3xl md:text-4xl lg:text-6xl font-heading font-bold mb-2 text-shadow-glow'>Jayesh Rakhonde</h1>
            <h2 className='text-accent text-2xl md:text-3xl lg:text-4xl font-medium my-2'>Frontend Developer</h2>
            <p className='text-text-body max-w-xl text-justify leading-relaxed'>An IT student passionate about building modern web applications and solving problems with code. I’m constantly learning new technologies and putting them into practice through projects.</p>

            {/* hero buttons  */}
            <div className='flex flex-col md:flex-row gap-4 mt-6'>
              <a href="#projects" className=' group bg-accent px-5 py-2.5 flex items-center justify-center gap-2 rounded-md text-button-text-primary font-medium  hover:shadow-button hover:text-text-main transition duration-500'>View Projects <FaArrowRight className='group-hover:translate-x-1 transition duration-500' /> </a>
              <a href= {resume} target="_blank"  download="Jayesh_Rakhonde_Resume.pdf" className='group bg-bg-secondary px-5 py-2.5 flex items-center justify-center gap-2 font-medium text-accent border border-card-border rounded-md hover:bg-accent hover:text-button-text-secondary hover:shadow-button transition duration-500' >Download Resume <FiDownload className='group-hover:translate-y-1 transition duration-500' /></a>
            </div>

            {/* social links  */}
            <div className='flex justify-center mt-4 md:justify-start gap-4 '>
             {socialLinks.map((link)=>{
              return(
                <a key={link.label} href= {link.href} target='_blank' aria-label={link.label} className='bg-bg-card p-2 text-2xl text-accent border border-card-border rounded-full hover:text-text-main hover:bg-accent hover:border-card-hover hover:shadow-button  transition duration-500'>{link.icon}</a>
              )
             })}
            </div>
          </div>




        </div>
      </div>
    </section>
  )
}

export default Hero 