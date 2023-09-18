import React from 'react'
import './Card.css'
import { ReactSVG } from 'react-svg'

export default function Card({data}) {
  return (
    <div className='card' style={{
      backgroundColor: data.color ?? "white",
      color: data.color === '#D27722' ? "white" : "D27722"
    }}>
      <ReactSVG src={data.icon}></ReactSVG>
      <h3>{data.title}</h3>
      <p>{data.description}</p>
    </div>
  )
}
