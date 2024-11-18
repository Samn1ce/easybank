import Articles from '../Components/Articles.jsx'
import Decision from '../Components/Decision.jsx'
import Hero from '../Components/Hero.jsx'
import NavHeader from '../Components/NavHeader.jsx'
import BottomNav from '../Components/BottomNav.jsx'

function MainView() {
	return (
		<div className='relative overflow-x-hidden'>
			<img
				src='/image-mockups.png'
				className='absolute right-0 top-[0%] z-20 -mt-20 -mr-32 w-[55%]'
			/>
			<header className='w-full h-screen bg-zinc-100 relative overflow-x-hidden'>
				<NavHeader />
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
