import React from 'react';
import './App.css'
import { format } from 'date-fns'
import { ru } from 'date-fns/locale'
import 'animate.css'


/* Классовый вариант 
В плане понимания более интуитивный чем функц. и хуки
Методы состояния позаимствовал в спецификации реакта
Пока что не могу сказать, что на 100% разобрался, как
оно работатет, но блин работает же!)*/

class Time extends React.Component {

  constructor(props) {
    super(props)
    this.state = { currentDate: new Date() }
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      100
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      currentDate: new Date()
    });
  }

  render() {
    return (
      <div className="App">
        <div className="timeWrapper">
          <div className="timeItem timeItem animate__animated animate__fadeIn animate__slower">
            {format(this.state.currentDate, 'dd.MM.yyyy')}
          </div>
          <div className="timeItem timeItem animate__animated animate__fadeIn animate__slower">
            {format(this.state.currentDate, 'do MMMM', { locale: ru })}
          </div>
          <div className="timeItem timeItem animate__animated animate__fadeIn animate__slower">
            {format(this.state.currentDate, 'HH.mm')}
          </div>
          <div className="timeItem timeItem animate__animated animate__fadeIn animate__slower">
            {format(this.state.currentDate, 's')}
          </div>
          <div className="timeItem timeItem animate__animated animate__fadeIn animate__slower">
            {this.state.currentDate.getMilliseconds()}
          </div>
        </div>
      </div>
    );
  }
}

export default Time
