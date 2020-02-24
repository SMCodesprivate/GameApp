import React, { useEffect, useState } from 'react';

import starterCloudAnime from '../../utils/starterCloudAnime';
import generateCloud from '../../utils/generateCloud';
import getX from '../../utils/getX';

import Player from '../Player/';

import './style.css';

export default function Background() {
    const [clouds, setClouds] = useState([]);
    const [generate, setGenerate] = useState([]);
    
    const calc = ((window.innerWidth-1340)/2);
    const calcHeight = ((window.innerHeight-700)/2);

	useEffect(() => {
        var index = 0;
        setInterval(() => {
            var cd = { x: getX(calc), y: calcHeight, key: index };
            var list = clouds;
            list.push(cd);
            setClouds([...clouds, list]);
            console.log(clouds);
            starterCloudAnime(index);
            // setTimeout(() => {
            //     setClouds(clouds.filter(item => item.key !== cd.key));
            // }, 750);
            index++;
        }, 1250);
    }, []);



    return (
        <div id='back'>
            <div id='clouds'>
                {clouds.map(cloud => (
                    <img key={cloud.x+':'+cloud.y+':'+cloud.key} src='/images/cloud.webp' className='cloud' style={{ left: cloud.x, top: cloud.y, opacity: 0 }} id={'cloud_'+cloud.key} alt='images' />
                ))}
            </div>
            <div id='base'>
                <Player />
            </div>
        </div>
    );
}
