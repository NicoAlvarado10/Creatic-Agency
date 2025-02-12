import { motion } from "framer-motion";
import { MetricsCard } from "../components/MetricsCard";
import metricsImg from "../assets/Group.svg";
import metricsImg2 from "../assets/Group-1.svg";
import metricsImg3 from "../assets/Group-2.svg";
import metricsImg4 from "../assets/Group-3.svg";

export const Metrics = () => {
  return (
    <section className="gradient py-16">
      <motion.div
        className="max-w-7xl mx-auto items-center grid-cols-2 max-md:gap-4 grid md:grid-cols-4 justify-between"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{
          visible: {
            transition: { staggerChildren: 0.3 }, // Retraso progresivo
          },
        }}
      >
        {[metricsImg, metricsImg2, metricsImg3, metricsImg4].map((icon, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
            }}
          >
            <MetricsCard
              icon={icon}
              number={["50+", "200+", "75+", "500+"][index]}
              title={["Team Members", "Project Done", "Award Winners", "Happy Customers"][index]}
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};
