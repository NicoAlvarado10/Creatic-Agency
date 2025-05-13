import { motion } from "framer-motion";
import heroImg from "../assets/women-hero.webp";

export const Hero = () => {
  return (
    <section
      id="hero"
      className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 mt-40 max-md:mt-28 px-4 max-md:gap-8"
    >
      
      <div
        className="flex flex-col gap-6"

      >
        <motion.span
          className="text-primary font-semibold text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8,  }}
        >
          WELCOME TO CREATIC
        </motion.span>
        <motion.h1
          className="text-white text-4xl md:text-6xl font-bold leading-tight text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          WE ARE <span className="text-primary">CREATIVE</span> DESIGN AGENCY
        </motion.h1>
        <motion.span
          className="border-solid border-primary w-36 h-[2px] mx-auto md:mx-0"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        ></motion.span>
        <motion.p
          className="text-white leading-8 text-center md:text-left"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          We believe in the power of design to communicate and transform. We
          offer graphic, web, and branding design services, adapted to your
          needs.
        </motion.p>
        <motion.a
          href="#"
          className="text-white w-36 text-center p-2 border-solid border-primary block"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          whileHover={{ scale: 1.1 }}
        >
          GET IN TOUCH
        </motion.a>
      </div>

  
      <motion.div
        className="flex items-center justify-center image"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <img
          src={heroImg}
          alt="A beautiful woman wearing a big jewel"
          className="max-w-full h-auto object-cover gradient"
        />
      </motion.div>
    </section>
  );
};
