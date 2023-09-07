"use client"
import React from 'react'
import "./styles.css"
import Image from 'next/image'

function UpcomingEventCard({img}) {
  return (
    <div className='upcoming-event-card'>
        <div className='event-card-img-container'>
            
            <Image 
                loader={({src})=>src}
                src={img}
                width={0}
                height={400}
                alt="a still from the event"
                className='upcoming-event-card-img'
            />
        </div>
        <p className='upcoming-event-card-title'>Getting Started with Programming</p>
        <button className='upcoming-event-card-button'>Fill the form {"->"}</button>
    </div>
  )
}

export { UpcomingEventCard }