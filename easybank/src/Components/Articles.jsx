import { useState } from 'react'
import articles from '../assets/Articles.json'

function Articles() {
	const [hoveredIndex, setHoveredIndex] = useState(false)

	return (
		<section className='w-full h-[90vh] bg-zinc-100 flex items-center justify-center font-public'>
			<div className='w-5/6 h-full flex flex-col justify-center gap-12'>
				<h2 className='text-4xl text-zinc-800'>Latest Articles</h2>
				<div className='flex gap-8'>
					{articles.map((a, index) => (
						<div
							key={a.id}
							onMouseOver={() => setHoveredIndex(index)}
							onMouseLeave={() => setHoveredIndex(null)}
							className='w-1/4 text-zinc-400 bg-white rounded-lg overflow-hidden'
						>
							<img
								src={a.img}
								className={`w-full transition-all ${
									index === 0 ? 'h-[44%]' : ''
								} ${
									hoveredIndex === index
										? 'scale-110 transition-transform duration-300'
										: ''
								}`}
							/>
							<div className='w-4/5 mx-auto py-4 flex flex-col gap-2'>
								<p className='text-xs'>By {a.writer}</p>
								<p className='text-zinc-700 font-semibold leading-5 font-public'>
									{a.title}
								</p>
								<p className='text-sm'>{a.content}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default Articles
