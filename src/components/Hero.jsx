import heroImg from '../assets/beautiful-woman-with-big-jewel 1.webp';
export const Hero = () => {
  return (
    <section className=" max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 max-sm:mt-10 mt-24 px-4 max-md:gap-4">
        <div className="flex flex-col gap-6">
            <span className="text-primary font-semibold max-sm:text-center">WELCOME TO CREATIC</span>
            <h1 className="text-white text-6xl max-sm:text-4xl max-sm:text-center  font-bold">WE ARE <span className="text-primary">CREATIVE</span> DESING AGENCY</h1>
            <span className='border-solid border-primary w-36 max-sm:mx-auto
            '></span>
            <p className="text-white leading-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, accusamus! Nostrum quo esse autem error ipsum odio maxime minus est!</p>
            <a href="#" className="text-white w-36 text-center p-2 border-solid border-primary block ">GET IN TOUCH</a>
        </div>
        <div><img src={heroImg} className='image'  alt="hero-image" /></div>
    </section>
  )
}
