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
	<>
	<Nav>
		<Bars />

		<NavMenu>
		<NavLink to='/home' >
			Home
		</NavLink>
		<NavLink to='/addEvents' >
			Add Events
		</NavLink>
		<NavLink to='/profile' >
			Profile
		</NavLink>
		{/* <NavLink to='/team' >
			Teams
		</NavLink>
		<NavLink to='/blogs' >
			Blogs
		</NavLink>
		<NavLink to='/sign-up' >
			Sign Up
		</NavLink> */}
		{/* Second Nav */}
		{/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
		</NavMenu>
		<NavBtn>
		<NavBtnLink to='/'>Sign Out</NavBtnLink>
		</NavBtn>
	</Nav>
	</>
);
};

export default Navbar;
