import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const endDate = new Date(Date.UTC(2023, 11, 16, 20, 0, 0)).getTime();
  
  // State for countdown
  const [countdown, setCountdown] = useState({
    months: '00',
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00',
  });

  // Update countdown function
  const updateCountdown = () => {
    const now = new Date().getTime();
    const secondsLeft = (endDate - now) / 1000;

    if (secondsLeft > 0) {
      setCountdown({
        months: formatTime(Math.floor(secondsLeft / (86400 * 30))),
        days: formatTime(Math.floor((secondsLeft / 86400) % 30)),
        hours: formatTime(Math.floor((secondsLeft % 86400) / 3600)),
        minutes: formatTime(Math.floor((secondsLeft % 3600) / 60)),
        seconds: formatTime(Math.floor(secondsLeft % 60)),
      });
    } else {
      // Handle countdown complete
    }
  };

  // Format time to ensure two digits
  const formatTime = time => (time < 10 ? `0${time}` : time);

  // Effect hook to handle interval
  useEffect(() => {
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <header>
        <section className="countdown" id="countdown">
          <div className="countdown-content">
            <div className="countdown-content-item">
              <h2>{countdown.days}</h2>
            </div>
            <div className="countdown-content-item">
              <h2>{countdown.hours}</h2>
            </div>
            <div className="countdown-content-item">
              <h2>{countdown.minutes}</h2>
            </div>
            <div className="countdown-content-item">
              <h2>{countdown.seconds}</h2>
            </div>
          </div>
          
          {/* Display this div when countdown ends */}
          {/* <div className="countdown-content-final">
            <h2>It's Time!</h2>
          </div> */}
        </section>
      </header>
    </div>
  );
}

export default App;
