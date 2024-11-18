import Articles from '../Components/Articles.jsx'
import Decision from '../Components/Decision.jsx'
import Hero from '../Components/Hero.jsx'
import NavHeader from '../Components/NavHeader.jsx'
import BottomNav from '../Components/BottomNav.jsx'
import MobileBG from '../assets/Icon/IconMobileBG.jsx'

function MainView() {
	return (
		<div className='relative overflow-x-hidden'>
			<img
				src='/image-mockups.png'
				className='absolute left-1/2 transform -translate-x-1/2 lg:right-0 w-[85%] -mt-7 lg:block lg:top-[0%] md:top-16 z-20 md:w-2/5 md:mt-4 md:-mr-8 lg:-mt-20 lg:-mr-32 lg:w-[55%]'
			/>
			<header className='w-full lg:h-screen bg-zinc-100 relative overflow-x-hidden'>
				<NavHeader />
				<MobileBG />
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
