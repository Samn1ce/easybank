import Hero from "../Components/Hero.jsx"
import NavHeader from "../Components/NavHeader.jsx"

function MainView() {
    return (
        <div className="relative overflow-x-hidden">
            <img src="/image-mockups.png" className="absolute right-0 top-[0%] z-20 -mt-12 -mr-28 w-3/6" />
            <header className="w-full h-screen bg-zinc-100 relative overflow-x-hidden">
                <NavHeader />
                <Hero />

            </header>
            <main className="w-full h-screen border border-black">

            </main>
        </div>
    )
}

export default MainView