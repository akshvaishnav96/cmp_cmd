import React from 'react'

export default function Footer() {

  const date = new Date();
  const year = date.getFullYear()
  return (
    <div className=' bg-gray-700 p-5 text-center text-2xl text-white'> All rights Reserved &copy; akash {year}</div>
  )
}