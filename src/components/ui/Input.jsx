import React from 'react'

const Input = ({type, onChange, className,placeholder, id}) => {
  return (
   <input type={type} onChange={onChange} className={className} placeholder={placeholder} id={id} />
  )
}

export default Input
