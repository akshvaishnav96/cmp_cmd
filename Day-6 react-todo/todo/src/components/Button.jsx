import React from 'react'

export default function Button({text,className,onClick,checked}) {
  return (
    <button onClick={onClick} className={checked ? `${className} lineThrough` : className}    disabled={checked}>{text}</button>
  )
}
