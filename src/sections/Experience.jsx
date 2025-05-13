import { motion } from "framer-motion";

export const Experience = () => {
  return (
    <section
      id="pages"
      className="max-w-7xl mx-auto grid grid-cols-1 max-md:px-4 max-md:gap-4 md:grid-cols-2 items-center justify-center py-40 max-sm:py-16 max-lg:px-4">
      <div className="flex flex-col"


      >
        <motion.span 
               initial={{ opacity: 0, y: 20 }}
       whileInView={{ opacity: 1, y: 0 }}
       transition={{ duration: 0.8 }}
        className="text-white">WHY US?</motion.span>
        <motion.span 
               initial={{ opacity: 0, y: 20 }}
       whileInView={{ opacity: 1, y: 0 }}
       transition={{ duration: 0.8 , delay:0.2}}
        className="border-solid border-primary w-20"></motion.span>
        <motion.h2 
               initial={{ opacity: 0, y: 20 }}
       whileInView={{ opacity: 1, y: 0 }}
       transition={{ duration: 0.8, delay:0.4 }}
        className="text-white text-4xl max-sm:text-3xl font-bold mt-4 text-balance">
          25 YEARS OF <span className="text-primary">EXPERIENCE</span> AS A CREATIVE AGENCY
        </motion.h2>
        <motion.a 
               initial={{ opacity: 0, y: 20 }}
       whileInView={{ opacity: 1, y: 0 }}
       transition={{ duration: 0.8, delay:0.6 }}
        className="text-white w-36 text-center mt-4 p-2 border-solid border-primary block" href="#">
          READ MORE
        </motion.a>
      </div>
      <div

       >
        <motion.p 
               initial={{ opacity: 0, y: 20 }}
       whileInView={{ opacity: 1, y: 0 }}
       transition={{ duration: 0.8, }}
        className="text-white">
          Our passion for creativity and innovation drives us to develop unique design solutions that not only impress, but also meet our clients´ strategic objectives. Each project is unique, and we are proud to offer a personalized approach that fits each client´s specific needs.
        </motion.p>
        <ul className="mt-4">
          <motion.li 
                 initial={{ opacity: 0, y: 20 }}
       whileInView={{ opacity: 1, y: 0 }}
       transition={{ duration: 0.8, delay: 0.2 }}
          >
            <i className="ri-check-double-fill text-primary p-2 rounded-full backdrop-blur-md"></i>
            <span className="text-white">Happy Customer</span>
          </motion.li>
          <motion.li 
                 initial={{ opacity: 0, y: 20 }}
       whileInView={{ opacity: 1, y: 0 }}
       transition={{ duration: 0.8, delay: 0.4 }}
          >
            <i className="ri-check-double-fill text-primary p-2 rounded-full backdrop-blur-md"></i>
            <span className="text-white">Experienced Team</span>
          </motion.li>
          <motion.li 
                 initial={{ opacity: 0, y: 20 }}
       whileInView={{ opacity: 1, y: 0 }}
       transition={{ duration: 0.8, delay: 0.6 }}
          >
            <i className="ri-check-double-fill text-primary p-2 rounded-full backdrop-blur-md"></i>
            <span className="text-white">Modern Technology</span>
          </motion.li>
        </ul>
      </div>
    </section>
  );
};
