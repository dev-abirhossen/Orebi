import React from 'react'

const PrimaryBtn = ({onClick, className, text}) => {
  return (
    <button onClick={onclick} className={`text-sm text-white hover:bg-white hover:text-primary transition-all duration-300 border bg-primary font-bold px-16.25 py-4 ${className}`}>{text}</button>
  )
}

export default PrimaryBtn
