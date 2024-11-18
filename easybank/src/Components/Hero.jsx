import BG from '../assets/Icon/IconBG.jsx'
import Button from './Button.jsx'

function Hero() {
	return (
		<div className='w-full lg:h-[89%] flex justify-center lg:justify-end items-center relative z-10 py-5'>
			<div className='w-11/12 lg:h-full flex lg:justify-between justify-center items-center relative overflow-hidden'>
				<div className='w-full lg:w-1/2 flex flex-col justify-center items-start gap-8'>
					<h1 className='text-4xl text-center lg:text-left lg:text-6xl font-public text-zinc-800 font-light'>
						Next Generation Digital Banking
					</h1>
					<p className='text-sm text-center lg:text-left lg:text-lg text-zinc-400 font-semibold max-w-96'>
						Take your financial life online. Your Easybank account
						will be a one-stop-shop for spending, saving, budgeting,
						investing and much more.
					</p>
					<Button classname={`mx-auto`} />
				</div>
				<BG />
			</div>
		</div>
	)
}

export default Hero
