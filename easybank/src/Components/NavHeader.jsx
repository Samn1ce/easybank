import { useState } from 'react'
import Logo from '../assets/Icon/IconLogo.jsx'
import Button from './Button.jsx'
import Menu from '../assets/Icon/IconHamburger.jsx'
import Close from '../assets/Icon/IconClose.jsx'

function NavHeader({ isMenuOpen, toggleMenu }) {
	return (
		<div className='bg-white h-70 w-full flex justify-center items-center relative z-20'>
			<div className='h-full w-5/6 flex justify-between items-center max-w-7xl mx-auto'>
				<Logo />
				<nav className='hidden md:flex gap-4 font-public font-light'>
					<div>Home</div>
					<div>About</div>
					<div>Contact</div>
					<div>Blog</div>
					<div>Careers</div>
				</nav>
				<nav onClick={toggleMenu} className='cursor-pointer md:hidden'>
					{isMenuOpen ? <Close /> : <Menu />}
				</nav>
				<Button classname={`hidden md:block`} />
			</div>
		</div>
	)
}

export default NavHeader
