import API from '../assets/Icon/IconAPI'
import Budgeting from '../assets/Icon/IconBudgeting'
import Onboarding from '../assets/Icon/IconOnboarding'
import Online from '../assets/Icon/IconOnline'

function Decision() {
	return (
		<section className='w-full px-5 lg:px-0 flex bg-zinc-200 items-center justify-center font-public py-5'>
			<div className='max-w-7xl mx-auto p-5 lg:h-full flex flex-col justify-center gap-8 sm:gap-20'>
				<div className='flex flex-col gap-8 mb-5 text-center justify-center items-center md:items-start md:justify-start md:text-left'>
					<h2 className='text-4xl font-public text-zinc-800 font-light'>
						Why choose Easybank?
					</h2>
					<p className='text-base text-zinc-400 font-semibold max-w-96'>
						We leverage Open Banking to turn your bank account into
						your financial hub. Control your finances like never
						before.
					</p>
				</div>
				<div className='flex gap-4 w-full border flex-wrap lg:flex-nowrap'>
					<div className='w-full sm:w-47 lg:w-1/4 grid place-items-center sm:place-items-start gap-6'>
						<Online />
						<h3 className='text-2xl text-zinc-500 font-semibold'>
							Online Banking
						</h3>
						<p className='text-zinc-400 font-semibold text-center sm:text-left'>
							Our modern web and mobile applications allow you to
							keep track of your finances wherever you are in the
							world.
						</p>
					</div>
					<div className='w-full sm:w-47 lg:w-1/4 grid place-items-center sm:place-items-start gap-6'>
						<Budgeting />
						<h3 className='text-2xl text-zinc-500 font-semibold'>
							Simple Budgeting
						</h3>
						<p className='text-zinc-400 font-semibold text-center sm:text-left'>
							See exactly where your money goes each month.
							Receive notifications when you’re close to hitting
							your limits.
						</p>
					</div>
					<div className='w-full sm:w-47 lg:w-1/4 grid place-items-center sm:place-items-start gap-6'>
						<Onboarding />
						<h3 className='text-2xl text-zinc-500 font-semibold'>
							Fast Onboarding
						</h3>
						<p className='text-zinc-400 font-semibold text-center sm:text-left'>
							We don’t do branches. Open your account in minutes
							online and start taking control of your finances
							right away.
						</p>
					</div>
					<div className='w-full sm:w-47 lg:w-1/4 grid place-items-center sm:place-items-start gap-6'>
						<API />
						<h3 className='text-2xl text-zinc-500 font-semibold'>
							Open API
						</h3>
						<p className='text-zinc-400 font-semibold text-center sm:text-left'>
							Manage your savings, investments, pension, and much
							more from one account. Tracking your money has never
							been easier.
						</p>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Decision
