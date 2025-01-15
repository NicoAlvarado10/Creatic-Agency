import clientImg from '../assets/Ellipse-1.webp';
import women1Img from '../assets/Image.webp'
import women2Img from '../assets/Image-2.webp'

export const Testimonials = () => {
  return (
    <section className='grid grid-cols-1 md:grid-cols-3   max-w-screen-2xl mx-auto'>
        <div className='max-md:hidden'>
            <img src={women1Img} className='h-5/6 w-full object-cover' alt="women-image" />
        </div>
        <div className='flex flex-col   gap-4 mt-12'>
            <h2 className='text-6xl max-sm:text-3xl  text-white text-center font-bold'>WHAT <span className='text-primary text-balance'>OUR</span> CLIENTS SAY?</h2>
            <span className='border-solid border-primary w-40 mx-auto'></span>
            <span className='text-white text-center '>TESTIMONIALS</span>
            <article className='flex flex-col mt-7  bg-slate-900 p-8 rounded-3xl m-4'>
                <p className='text-white px-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto harum impedit modi veritatis</p>
                <div className='flex px-6 items-center pt-4 flex-wrap'>
                    <img className='w-16' src={clientImg} alt="client-image" />
                    <div className='flex flex-col flex-1 px-3'>
                        <span className='text-white'>Carol Chaves</span>
                        <span className='text-primary'>@carolesgmail.com</span>
                    </div>
                    <span className=''>
                    <i className="ri-double-quotes-r text-4xl text-primary"></i>
                    </span>
                </div>
                <a className='text-white w-10/12 mx-auto mt-10 text-center p-2 border-solid border-primary block' href="#">VIEW ALL TESTIMONIALS</a>
            </article>
        </div>
        <div className='max-md:hidden'>
        <img src={women2Img} className='h-5/6 w-full object-cover' alt="women-image" />
        </div>
    </section>
  )
}
