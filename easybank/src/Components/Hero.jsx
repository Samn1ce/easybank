import IconBG from '../assets/Icon/IconBG.jsx'

function Hero() {
	return (
		<div className='max-w-7xl mx-auto h-full grid md:grid-cols-2'>
			<div className='order-last flex flex-col text-center md:text-left lg:items-start justify-center md:order-first max-w-lg p-8 h-full mx-auto lg:mx-0'>
				<p className='text-5xl lg:text-6xl text-gray-800'>
					Next generation digital banking
				</p>
				<p className='mt-10 text-sm lg:text-xl text-gray-400'>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit.
					Rem ipsam in accusamus, quis soluta distinctio sapiente
					dicta aliquam magni facilis quibusdam tenetur explicabo
					necessitatibus debitis enim est placeat consequatur ipsa?
				</p>
				<div>
					<a
						href=''
						className='mt-10 rounded-full text-white inline-block p-2.5 px-7 from-green-500 to-blue-500 bg-gradient-to-r'
					>
						Request Invite
					</a>
				</div>
			</div>

			<div className='order-first md:order-last h-[26rem] md:h-full'>
				<div>
					<IconBG className='absolute -top-60 w-[1000px] -left-16 md:-right-84 md:top-20 md:w-[850px] lg:w-[1100px] 2xl:w-[2000px] lg:-top-28 lg:-right-400 md:left-auto' />
				</div>
			</div>
		</div>
	)
}

export default Hero
