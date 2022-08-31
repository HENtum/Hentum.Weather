import React,{useState} from 'react'

export default function Weath(props){
  let [change,setChange] = useState('')
  return (
      <div>
        <form className='weathForm1' onSubmit={props.qetWeather}>
        <div className='weathDiv1'>Узнайте погоду в вашем городе</div>
        <input name='city' className='weathInp1' onChange={(e)=>{setChange(e.target.value)}} placeholder='введите в каком городе' /><br></br>
        <button className='weathBt1'>Узнать погоду {'в ' + change}  </button>
        </form>
      </div>
    )
}

