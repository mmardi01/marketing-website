import React from 'react'
import './Stats.css'
import { ReactSVG } from 'react-svg'


export default function Stats() {
  return (
    <div className='stats'>
      <div className='lines'></div>
      <div className='stats-container'>
        <div className='state'>
          <h1>100+</h1>
          <p>Talented Tutors</p>
        </div>
        <div className='state'>
          <h1>1000+</h1>
          <p>Students</p>
        </div>
        <div className='state'>
          <h1 style={{display:'flex',alignItems:'center'}}>4.8<ReactSVG style={{marginLeft:'5px'}} src='star.svg'/></h1>
          <p>Rating</p>
        </div>
        <div className='state'>
          <h1>20+</h1>
          <p>Cooking Categories</p>
        </div>
      </div>
      <div className='lines'>
      </div>
    </div>
  )
}
