import projectImg from '../assets/project-1.webp'
import projectImg2 from '../assets/project-2.webp'
import projectImg3 from '../assets/project-3.webp'

export const Portfolio = () => {
  return (
    <section id='portfolio' className=" max-w-screen-2xl mx-auto px-4 py-10 ">
        <h2 className="text-white text-center text-4xl max-sm:text-3xl font-bold">ENJOY OUR <span className="text-primary">LATEST</span> <br />PROJECTS</h2>
        <h3 className="font-semibold text-primary text-center mt-6 flex gap-3 justify-center items-center"><span className="border-solid border-white w-20"></span>OUR WORK <span className="border-solid border-white w-20"></span></h3>
         <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2  overflow-hidden  mx-auto justify-center items-center mt-6 gap-10'>
            <img className='overflow-hidden object-cover w-full h-full transition duration-150 hover:scale-x-110 hover:cursor-pointer opacity-80 hover:opacity-100 sm:w-11/12' src={projectImg} alt="project-image" />
            <img className='overflow-hidden object-cover w-full h-full transition duration-150 hover:scale-x-110 hover:cursor-pointer opacity-80 hover:opacity-100 sm:w-11/12' src={projectImg2} alt="project-image" />
            <img className='overflow-hidden w-full object-cover h-full transition duration-150 hover:scale-x-110 hover:cursor-pointer opacity-80 hover:opacity-100 sm:w-11/12' src={projectImg3} alt="project-image" />    
        </div>   
    
    </section>
  )
}
