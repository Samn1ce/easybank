function Articles() {
    return (
        <section className='w-full h-[90vh] bg-zinc-100 flex items-center justify-center font-public'>
            <div className='w-5/6 h-full border border-black'>
                <h2>Latest Articles</h2>
                <div className="">
                    <div className="w-1/4 text-zinc-400 bg-white rounded-lg overflow-hidden">
                        <img src="/image-currency.jpg" />
                        <div className="w-4/5 mx-auto py-5 flex flex-col gap-2">
                            <p className="text-xs">By Claire Robinson</p>
                            <p className="text-zinc-700 font-semibold leading-5 font-public">Receive money in any currency with no fees</p>
                            <p className="text-sm">The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Articles