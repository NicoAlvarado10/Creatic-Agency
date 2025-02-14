import { motion } from "framer-motion";
export const ServicesCard = ({src, title, descp}) => {
  return (
    <motion.article 
    className="flex flex-col gap-2 backdrop-blur-lg p-4 bg-gray-950 rounded-lg max-md:w-11/12 max-md:mx-auto max-md:gap-4"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.3 }}
    viewport={{ once: true, amount: 0.3 }}
    >
        <img src={src} alt="services-image" />
        <h3 className="text-primary text-center font-semibold ">{title}</h3>
        <p className="text-white text-center text-sm">{descp}</p>
    </motion.article>
  )
}
