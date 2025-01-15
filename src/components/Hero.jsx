import heroImg from '../assets/beautiful-woman-with-big-jewel 1.webp';

export const Hero = () => {
  return (
    <section className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 mt-40 max-md:mt-28 px-4 max-md:gap-8">
      {/* Text Content */}
      <div className="flex flex-col gap-6">
        <span className="text-primary font-semibold text-center md:text-left">
          WELCOME TO CREATIC
        </span>
        <h1 className="text-white text-4xl md:text-6xl font-bold leading-tight text-center md:text-left">
          WE ARE <span className="text-primary">CREATIVE</span> DESIGN AGENCY
        </h1>
        <span className="border-solid border-primary w-36 h-[2px] mx-auto md:mx-0"></span>
        <p className="text-white leading-8 text-center md:text-left">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, accusamus! Nostrum quo esse autem error ipsum odio maxime minus est!
        </p>
        <a
          href="#"
          className="text-white w-36 text-center p-2  border-solid border-primary block "
        >
          GET IN TOUCH
        </a>
      </div>

      {/* Hero Image */}
      <div className="flex items-center justify-center image">
        <img
          src={heroImg}
          alt="A beautiful woman wearing a big jewel"
          className="max-w-full h-auto object-cover gradient"
        />
      </div>
    </section>
  );
};
