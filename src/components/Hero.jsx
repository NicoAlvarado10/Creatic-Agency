import heroImg from '../assets/beautiful-woman-with-big-jewel 1.webp';
export const Hero = () => {
  return (
    <section className=" max-w-7xl mx-auto grid grid-cols-2 mt-24 px-4 back">
        <div className="flex flex-col gap-6">
            <span className="text-primary font-semibold">WELCOME TO CREATIC</span>
            <h1 className="text-white text-6xl font-bold">WE ARE <span className="text-primary">CREATIVE</span> DESING AGENCY</h1>
            <span className='border-solid border-primary w-36
            '></span>
            <p className="text-white leading-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, accusamus! Nostrum quo esse autem error ipsum odio maxime minus est!</p>
            <a href="#" className="text-white w-36 text-center p-2 border-solid border-primary block">GET IN TOUCH</a>
        </div>
        <div><img src={heroImg} className='image'  alt="hero-image" /></div>
    </section>
  )
}
