import { motion } from "framer-motion";
import { ServicesCard } from "../components/ServicesCard";
import servicesImg1 from "../assets/Video-Icon.svg";
import servicesImg2 from "../assets/graphic-icon.svg";
import servicesImg3 from "../assets/ux.svg";
import servicesImg4 from "../assets/Web-icon.svg";

export const Services = () => {
  return (
    <section
      id="services"
      className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 mt-24 px-4 py-16 items-center gap-6"
    >
      <div
        className="flex flex-col gap-6"
       
      >
        <motion.span
          className="text-primary font-semibold"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8  }}
         
        >
          OUR SERVICES
        </motion.span>

        <motion.h2
          className="text-white text-5xl max-sm:text-3xl font-bold"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
       
        >
          Experience The Power Of <span className="text-primary">Innovation</span>.
        </motion.h2>

        <motion.span
          className="border-solid border-white w-36"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        
        ></motion.span>

        <motion.p
          className="text-white leading-8"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
     
        >
          At Creatic Agency, we offer a wide range of design services to meet all your creative and business needs.
        </motion.p>

        <motion.a
          href="#"
          className="text-white w-36 text-center p-2 border-solid border-primary block"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          whileHover={{ scale: 1.1 }}
        >
          VIEW ALL
        </motion.a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
         
          <ServicesCard src={servicesImg1} title={"VIDEO MARKETING"} descp={"We design videos that increase sales"} />
      
          <ServicesCard src={servicesImg2} title={"GRAPHIC DESIGN"} descp={"Strategy and brand design"} />
      
          <ServicesCard src={servicesImg3} title={"MARKET ANALYSIS"} descp={"We analyze the market and the competition"} />
           
          <ServicesCard src={servicesImg4} title={"WEBSITE DESIGN"} descp={"We design custom sites"} />
      
      </div>
    </section>
  );
};
