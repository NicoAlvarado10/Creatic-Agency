import {ServicesCard} from '../components/ServicesCard'
import servicesImg1 from '../assets/Video-Icon.svg'
import servicesImg2 from '../assets/graphic-icon.svg'
import servicesImg3 from '../assets/ux.svg'
import servicesImg4 from '../assets/Web-icon.svg'


export const Services = () => {
  return (
    <section id='services' className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 mt-24 px-4 py-16 items-center gap-6">
    
    <div className="flex flex-col gap-6">
        <span className="text-primary font-semibold">OUR SERVICES</span>
        <h2 className="text-white text-5xl max-sm:text-3xl font-bold ">Experience The Power Of <span className="text-primary">Innovation</span>.</h2>
        <span className='border-solid border-white w-36
        '></span>
        <p className="text-white leading-8">At Creatic Agency, we offer a wide range of design services to meet all your creative and business needs.</p>
        <a href="#" className="text-white w-36 text-center p-2 border-solid border-primary block">VIEW ALL</a>
    </div>
    <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
        <ServicesCard
            src={servicesImg1}
            title={'VIDEO MARKETING'}
            descp={'We design videos that increase sales'}
        />
         <ServicesCard
            src={servicesImg2}
            title={'GRAPHIC DESING'}
            descp={'Strategy and brand design'}
        />
         <ServicesCard
            src={servicesImg3}
            title={'MARKET ANALYSIS'}
            descp={'We analyze the market and the competition'}
        />
         <ServicesCard
            src={servicesImg4}
            title={'WEBSITE DESING '}
            descp={'We design custom sites'}
        />
    </div>
</section>
  )
}
