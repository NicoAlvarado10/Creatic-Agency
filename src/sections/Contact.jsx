
export const Contact = () => {
  return (
    <section className="grid grid-cols-2 max-w-7xl mx-auto items-center py-14">
        <div className="flex flex-col gap-5">
            <h2 className="text-white text-4xl">GET IN <span className="text-primary">TOUCH</span></h2>
            <span className="w-20 border-solid border-white"></span>
            <p className="text-white text-balance">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro atque mollitia voluptates harum quos quam nisi beatae minima blanditiis odit!</p>
            <ul className="text-white flex flex-col gap-4">
                <li className="flex gap-3">
                    <div className="flex items-center gap-3">
                    <span className="text-primary text-2xl">
                        <i className="ri-map-pin-fill"></i>
                    </span>
                    <div>
                        <h3 className="font-semibold">Office Address</h3>
                        <p className="text-primary text-sm">98, Arca St, PR City, 33414, Indonesia</p>
                    </div>

                    </div>
                </li>
                <li className="flex items-center gap-3">
                    <span className="text-primary text-2xl">
                    <i className="ri-phone-fill"></i>
                    </span>
                    <div className="flex flex-col">
                        <h3 className="font-semibold">Call Us</h3>
                        <p className="text-primary text-sm">(+BK) 123 456 7891</p>
                    </div>
                </li>
                <li className="flex items-center  gap-3">
                    <span className="text-primary text-2xl">
                    <i className="ri-mail-line"></i>
                    </span>
                    <div className="flex flex-col">
                        <h3 className="font-semibold">Mail Us</h3>
                        <p className="text-primary text-sm">info@creaticagency.com</p>
                    </div>
                </li>
            </ul>
        </div>
        <div>
            <form action="/" className="text-white flex flex-col gap-8 bg-slate-950 rounded-3xl py-8 w-10/12 mx-auto">
                <label className="text-white flex flex-col mx-auto gap-2 w-10/12 text-sm" htmlFor="YOUR NAME">
                    YOUR NAME
                <input type="text" className="bg-slate-950 border-solid border-white"/>
                </label>
                <label className="text-white flex mx-auto flex-col gap-2 text-sm  w-10/12" htmlFor="YOUR EMAIL">
                YOUR EMAIL
                    <input type="email" className="bg-slate-950 border-solid border-white"/>
                </label>
                <label className="text-white flex mx-auto flex-col gap-2 text-sm  w-10/12" htmlFor="YOUR MESSAGE">
                YOUR MESSAGE
                    <input type="text" className="bg-slate-950 border-solid  border-white"/>
                </label>
                <button  className="text-center bg-primary w-40 mx-auto px-3 py-2 text-black transition duration-150 hover:text-white" type="submit">SEND MESSAGE</button>
            </form>
        </div>
    </section>
  )
}
