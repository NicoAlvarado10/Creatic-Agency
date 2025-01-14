import {ServicesCard} from '../components/ServicesCard'
import servicesImg1 from '../assets/Video icon.svg'
import servicesImg2 from '../assets/graphic icon.svg'
import servicesImg3 from '../assets/ux.svg'
import servicesImg4 from '../assets/Web icon.svg'


export const Services = () => {
  return (
    <section className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 mt-24 px-4 py-16 items-center gap-6">
    
    <div className="flex flex-col gap-6">
        <span className="text-primary font-semibold">OUR SERVICES</span>
        <h2 className="text-white text-5xl max-sm:text-3xl font-bold ">Experience The Power Of <span className="text-primary">Innovation</span>.</h2>
        <span className='border-solid border-white w-36
        '></span>
        <p className="text-white leading-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, accusamus! Nostrum quo esse autem error ipsum odio maxime minus est!. Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis doloremque voluptate aut quis id natus nihil a, eveniet officiis dicta!</p>
        <a href="#" className="text-white w-36 text-center p-2 border-solid border-primary block">VIEW ALL</a>
    </div>
    <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
        <ServicesCard
            src={servicesImg1}
            title={'VIDEO MARKETING'}
            descp={'Lorem ipsum dolor sit amet consectetur adipisicing elit.'}
        />
         <ServicesCard
            src={servicesImg2}
            title={'GRAPHIC DESING'}
            descp={'Lorem ipsum dolor sit amet consectetur adipisicing elit.'}
        />
         <ServicesCard
            src={servicesImg3}
            title={'VIDEO MARKETING'}
            descp={'Lorem ipsum dolor sit amet consectetur adipisicing elit.'}
        />
         <ServicesCard
            src={servicesImg4}
            title={'WEBSITE DESING '}
            descp={'Lorem ipsum dolor sit amet consectetur adipisicing elit.'}
        />
    </div>
</section>
  )
}
