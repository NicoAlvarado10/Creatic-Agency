
export const Experience = () => {
  return (
    <section className="max-w-7xl mx-auto grid grid-cols-1 max-md:px-4 max-md:gap-4 md:grid-cols-2 items-center justify-center py-40 max-sm:py-16 max-lg:px-4">
        <div className="flex flex-col">
            <span className="text-white">WHY US?</span>
            <span className='border-solid border-primary w-20
                '></span>
            <h2 className="text-white text-4xl max-sm:text-3xl font-bold mt-4 text-balance">25 YEARS OF <span className="text-primary">EXPERIENCE</span> AS A CREATIVE AGENCY</h2>
            <a className="text-white w-36 text-center mt-4 p-2 border-solid border-primary block" href="#">READ MORE</a>    
        </div>
        <div >
            <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis rem maiores veniam nisi quo asperiores totam eveniet dolorem? Beatae, dolores! Reiciendis rem maiores veniam nisi quo asperiores totam eveniet dolorem? Beatae, dolores!</p>
            <ul className="mt-4">
                <li>
                    <i className="ri-check-double-fill text-primary p-2 rounded-full backdrop-blur-md"></i><span className="text-white">Happy Customer</span>
                </li>
                <li>
                    <i className="ri-check-double-fill text-primary p-2 rounded-full backdrop-blur-md"></i><span className="text-white">Experienced Team</span>
                </li>
                <li>
                    <i className="ri-check-double-fill text-primary p-2 rounded-full backdrop-blur-md"></i><span className="text-white">Modern Technology</span>
                </li>
            </ul>
        </div>
    </section>
  )
}
