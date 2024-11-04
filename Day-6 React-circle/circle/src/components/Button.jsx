import React from 'react'

export default function Button({text,id,handler,disabled}) {
  return (
    <button id={id} onClick={handler} disabled={disabled}>{text}</button>
  )
}
