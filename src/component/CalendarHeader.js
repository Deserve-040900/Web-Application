import './CalendarHeader.css'
import dayjs from "dayjs";
// import React, { useContext } from "react";
import logo from "../assets/logo.png";
// import GlobalContext from "../context/GlobalContext";

export default function CalendarHeader() {
  return (
    <header className="head-style">
      <img src={logo} alt="calendar" className="logo" />
      <h1 className="calendar-title">
        Calendar
      </h1>

      <div className="modifyCalendar">
        <button className="arrowleft">
            <i className="bi bi-chevron-left"></i>
        </button>
        {/* <h2 className="ml-4 text-xl text-gray-500 font-bold">
            {dayjs(new Date(dayjs().year(), monthIndex)).format(
            "MMMM YYYY"
            )}
        </h2> */}
        <button className="arrowright">
            <i className="bi bi-chevron-right"></i>
        </button>
      </div>

      <div className="btn-group">
        <button className="btn-today" >
            Today
        </button>
        <button className="btn-week" >
            Week
        </button>
        <button className="btn-month" >
            Month
        </button>
        <button className="btn-year" >
            Year
        </button>
      </div>
    </header>
  )
}
