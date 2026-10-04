import React from 'react'

const Input = ({type, onChange, className,name,placeholder, id}) => {
  return (
   <input type={type} onChange={onChange} name={name} className={className} placeholder={placeholder} id={id} />
  )
}

export default Input
