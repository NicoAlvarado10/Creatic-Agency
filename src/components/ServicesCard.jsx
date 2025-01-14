
export const ServicesCard = ({src, title, descp}) => {
  return (
    <article className="flex flex-col gap-2 backdrop-blur-lg p-4 bg-gray-950 rounded-lg max-md:w-11/12 max-md:mx-auto max-md:gap-4">
        <img src={src} alt="services-image" />
        <h3 className="text-primary text-center font-semibold ">{title}</h3>
        <p className="text-white text-center text-sm">{descp}</p>
    </article>
  )
}
