import BG from '../assets/Icon/IconBG.jsx'
import Button from './Button.jsx'

function Hero() {
	return (
		<div className='max-w-7xl mx-auto w-full lg:h-[89%] flex justify-center md:justify-end items-center relative z-10 py-5 md:py-0'>
			<div className='w-11/12 lg:h-full flex items-start justify-start lg:justify-between lg:items-center relative overflow-hidden'>
				<div className='w-full md:w-1/2 flex flex-col justify-center md:justify-start sm:items-center md:items-start gap-8 py-0 md:py-5 lg:py-0'>
					<h1 className='text-4xl text-center md:text-left lg:text-6xl xl:text-7xl font-public text-zinc-800 font-light'>
						Next Generation Digital Banking
					</h1>
					<p className='text-sm text-center md:text-left lg:text-lg text-zinc-400 font-semibold max-w-96'>
						Take your financial life online. Your Easybank account
						will be a one-stop-shop for spending, saving, budgeting,
						investing and much more.
					</p>
					<Button classname={`mx-auto md:mx-0`} />
				</div>
				<BG />
			</div>
		</div>
	)
}

export default Hero
