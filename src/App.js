import './App.css'
import React, { useState, useEffect } from "react"
import { format } from 'date-fns'
import { ru } from 'date-fns/locale'
import 'animate.css'


/* Функциональный вариант. 
Я честно не понял как работает useState и useEffect
Использовал эти функции по примеру из интернетов
НО!!! Оно живое и работает!) */

function Time() {

  const [currentDate, setDate] = useState(new Date())

  function refreshClock() {
    setDate(new Date());
  }

  useEffect(() => {
    const timerId = setInterval(refreshClock, 100);
    return function cleanup() {
      clearInterval(timerId);
    };
  }, []);

  return (
    <div className="App">
        <div className="timeWrapper">
          <div className="timeItem timeItem animate__animated animate__fadeIn animate__slower">
            {format(currentDate, 'dd.MM.yyyy')}
          </div>
          <div className="timeItem timeItem animate__animated animate__fadeIn animate__slower">
            {format(currentDate, 'do MMMM', {locale: ru})}
          </div>
          <div className="timeItem timeItem animate__animated animate__fadeIn animate__slower">
            {format(currentDate, 'HH.mm')}
          </div>
          <div className="timeItem timeItem animate__animated animate__fadeIn animate__slower">
            {format(currentDate, 's')}
          </div>
          <div className="timeItem timeItem animate__animated animate__fadeIn animate__slower">
            {currentDate.getMilliseconds()}
          </div>
        </div>
    </div>
  );
}

export default Time
