import Hero from "../Components/Hero.jsx"
import NavHeader from "../Components/NavHeader.jsx"

function MainView() {
    return (
        <>
            <header className="w-full h-screen bg-zinc-100 relative overflow-x-hidden">
                <NavHeader />
                <Hero />
                {/* <img src="/image-mockups.png" alt="Mockups" className="absolute right-0 top-0 z-20 -mr-28 -mt-10 w-1/2" /> */}
            </header>
            <main className="w-full h-screen border border-black">

            </main>
        </>
    )
}

export default MainView