import Logo from '../assets/Icon/IconLogo.jsx'
import Button from './Button.jsx'
import IG from '../assets/Icon/IconInstagram.jsx'
import X from '../assets/Icon/IconTwitter.jsx'

function BottomNav() {
	return (
		<div className='w-full bg-darkBlue lg:h-[30vh]'>
			<div className='max-w-7xl w-5/6 h-full flex flex-col justify-between items-center mx-auto py-5 gap-4 md:gap-0 md:flex-row'>
				<div className='flex justify-between items-center flex-col gap-4 w-1/2 md:gap-4 md:flex-row lg:gap-0'>
					<div className='flex justify-center items-center flex-col gap-4'>
						<Logo color='#ffffff' />
						<div className='flex gap-4'>
							<IG />
							<X />
						</div>
					</div>
					<nav className='flex flex-col gap-4 text-zinc-400 md:flex-row md:gap-20'>
						<div className='flex flex-col gap-4'>
							<div>About Us</div>
							<div>Contact</div>
							<div>Blog</div>
						</div>
						<div className='flex flex-col gap-4'>
							<div>Careers</div>
							<div>Support</div>
							<div>Privacy Policy</div>
						</div>
					</nav>
				</div>
				<div>
					<Button />
				</div>
			</div>
		</div>
	)
}

export default BottomNav
