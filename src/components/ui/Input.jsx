  import React from 'react'

  const Input = ({type, onChange, value, className,name,placeholder, id}) => {
    return (
    <input type={type} onChange={onChange} value={value} name={name} className={className} placeholder={placeholder} id={id} />
    )
  }

  export default Input
