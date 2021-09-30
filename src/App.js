import './App.css'
import { format, getDate, parse } from 'date-fns'
import { ru } from 'date-fns/locale'



const dateValues = {
  date: format(new Date(), 'dd.MM.yyyy'),
  day: format(new Date(), 'do MMMM', {locale: ru}),
  hours: format(new Date(), 'HH.mm'),
  seconds: format(new Date(), 's'),
}

const millisec = new Date()


const time = () => {
  return (
    <div className="App">
        <div className="timeWrapper">
          <div className="timeItem">
            {dateValues.date}
          </div>
          <div className="timeItem">
            {dateValues.day}
          </div>
          <div className="timeItem">
            {dateValues.hours}
          </div>
          <div className="timeItem">
            {dateValues.seconds}
          </div>
          <div className="timeItem">
            {millisec.getMilliseconds()}
          </div>
        </div>
    </div>
  );
}

export default time;
