import aboutImg from '../assets/robot.webp'

export const About = () => {
  return (
     <section className="max-w-7xl mx-auto grid grid-cols-2 mt-24 px-4 py-4 items-center gap-6">
            <div><img src={aboutImg}  alt="about-image" /></div>
            <div className="flex flex-col gap-6">
                <span className="text-primary font-semibold">ABOUT US</span>
                <h2 className="text-white text-5xl font-bold">We Bring <span className="text-primary">Creative</span> Ideas To Life.</h2>
                <span className='border-solid border-white w-36
                '></span>
                <span className='text-primary font-semibold'>We Love Creating</span>
                <p className="text-white leading-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, accusamus! Nostrum quo esse autem error ipsum odio maxime minus est!</p>
                <p className="text-white leading-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure, voluptatibus.</p>
                <a href="#" className="text-white w-36 text-center p-2 border-solid border-primary block">READ MORE</a>
            </div>
        </section>
  )
}
