import { MetricsCard } from "../components/MetricsCard"
import metricsImg from '../assets/Group.svg'
import metricsImg2 from '../assets/Group-1.svg'
import metricsImg3 from '../assets/Group-2.svg'
import metricsImg4 from '../assets/Group-3.svg'

export const Metrics = () => {
  return (
    <section className="gradient py-16">
        <div className="max-w-7xl mx-auto items-center grid-cols-2 max-md:gap-4  grid md:grid-cols-4 justify-between">
        <MetricsCard
            icon={metricsImg}
            number={'50+'}
            title={'Team Members'}
        />
        <MetricsCard
            icon={metricsImg2}
            number={'200+'}
            title={'Project Done'}
        />
            <MetricsCard
                icon={metricsImg4}
                number={'500+'}
                title={'Happy Customers'}
            />
        <MetricsCard
            icon={metricsImg3}
            number={'75+'}
            title={'Award Winners'}
        />
        </div>
    </section>
  )
}
