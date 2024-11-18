import Online from "../assets/Icon/IconOnline"
import Budgeting from "../assets/Icon/IconBudgeting"
import Onboarding from "../assets/Icon/IconOnboarding"
import API from "../assets/Icon/IconAPI"

function Decision() {
    return (
        <section className='w-full h-[90vh] flex bg-zinc-200 items-center justify-center font-public'>
            <div className='w-5/6 h-full flex flex-col justify-center gap-20'>
                <div className="flex flex-col gap-8 mb-5">
                    <h2 className='text-4xl font-public text-zinc-800 font-light'>
                        Why choose Easybank?
                    </h2>
                    <p className='text-base text-zinc-400 font-semibold max-w-96'>
                        We leverage Open Banking to turn your bank account into your
                        financial hub. Control your finances like never before.
                    </p>
                </div>
                <div className="flex gap-4">
                    <div className="w-1/4 grid gap-6">
                        <Online />
                        <h3 className="text-2xl text-zinc-500 font-semibold">Online Banking</h3>
                        <p className="text-zinc-400 font-semibold">Our modern web and mobile applications allow you to keep track of your finances
                            wherever you are in the world.</p>
                    </div>
                    <div className="w-1/4 grid gap-6">
                        <Budgeting />
                        <h3 className="text-2xl text-zinc-500 font-semibold">Simple Budgeting</h3>
                        <p className="text-zinc-400 font-semibold">See exactly where your money goes each month. Receive notifications when you’re
                            close to hitting your limits.</p>
                    </div>
                    <div className="w-1/4 grid gap-6">
                        <Onboarding />
                        <h3 className="text-2xl text-zinc-500 font-semibold">Fast Onboarding</h3>
                        <p className="text-zinc-400 font-semibold">We don’t do branches. Open your account in minutes online and start taking control
                            of your finances right away.</p>
                    </div>
                    <div className="w-1/4 grid gap-6">
                        <API />
                        <h3 className="text-2xl text-zinc-500 font-semibold">Open API</h3>
                        <p className="text-zinc-400 font-semibold">Manage your savings, investments, pension, and much more from one account. Tracking
                            your money has never been easier.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Decision
