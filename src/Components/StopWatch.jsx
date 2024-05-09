import React, { useState, useEffect } from 'react';
import './StopWatch.css';

function App() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

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

  const startStop = () => {
    setRunning(!running);
  };

  const reset = () => {
    setTime(0);
    setRunning(false);
  };

  const formatTime = () => {
    
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    return `${minutes
      .toString()
      .padStart(1, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="App">
      <h1>Stopwatch</h1>
      <div className="stopwatch">Time: {formatTime()}</div>
      <div className="controls">
        <button onClick={startStop}>{running ? 'Stop' : 'Start'}</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

export default App;
