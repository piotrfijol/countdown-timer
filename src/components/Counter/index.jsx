import React, { useEffect, useState } from 'react'
import { FlipCountdown } from "../FlipCountdown";
import "./counter.scss"

export const Counter = () => {
    let [seconds, setSeconds] = useState(0);
    let [minutes, setMinutes] = useState(0);
    let [hours, setHours]     = useState(0);
    let [days, setDays]       = useState(0);
    let currentDate = new Date();
    currentDate.setMonth(currentDate.getMonth() + 1);
    const FINAL_DATE = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);

    
    useEffect(() => {
        
        let timeoutID;
        let timeLeft = FINAL_DATE.getTime() - Date.now();
        if(timeLeft > 0) {
            let timestampInSeconds = parseInt(timeLeft/1000);

            timeoutID = setInterval(() => {
                setSeconds(timestampInSeconds % 60);
                setMinutes(parseInt((timestampInSeconds % (60*60)) / 60));
                setHours(parseInt(timestampInSeconds % (60*60*24) / (60*60)));
                setDays(parseInt(timestampInSeconds / (60*60*24)));
            }, 1000);

        }   

        return () => {
            if(timeoutID)
                clearInterval(timeoutID);
        }

    }, [seconds, minutes, hours, days]);

  return (
        <div className="counter">
            <div className="digits-col">
                <FlipCountdown 
                    current={days}
                />
                <p className="label">DAYS</p>
            </div>
            <div className="digits-col">
                <FlipCountdown 
                    current={hours}
                />
                <p className="label">HOURS</p>
            </div>
            <div className="digits-col">
                <FlipCountdown 
                    current={minutes}
                />
                <p className="label">MINUTES</p>
            </div>
            <div className="digits-col">
                <FlipCountdown 
                    current={seconds}
                />
                <p className="label">SECONDS</p>
            </div>
        </div>
    )
}
