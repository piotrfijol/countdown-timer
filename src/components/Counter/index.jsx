import React, { useEffect, useState } from 'react'
import { FlipCountdown } from "../FlipCountdown";
import "./counter.scss"

let currentDate = new Date();
currentDate.setMonth(currentDate.getMonth() + 1);

const FINAL_DATE = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);

const getTimeLeft = () => {

    let timeLeft = FINAL_DATE.getTime() - Date.now();
    let timestampInSeconds = parseInt(timeLeft/1000);

    return {
        seconds: timestampInSeconds % 60,
        minutes: parseInt((timestampInSeconds % (60*60)) / 60),
        hours: parseInt(timestampInSeconds % (60*60*24) / (60*60)),
        days: parseInt(timestampInSeconds / (60*60*24)),
    };
};

export const Counter = () => {
    const [timeLeft, setTimeLeft] = useState(getTimeLeft());
    
    useEffect(() => {
        
        let timeoutID;
        const timeLeftObj = getTimeLeft();
        if(Object.values(timeLeftObj).some(val => val !== 0)) {
            timeoutID = setTimeout(() => {
                setTimeLeft(timeLeftObj);
            }, 1000);
        }

        return () => {
            clearTimeout(timeoutID)
        };
    }, [timeLeft]);


  return (
        <div className="counter">
            <div className="digits-col">
                <FlipCountdown 
                    current={timeLeft.days}
                />
                <p className="label">DAYS</p>
            </div>
            <div className="digits-col">
                <FlipCountdown 
                    current={timeLeft.hours}
                />
                <p className="label">HOURS</p>
            </div>
            <div className="digits-col">
                <FlipCountdown 
                    current={timeLeft.minutes}
                />
                <p className="label">MINUTES</p>
            </div>
            <div className="digits-col">
                <FlipCountdown 
                    current={timeLeft.seconds}
                />
                <p className="label">SECONDS</p>
            </div>
        </div>
    )
}
