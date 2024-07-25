import React from 'react'
import { ReactTyped } from 'react-typed'

const HeroSectionChip = () => {
  return (
    <div className="flex items-center space-x-2 rounded-full border border-white px-2 py-[4px] bg-none shadow-md">
      <div className="flex items-center justify-center font-bold bg-white text-orange-500 rounded-full px-2 py-1 text-sm">
        Welcome
      </div>
      <ReactTyped
        strings={['innovation in business starts here', 'Success in business starts right here.', 'Where business evolution takes its first step.']}
        typeSpeed={25}
        backSpeed={20}
        loop
      />
    </div>
  )
}

export default HeroSectionChip