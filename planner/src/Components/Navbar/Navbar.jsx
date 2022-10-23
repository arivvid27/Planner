import React from 'react';
import {
Nav,
NavLink,
Bars,
NavMenu,
NavBtn,
NavBtnLink,
} from './NavbarElements';

const Navbar = () => {
return (
	<Nav>
		<Bars />
		<NavMenu>
    <NavLink to='/' activeStyle>
			Home
		</NavLink>
		{/* <NavLink to='/about' activeStyle>
			About
		</NavLink>
		<NavLink to='/browse' activeStyle>
			Manage
		</NavLink> */}
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