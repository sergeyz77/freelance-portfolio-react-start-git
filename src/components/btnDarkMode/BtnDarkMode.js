

import { useState } from 'react';
import { useEffect } from 'react';
import sun from './sun.svg';
import moon from './moon.svg';
import './style.css';

const BtnDarkMode = () => {

	const [darkMode, setDarkMode] =useState('light')


    useEffect(() => {
       
		if (darkMode === 'dark') {
			document.body.classList.add('dark');
		} else {
			document.body.classList.remove('dark');
		}

	}, [darkMode]);






	const toggleDarkMode = () => {
		setDarkMode((currentValue) => {
			return currentValue === 'light' ? 'dark' : 'light';
		});
		
	};
  
	
	return (
<>
		{darkMode}
		<button className="dark-mode-btn"
		onClick={toggleDarkMode}
		>
		<img
			src={sun}
			alt="Light mode"
			className="dark-mode-btn__icon"
		/>
		<img
			src={moon}
			alt="Dark mode"
			className="dark-mode-btn__icon"
		/>
	</button>
	</>
	);
};

export default BtnDarkMode;
