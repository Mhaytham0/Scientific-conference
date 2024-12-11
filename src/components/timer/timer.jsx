import React, { useState, useEffect } from 'react';
import './timer.css';

const Timer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const endTime = new Date("2024-12-29T00:00:00"); // Set the target date
      const currentTime = new Date();
      const remainingTime = endTime - currentTime;

      if (remainingTime <= 0) {
        clearInterval(interval);
      } else {
        const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
        const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));

        setTimeLeft({ days, hours, minutes });
      }
    }, 60000); // Update every minute

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (
    <div className="timer-container">
      <h3 className="timer-title">الوقت المتبقي علي انعقاد المؤتمر</h3>
      <div className="timer">
        <div className="time-section">
          <span className="time-value">{timeLeft.minutes.toString().padStart(2, '0')}</span>
          <span className="time-label">دقيقة</span>
        </div>
        <div className="time-section">
          <span className="time-value">{timeLeft.hours.toString().padStart(2, '0')}</span>
          <span className="time-label">ساعة</span>
        </div>
        <div className="time-section">
          <span className="time-value">{timeLeft.days.toString().padStart(2, '0')}</span>
          <span className="time-label">يوم</span>
        </div>
      </div>
    </div>
  );
};

export default Timer;
