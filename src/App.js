import React, { useState } from 'react'
import './App.css'
import { getMonth } from './util'
import FullCalendar from '@fullcalendar/react'
import DayGrid from '@fullcalendar/daygrid'
import CalendarHeader from './component/CalendarHeader'
import Sidebar from './component/Sidebar'
import Month from './component/Month'
// import MyApp from './pages/Calendar.jsx'

function App() {
  // console.table(getMonth());
  const [ currentMonth, setCurrentMonth ] = useState(getMonth());

  return (
    <>
    <FullCalendar plugins={[DayGrid]} />
    </>
    // <React.Fragment>
    //   <div className='h-screen flex flex-col'>
    //     <CalendarHeader />
    //     <div className='flex flex-1'>
    //       <Sidebar />
    //       <Month mon={currentMonth}/>
    //     </div>
    //   </div>
    //   {/* <MyApp/> */}
    // </React.Fragment>
  );
}

export default App;