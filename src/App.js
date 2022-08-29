import React, { Component } from 'react'
import Weath from './components/Weath'
import Form from './components/Form'
let ApiKey = '9713ebee0d0cc5bb917e3207c81b045c'
export class App extends Component {
  constructor(props){
    super(props)
    this.state={
      country: '',
      city: '',
      temp: '',
      pressure: '',
      error: '',
      shomo: ''
    }
  }
  errMov = ()=>{
    this.setState({
      error: 'Введите название города в поле'
    })
  }
  errLeave = ()=>{
    this.setState({
      error: 'Возможно вы не ввели название города'
    })
  }
  qetWeather = (e)=>{
   e.preventDefault()
    let city = e.target.elements.city.value
    
    if(city){
     fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${ApiKey}`)
      .then(res=>res.json())
      .then(
        (result)=>{
          this.setState({
            country: result.sys.country,
            city: result.name,
            temp: result.main.temp,
            wind: result.wind.speed,
            sky: result.weather[0].description,
            pressure: result.main.pressure,
            error: '',
            
          })
           
         console.log(result)
        }
      )}else{this.setState({
        country: '',
            city: '',
            temp: '',
            wind: '',
            sky: '',
            pressure: '',
        error: 'Возможно вы не ввели название города'})}
        }
   render() {
    return (
      <div>
        <Weath qetWeather={this.qetWeather}/>
        <Form 
        country = {this.state.country}
        cityName={this.state.city}
        temp={this.state.temp}
        wind={this.state.wind}
        sky={this.state.sky}
        pressure={this.state.pressure}
        error={this.state.error}
        errMov={this.errMov}
        errLeave={this.errLeave}
        />
    </div>
    )
  }
}

export default App