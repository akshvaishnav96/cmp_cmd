import React, { useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import SingleProduct from '../Components/SingleProduct'

export default function SingleTv() {
  const data = useLoaderData()


  return (
    <SingleProduct data={data} />
  )
}
