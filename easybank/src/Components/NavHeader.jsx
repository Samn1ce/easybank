import Logo from '../assets/Icon/IconLogo.jsx'
import Button from './Button.jsx'

function NavHeader() {
	return (
		<div className='bg-white h-70 w-full flex justify-center items-center relative z-20'>
			<div className='h-full w-5/6 flex justify-between items-center'>
				<Logo />
				<nav className='hidden md:flex gap-4 font-public font-light'>
					<div>Home</div>
					<div>About</div>
					<div>Contact</div>
					<div>Blog</div>
					<div>Careers</div>
				</nav>
				<Button classname={`hidden md:block`} />
			</div>
		</div>
	)
}

export default NavHeader
