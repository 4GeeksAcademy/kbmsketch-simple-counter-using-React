import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';




const Counter = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCount((prevCount) => {

                if (prevCount >= 9999) {
                    return 0;
                }
                return prevCount + 1;
            });
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const formattedCount = String(count).padStart(4, '0');

    return (
        <>
            <div className='big-counter'>
                <div className='clock'>
                    <FontAwesomeIcon icon={faClock} />
                </div>
                <div>{formattedCount}</div>
            </div>
        </>
    )
}

export default Counter;