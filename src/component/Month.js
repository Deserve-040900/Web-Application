import React from 'react'
import Day from './Day'

export default function Month({ mon }) {
  return (
    <div className="mon-style">
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
