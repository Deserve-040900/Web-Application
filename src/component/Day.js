import React from 'react'

export default function Day({ day}) {
  return (
    <div className='border border-gray-200 flex flex-col'>
        <header>
            <p className='text-sm p-1 text-center my-1'>
                {day.format('DD')}
            </p>
        </header>        
    </div>
  )
}
