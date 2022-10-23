import React from 'react';
import {
Nav,
NavLink,
Bars,
NavMenu,
} from './NavbarElements';
import "./Navbar.css"

import logo from './logo.png'

const Navbar = () => {
return (
	<Nav>
		<div className='navImg'>
			<img src={logo} width="90" height="90" alt="logo"></img>
		</div>
		<Bars />
		<NavMenu>
        <NavLink to='/home' activeStyle>
			Home
		</NavLink>
		<NavLink to='/data' activeStyle>
			Data
		</NavLink>
		<NavLink to='/charts' activeStyle>
			Charts
		</NavLink>
		</NavMenu>
		{/* <NavBtn>
		<NavBtnLink to='/signin'>
		Sign In
		</NavBtnLink>
		<NavLink to='/sign-up' activeStyle>
			Sign Up
		</NavLink>
		</NavBtn> */}
	</Nav>
);
};


export default Navbar