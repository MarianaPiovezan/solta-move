import { Button } from "../Button";
import principal from "../../assets/images/principal.webp"

export const Hero = () => {
  return (
    <section
      id="hero"
      className="flex min-h-screen h-auto items-center     pt-24 bg-brand-gray-100 overflow-hidden"
      aria-labelledby="hero-title"
    >
      <div className="justify-between container-margin  flex flex-col lg:flex-row items-center gap-4 lg:gap-8 px-6 xl:px-0 ">
        <div className="text-center lg:text-left gap-4 lg:gap-8 flex flex-col items-center lg:items-start lg:max-w-[605px]">
          <h1
            id="hero-title"
            className="text-3xl md:text-5xl font-extrabold  text-brand-dark"
          >
            Fitness que te move,
            <br />
            para você mover o mundo.
          </h1>

          <p className="text-base md:text-lg  text-gray-700 font-medium">
            Ganhe mais força, energia e confiança. Fique pronta para viver
            momentos mais incríveis, intensos e desafiadores da sua vida.
          </p>

          <Button title={"Experimente por 15 dias"} link="" />
        </div>

        {/* Imagem do lado direito */}
        <div className="w-full  flex justify-center">
          <img
            src={principal}
            alt="Mulher sorrindo praticando exercício"
            className="w-full max-w-sm lg:max-w-lg -lg-12 lg:-mb-16"
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
};
