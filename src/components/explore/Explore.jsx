import React from 'react'
import './Explore.css'
import Card from './Card/Card'


export default function Explore() {
  return (
    <div className='explore'>
        <div className='explore-title'>
            <img src="Rec.png" width={36} height={26} alt="" />
            <h1>Explore & Learn</h1>
        </div>
        <div className='cards'>
            <Card />
        </div>
    </div>
  )
}
