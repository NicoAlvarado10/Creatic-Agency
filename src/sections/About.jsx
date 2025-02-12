import { motion } from "framer-motion";
import aboutImg from "../assets/robot.webp";

export const About = () => {
  return (
    <section
      id="about"
      className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 mt-24 px-4 py-4 items-center gap-6"
    >
    
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }} // Se activa cuando el 30% del elemento es visible
      >
        <img src={aboutImg} className="image" alt="about-image" />
      </motion.div>

    
      <motion.div
        className="flex flex-col gap-6"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.span
          className="text-primary font-semibold"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          ABOUT US
        </motion.span>

        <motion.h2
          className="text-white text-5xl max-sm:text-3xl font-bold"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          We Bring <span className="text-primary">Creative</span> Ideas To Life.
        </motion.h2>

        <motion.span
          className="border-solid border-white w-36"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true, amount: 0.3 }}
        ></motion.span>

        <motion.span
          className="text-primary font-semibold"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          We Love Creating
        </motion.span>

        <motion.p
          className="text-white leading-8"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          Our purpose is to create innovative design solutions that help our
          clients stand out and achieve their goals.
        </motion.p>

        <motion.p
          className="text-white leading-8"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          We aspire to be leaders in the field of design, influencing trends and
          establishing new quality standards.
        </motion.p>

        <motion.a
          href="#"
          className="text-white w-36 text-center p-2 border-solid border-primary block"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          whileHover={{ scale: 1.1 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          READ MORE
        </motion.a>
      </motion.div>
    </section>
  );
};
