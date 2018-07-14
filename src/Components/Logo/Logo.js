import React from 'react';
import Tilt from 'react-tilt'
import brain from './brain.png';
import './Logo.css';


const Logo = () =>{
	return(
        <div className = 'center pa3'>
        <Tilt className="Tilt br2 shadow-5" options={{ max : 50 }} style={{ height: 150, width: 150 }} >
 			<div className="Tilt-inner pa3">
          		<img style={{paddingTop: '5px'}} alt='logo' src={brain}/>
        	</div>
		</Tilt>

        </div>
		)
}

export default Logo;