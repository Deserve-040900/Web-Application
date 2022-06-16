import React from 'react'

export default function Day({ day }) {
  return (
    <div className='box-day'>
        <header>
            <p className='day-item'>
                {day.format('DD')}
            </p>
        </header>        
    </div>
  )
}
