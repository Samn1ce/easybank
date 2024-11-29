import { useState } from 'react'

import Articles from '../Components/Articles.jsx'
import BottomNav from '../Components/BottomNav.jsx'
import Decision from '../Components/Decision.jsx'
import Hero from '../Components/Hero.jsx'
import NavHeader from '../Components/NavHeader.jsx'

function MainView() {
	// State to manage menu visibility
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	// Toggle menu visibility
	const toggleMenu = () => setIsMenuOpen((prev) => !prev)

	return (
		<div className='relative overflow-x-hidden'>
			{isMenuOpen && (
				<div className='block w-full h-[10%] bg-gradient-to-b from-zinc-900/40 to-zinc-100 top-16 left-0 absolute md:hidden z-30 py-3'>
					<nav className='w-11/12 h-2/3 bg-white mx-auto rounded-md text-center text-xl font-semibold text-zinc-700 flex flex-col justify-around py-4'>
						<div>Home</div>
						<div>About</div>
						<div>Contact</div>
						<div>Blog</div>
						<div>Careers</div>
					</nav>
				</div>
			)}
			<img
				src='/image-mockups.png'
				className='absolute left-1/2 transform -translate-x-1/2 max-w-[440px] z-20 md:translate-x-0 md:transform-none md:right-0 md:left-auto md:max-w-none md:top-16 lg:top-[0%] md:w-2/5 md:-mt-6 md:-mr-10 lg:-mt-20 lg:-mr-32 lg:w-[55%]'
			/>
			<header className='w-full min-h-[26rem] md:h-[70vh] lg:h-[90vh] lg:max-h-[700px] bg-zinc-100 relative overflow-hidden'>
				<NavHeader isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
				<Hero />
			</header>
			<main className='w-full'>
				<Decision />
				<Articles />
			</main>
			<footer>
				<BottomNav />
			</footer>
		</div>
	)
}

export default MainView
