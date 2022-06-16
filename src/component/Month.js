import React from 'react'
import Day from './Day'

export default function Month({ mon }) {
  return (
    <div className="flex-1 grid grid-rows-5 grid-cols-7">
        {mon.map((row, i) => (
            <React.Fragment key={i}>
                {row.map((day, idx) => (
                    <Day day={day} key={idx} rowIdx={i} />
                ))}
            </React.Fragment>
        ))}
    </div>
  )
}
