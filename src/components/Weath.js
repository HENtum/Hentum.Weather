import React, { Component } from 'react'

export class Weath extends Component {
  constructor(props){
    super(props);
    this.state={
        value: ''
    }
    this.val = this.val.bind(this)
  }
  val(el){
    this.setState({
      value: el.target.value
    })
  } 
  render() {
    return (
      <div>
        <form className='weathForm1' onSubmit={this.props.qetWeather}>
        <div className='weathDiv1'>Узнайте погоду в вашем городе</div>
        <input name='city' value={this.state.value} onChange={this.val} className='weathInp1' placeholder='введите в каком городе' /><br></br>
        <button className='weathBt1'>Узнать погоду {'в '+this.state.value}</button>
        </form>
      </div>
    )
  }
}

export default Weath