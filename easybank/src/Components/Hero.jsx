import IconBG from '../assets/Icon/IconBG.jsx'

function Hero() {
	return (
		<div className='max-w-7xl mx-auto h-full grid md:grid-cols-2'>
			<div className='order-last flex flex-col items-center text-center lg:items-start justify-center md:order-first mx-auto max-w-lg p-8 h-full'>
				<p className='text-5xl lg:text-6xl text-gray-800'>
					Next generation digital banking
				</p>
				<p className='mt-10 text-sm text-gray-400'>
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
					<IconBG className='absolute -top-60 w-[1000px] -left-16 md:-right-64 md:top-20 md:w-[850px] lg:w-[1100px] lg:-top-28 lg:-right-72' />
				</div>
			</div>
		</div>
	)
}

export default Hero
