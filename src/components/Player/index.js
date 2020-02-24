import React, { useState, useEffect } from 'react';

import './style.css';

export default function Player() {
    const [x, setX] = useState(5);

    function handleKey(e) {
        var player = document.querySelector('#player');
        switch(e.keyCode) {
            case 37:
                setX(x - 25);
                break;
            case 39:
                setX(x + 25);
                break;
        }
    }
    // useEffect(() => {
    //     handleKey({ keyCode: 39 });        
    // }, []);
    document.addEventListener('keydown', handleKey);

    return (
        <img id='player' src='/images/space.png' alt='spaceship' style={{ left: x }} />
    );
}