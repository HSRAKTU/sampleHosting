import { useState } from 'react';
import './App.css'
import { useEffect } from 'react';

function App() {
  const endGame = new Date('Mar 11, 2024 23:59:59').getTime();
  let now = new Date().getTime();
  let difference = endGame-now;
  const [time, setTime] = useState(difference)

  useEffect(() => {

    setTimeout(() => {
      setTime(difference)
    },50)
  },[time])
  
  let total_seconds = Math.floor(time/1000);
  let total_minutes = Math.floor(total_seconds/60);
  let total_hours = Math.floor(total_minutes/60);
  let days = Math.floor(total_hours/24);

  let seconds = Math.floor(total_seconds%60);
  let minutes = Math.floor(total_minutes%60);
  let hours = Math.floor(total_hours%24);

  return (
    <>
    <div className="countDown">
      <h2>Hello</h2>
      <h1 style={{color:"red"}}>{days} days {hours}h {minutes}m {seconds}s {difference%1000}ms</h1>
    </div>
    </>
  )
}

export default App
