import React, { useState, useEffect } from 'react';
import './StopWatch.css';

function Stopwatch() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  const reset =()=>{
    setTime(0);
  }

  useEffect(() => {
    let interval = null;
    if (running) {
      interval = setInterval(() => {
        setTime(prevTime => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running]);

  const startStop =() =>{
    setRunning(!running)

  }

  const formatTime = () => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes
      .toString()
      .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };
  return (
    <div className="App">
      <h1>Stopwatch</h1>
      <div className="stopwatch">{formatTime()}</div>
      <div className="controls">
        <button onClick={startStop}>{running ? 'Stop' : 'Start'}</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

export default Stopwatch;
