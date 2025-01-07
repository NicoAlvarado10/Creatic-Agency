

export const MetricsCard = ({icon, number, title}) => {
  return (
    <article className="flex flex-col gap-3 items-center text-center">
        <img className="w-20" src={icon} alt="metric-image" />
        <span className="text-white text-5xl font-bold ">{number}</span>
        <h3 className="font-semibold text-primary" >{title}</h3>
    </article>
  )
}
