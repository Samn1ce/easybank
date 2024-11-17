import BG from '../assets/Icon/IconBG.jsx'
import Button from './Button.jsx'

function Hero() {
    return (
        <div className='w-full h-[89%] flex justify-end items-center relative z-20'>
            <div className='w-11/12 h-full flex justify-between relative'>
                <div className='w-1/2 flex flex-col justify-center items-start gap-8'>
                    <h1 className='text-6xl font-public text-zinc-800 font-light'>
                        Next Generation Digital Banking
                    </h1>
                    <p className='text-lg text-zinc-400 font-semibold max-w-96'>
                        Take your financial life online. Your Easybank account
                        will be a one-stop-shop for spending, saving, budgeting,
                        investing and much more.
                    </p>
                    <Button />
                </div>
                <BG />
                <img src='/image-mockups.png' alt='Mockups' />
            </div>
        </div>
    )
}

export default Hero
