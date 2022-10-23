import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';


export const Nav = styled.nav`
height: 85px;
display: flex;
justify-content: space-between;
padding: 0.2rem calc((100vw - 1000px) / 2);
z-index: 12;
background-color: #476d7c;
    /* border-top: 3px solid #ccc;
    border-bottom: 3px solid #ccc; */
/* Third Nav */
/* justify-content: flex-start; */
`;

export const NavLink = styled(Link)`
border-radius: 4px;
padding: 10px 22px;
color: #000000;
outline: none;
border: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;
margin-left: 24px;
&:hover {
	transition: all 0.2s ease-in-out;
	background: #254B62;
	color: #fff;
}
&.active {
	background: #254B62;
	color: #fff;
}
`;

export const NotFoundLink = styled(Link)`
border-radius: 4px;
background: #0B152D;
padding: 10px 22px;
color: #ffffff;
outline: none;
border: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;
margin-left: 24px;
&:hover {
	transition: all 0.2s ease-in-out;
	background: maroon;
	border-radius: 200px;
	color: #000000;
}
&.active {
	background: maroon;
	color: #000000;
}
`;


export const Bars = styled(FaBars)`
display: none;
@media screen and (max-width: 768px) {
	display: block;
	position: absolute;
	top: 0;
	right: 0;
	transform: translate(-100%, 75%);
	font-size: 1.8rem;
	cursor: pointer;

}
`;

export const NavMenu = styled.div`
display: flex;
align-items: center;
margin-right: -24px;
/* Second Nav */
/* margin-right: 24px; */
/* Third Nav */
/* width: 100vw;
white-space: nowrap; */
@media screen and (max-width: 768px) {
	display: none;
}
`;

export const NavBtn = styled.nav`
display: flex;
align-items: center;
margin-right: 24px;
/* Third Nav */
/* justify-content: flex-end;
width: 100vw; */
@media screen and (max-width: 768px) {
	display: none;
}
`;

export const NavBtnLink = styled(Link)`
border-radius: 4px;
padding: 10px 22px;
color: #ffffff;
font-weight: 900;
outline: none;
border: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;
/* Second Nav */
margin-left: 24px;
&:hover {
	transition: all 0.2s ease-in-out;
	background: #FF7518;
	font-weight: normal;
	color: #000000;
}
`;