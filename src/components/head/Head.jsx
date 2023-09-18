import React from 'react'
import { ReactSVG } from 'react-svg'
import './Head.css'

export default function Head() {
    return (
        <div className='head'>
            <div className='first'>
                <img className='hero' src="Hero.png" alt="" />
                <div className='david'>
                    <div className='dv'>
                        <img src="sergio.jpeg" alt="" />
                        <p className='name'><span>David Mitchell</span><span style={{ display: 'flex' }}>4.8️<ReactSVG className='icon' src="start.svg" /></span></p>
                    </div>
                    <p className='par'>I've discovered a whole new world of flavors. Learning to cook has never been this fun and engaging!</p>
                </div>
            </div>
            <div className='scnd-container'>
                <h1 className='title'>Master the Art of Cooking with <span>Experts</span> Worldwide</h1>
                <p className='p2'>Experience the joy of cooking in a whole new way with our engaging online cooking classes. Learn from the chefs, share your unique culinary knowledge, and join our growing foodie community. With COOK, learning, and teaching becomes a shared passion.</p>
                <button className='watch'><ReactSVG src='play-circle.svg' />Watch a video</button>
                <div className='b-container'>
                    <button className='btn1'>Find Your Tutor</button>
                    <button className='btn2'>Join Our Chefs</button>
                </div>
            </div>
        </div>
    )
}
