import aboutImg from '../assets/robot.webp'

export const About = () => {
  return (
     <section id='about' className="max-w-7xl mx-auto grid grid-cols-1   md:grid-cols-2 mt-24 px-4 py-4 items-center gap-6">
            <div><img src={aboutImg} className='image'  alt="about-image" /></div>
            <div className="flex flex-col gap-6">
                <span className="text-primary font-semibold ">ABOUT US</span>
                <h2 className="text-white text-5xl max-sm:text-3xl font-bold">We Bring <span className="text-primary">Creative</span> Ideas To Life.</h2>
                <span className='border-solid border-white w-36
                '></span>
                <span className='text-primary font-semibold'>We Love Creating</span>
                <p className="text-white leading-8">Our purpose is to create innovative design solutions that help our clients stand out and achieve their goals.</p>
                <p className="text-white leading-8">We aspire to be leaders in the field of design, influencing trends and establishing new quality standards.</p>
                <a href="#" className="text-white w-36 text-center p-2 border-solid border-primary block">READ MORE</a>
            </div>
        </section>
  )
}
