import Close from '../assets/Icon/IconClose.jsx'
import Menu from '../assets/Icon/IconHamburger.jsx'
import Logo from '../assets/Icon/IconLogo.jsx'
import Button from './Button.jsx'

function NavHeader({ isMenuOpen, toggleMenu }) {
	return (
		<div className='bg-white h-70 w-full flex justify-center items-center relative z-20'>
			<div className='size-full flex px-5 justify-between items-center max-w-7xl mx-auto'>
				<Logo />
				<nav className='hidden md:flex gap-4 font-public font-light'>
					<div className='text-zinc-400 hover:text-zinc-800 cursor-pointer'>
						Home
					</div>
					<div className='text-zinc-400 hover:text-zinc-800 cursor-pointer'>
						About
					</div>
					<div className='text-zinc-400 hover:text-zinc-800 cursor-pointer'>
						Contact
					</div>
					<div className='text-zinc-400 hover:text-zinc-800 cursor-pointer'>
						Blog
					</div>
					<div className='text-zinc-400 hover:text-zinc-800 cursor-pointer'>
						Careers
					</div>
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
