import React from 'react'
import { navLinks } from '../constants'

export const Dropdown = () => {
  return (
    // tailwindcss classes for border radius is 
    <div className='!min-w-[8.25rem] absolute flex flex-col z-50 bg-slate-50  border-solid border-grey border-2 rounded-md 
      max-sm:right-8 right-[4rem]'>
      {navLinks.map(({href, label}) => (
        // TODO: Add a link to each item in the dropdown
        <a key={label} href={href} className='p-2 hover:bg-slate-200' >
          {label}
        </a>
      ))}
    </div>
  )
}
