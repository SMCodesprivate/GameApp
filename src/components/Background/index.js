import React, { useEffect, useState } from 'react';

import './style.css';

export default function Background() {
	const [clouds, setClouds] = useState([]);
	const [generate, setGenerate] = useState(0);
	var o = 0;

	function getX() {
		var x = Math.floor(Math.random() * (window.innerWidth - 100));
		return x;
	}
	function init() {
		setTimeout(() => {
			o++;
			var list = [];
			for(var count = 0;count <= 1;count++) {
				list.push({ x: getX(), y: -100, key: o });
			}
			list.map(l => {
				setClouds([...clouds, l]);
				return clouds;
			});
		}, 250);
		setTimeout(() => {
			var cloudsList = document.getElementsByClassName('cloud');
			for(var ctn = 0;ctn <= cloudsList.length-1;ctn++) {
				let cloud = cloudsList[ctn];
				cloud.style.transition = 'all linear 10s';
				cloud.style.setProperty('top', (window.innerHeight+100)+'px');
				setTimeout(() => {
					cloud.remove();
				}, 10000);
			}
		}, 350);
		setTimeout(() => {
			if(generate === 0) {
				setGenerate(1);
			} else {
				setGenerate(0);
			}
		}, 800);
	}
	useEffect(() => init(), [generate]);

  return (
    <div id="back">
		{clouds.map(cloud => (
			<img key={cloud.x+":"+cloud.y+":"+cloud.key} src='/images/cloud.webp' className='cloud' style={{ left: cloud.x, top: cloud.y }} alt='images' />
		))}
    </div>
  );
}
