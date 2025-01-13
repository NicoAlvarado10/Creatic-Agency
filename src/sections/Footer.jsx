
export const Footer = () => {
  return (
    <footer className="max-w-7xl mx-auto py-10 flex flex-col gap-4">
         <a className="flex flex-col text-center" href="#">
        <span className="text-primary font-semibold text-4xl">CREATIC</span>
        <span className="text-white text-normal">CREATIVE AGENCY</span>
      </a>
      <nav>
        <ul className="flex justify-center items-center gap-4">
            <li><a className="text-primary font-semibold" href="#">Categories</a></li>
            <li><a className="text-primary font-semibold" href="#">About</a></li>
            <li><a className="text-primary font-semibold" href="#">Services</a></li>
            <li><a className="text-primary font-semibold" href="#">Portfolio</a></li>
            <li><a className="text-primary font-semibold" href="#">Pages</a></li>
            <li><a className="text-primary font-semibold" href="#">Support</a></li>
        </ul>
      </nav>
      <p className="text-white flex items-center justify-center ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, quae!</p>
      <div className="flex justify-center items-center gap-4 text-primary text-2xl">
        <span><i className="ri-facebook-circle-fill"></i></span>
        <span><i className="ri-instagram-line"></i></span>
        <span><i className="ri-whatsapp-line"></i></span>
        <span><i className="ri-linkedin-box-fill"></i></span>
        <span><i className="ri-pinterest-fill"></i></span>
        <span><i className="ri-twitter-fill"></i></span>
      </div>
    </footer>
  )
}