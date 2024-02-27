import { useState } from 'react';
import './App.css'
import { useEffect } from 'react';
import img from './assets/img1.jpg';
function App() {
  const endGame = new Date('Mar 12, 2024 23:59:59').getTime();
  let difference
  const [days, setDays] = useState('')
  const [hours, setHours] = useState('')
  const [minutes, setMinutes] = useState('')
  const [seconds, setSeconds] = useState('')
  const [mili, setMili] = useState('')
  const [message,setMessage] = useState(false)

  let x = setInterval(function callMe(){
    let now = new Date().getTime();
    difference = endGame-now;
    let total_seconds = Math.floor(difference/1000);
    let total_minutes = Math.floor(total_seconds/60);
    let total_hours = Math.floor(total_minutes/60);
    let days = Math.floor(total_hours/24);

    let seconds = Math.floor(total_seconds%60);
    let minutes = Math.floor(total_minutes%60);
    let hours = Math.floor(total_hours%24);

    setDays(days);
    setHours(hours);
    setMinutes(minutes);
    setSeconds(seconds);
    setMili(difference%1000);
    if(days === 0 && hours ===0 && minutes ===0 && seconds ===0 ){
      setMessage(true)
    }
  }
  ,200)

  
  if(message){
    return (
      <>
      <img style={{width:"500px", border: "1px solid #ff66cc", borderRadius: "10px"}} src={img} alt="hello" />
      <h1 style={{backgroundColor:"#ff66cc",padding: "20px", borderRadius:"10px"}}>All the Best!! Nigga</h1>
      </>
      
    )
  }
  if(!message){
    return (
    <>
    <h1>Saumya!</h1>
    <h2 style={{color: "white", backgroundColor: "red", borderRadius: "15px"}}>DON'T STOP YET!</h2>
    <div className="countDown">
      <h1 style={{color:"red"}}>{days} days {hours}h {minutes}m {seconds}s {mili}ms</h1>
    </div>
    <h2 style={{color: "white", backgroundColor: "red", borderRadius: "15px"}}>Keep Going!</h2>
    
    </>
  )
}
  
  
}

export default App
