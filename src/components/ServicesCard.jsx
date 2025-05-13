import { motion } from "framer-motion";
export const ServicesCard = ({src, title, descp}) => {
  return (
    <motion.article 
    className="flex flex-col gap-2 backdrop-blur-lg p-4 bg-gray-950 rounded-lg max-md:w-11/12 max-md:mx-auto max-md:gap-4"
   
    >
        <motion.img 
         initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, }}
        src={src} alt="services-image" />
        <motion.h3 
         initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.2 }}
        className="text-primary text-center font-semibold ">{title}</motion.h3>
        <motion.p 
         initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.4 }}
        className="text-white text-center text-sm">{descp}</motion.p>
    </motion.article>
  )
}
