import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faPlay, faPause, faStop } from '@fortawesome/free-solid-svg-icons';




const SecondsCounter = () => {
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [milliseconds, setMilliseconds] = useState(0);

    const [isRunning, setIsRunning] = useState(null);

    useEffect(() => {
        let interval;
        if (isRunning) {
            interval = setInterval(() => {
                setMilliseconds(ms => {
                    if (ms < 99) {
                        return ms + 1;
                    } else {
                        setMilliseconds(0);
                        setSeconds(sec => {
                            if (sec < 59) {
                                return sec + 1;
                            } else {
                                setSeconds(0);
                                setMinutes(min => {
                                    if (min < 59) {
                                        return min + 1;
                                    } else {
                                        setMinutes(0);
                                        setHours(h => h + 1);
                                        return 0;
                                    }
                                });
                                return 0;
                            }
                        });
                        return 0;
                    }
                });
            }, 10);
        }
        return () => clearInterval(interval);


    }, [milliseconds, seconds, minutes, hours, isRunning]);

    const changeHours = (e) => {
        setHours(e.target.value)
    }
    const changeMinutes = (e) => {
        setMinutes(e.target.value)
    }
    const changeSeconds = (e) => {
        setSeconds(e.target.value)
    }
    const changeMilliseconds = (e) => {
        setMilliseconds(e.target.value)
    }
    const startTimer = () => {
        if (hours !== 0 || minutes !== 0 || seconds !== 0 || milliseconds !== 0) {
            setIsRunning(true);
        } else {
            window.alert('Add Time.')
        }
    }

    const pauseTimer = () => {
        setIsRunning(false);
    }

    const stopTimer = () => {
        resetTimer();
    }

    const resetTimer = () => {
        setIsRunning(false);
        setMilliseconds(0);
        setSeconds(0);
        setMinutes(0);
        setHours(0);
    }

    return (
        <>
            <div className='container'>
                <FontAwesomeIcon icon={faClock} className='watch' />

                <div>
                    <label>hh</label>
                    <input value={hours} onChange={changeHours} />
                </div>
                <div>
                    <label>mm</label>
                    <input value={minutes} onChange={changeMinutes} />
                </div>
                <div>
                    <label>ss</label>
                    <input value={seconds} onChange={changeSeconds} />
                </div>
                <div>
                    <label>ms</label>
                    <input value={milliseconds} onChange={changeMilliseconds} />
                </div>
            </div>

            {!isRunning && <button onClick={startTimer}><FontAwesomeIcon icon={faPlay} /></button>}
            {isRunning && <button onClick={pauseTimer}><FontAwesomeIcon icon={faPause} /></button>}
            <button className='btn btn-danger btn-lg' onClick={stopTimer}><FontAwesomeIcon icon={faStop} /></button>
        </>
    )
}

export default SecondsCounter;