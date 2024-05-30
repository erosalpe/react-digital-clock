import React, {useState, useEffect} from 'react';
import './digitalClock.css';

function DigitalClock(){

    const[time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000)

        return () => {
            clearInterval(intervalId);
        }
    }, []);

    useEffect(() =>{
        const currentHour = time.getHours();
        if(currentHour >= 21 || currentHour < 6){
            document.body.style.backgroundImage = 'url(public/MFujiNight.webp)';
        } else {
            document.body.style.backgroundImage = 'url(public/MFujiNoon.webp)';
        }

        return () => {
            document.body.style.backgroundImage = 'url(public/MFujiNoon.webp)';
        }
    }, [time]);

    /*
    function formatTime(){
        const hours = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();

        return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;
    }

    function padZero(number){
        return (number < 10 ? "0" : "") + number;
    }
    */

    return(
        <div className='clock-container px-5 mb-5'>
            <div className='clock text-light fw-bold text-center'>
                <span>{time.toLocaleTimeString()}</span>
            </div>
        </div>
    )
}

export default DigitalClock