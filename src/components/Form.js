import React, { Component } from 'react'

export class Form extends Component {
  App = ()=>{
    return(<div>
      {this.props.pressure>1013?'Давление повышенное':'Давление пониженное'}
    </div>
    )
  }
  render() {
  return (
      <div>
        {this.props.cityName&&
        <div className='formDiv1'>
          <p className='formP1'>{'Место: '+this.props.cityName+' , '+ this.props.country}</p>
          <p>{'Температура: '+Math.floor(this.props.temp-273.15)+ '°C'}</p>
          <p>{'Ветер: '+Math.floor(this.props.wind)+' м/с'}</p>
          <p>{'Облака: '+this.props.sky}</p>
          <p>{'Давление: '+this.props.pressure}</p>
          <p className='formP2'>{this.App()}</p>
        </div>
        }
        <p className='formErr1'onMouseEnter={()=>{this.props.errMov()}}onMouseLeave={()=>{this.props.errLeave()}}>{this.props.error}</p>
      </div>
    )
  }
}

export default Form