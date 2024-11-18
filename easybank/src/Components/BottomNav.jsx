import Logo from '../assets/Icon/IconLogo.jsx'
import Button from './Button.jsx'
import IG from '../assets/Icon/IconInstagram.jsx'
import X from '../assets/Icon/IconTwitter.jsx'

function BottomNav() {
	return (
		<div className='w-full h-[30vh] bg-darkBlue'>
			<div className='w-5/6 h-full flex justify-between items-center mx-auto'>
				<div className='flex justify-between items-center w-1/2'>
					<div className='flex justify-center items-center flex-col gap-4'>
						<Logo color='#ffffff' />
						<div className='flex gap-4'>
							<IG />
							<X />
						</div>
					</div>
					<nav className='flex gap-20 text-zinc-400'>
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
