import React from 'react'

const SectionTitle = ({title,subtitle,spantitle}) => {
  return (
    <div className='text-center mt-8'>
      <h1 className='text-4xl md:text-5xl font-heading font-bold text-text-main text-shadow-glow'>{title}</h1>
      <h1 className='text-2xl md:text-3xl font-title font-bold mt-2'>{subtitle} <span className='text-accent'>{spantitle}</span>
      </h1>
 <div className="w-20 h-1 bg-accent mx-auto mt-4"></div>
    </div>
  )
}

export default SectionTitle