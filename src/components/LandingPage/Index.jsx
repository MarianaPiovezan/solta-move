import { Button } from "../Button";
import { motion } from "motion/react"


export const Hero = () => {
  return (
    <section
      id="hero"
      className="flex min-h-screen h-auto items-center pt-24 bg-brand-gray-100 overflow-hidden"
      aria-labelledby="hero-title"
    >
      <div className="justify-between container-margin flex flex-col lg:flex-row items-center gap-4 lg:gap-8 px-6 xl:px-0">
        
        <div className="text-center lg:text-left gap-4 lg:gap-8 flex flex-col items-center lg:items-start lg:max-w-[605px]">
          
          <motion.h1
            id="hero-title"
            className="text-3xl md:text-5xl font-extrabold text-brand-dark"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Fitness que te move,
            <br />
            para você mover o mundo.
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-shadow-brand-dark font-medium"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Ganhe mais força, energia e confiança. Fique pronta para viver
            momentos mais incríveis, intensos e desafiadores da sua vida.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <Button title={"Experimente por 15 dias"} link="#sale" />
          </motion.div>

        </div>

        {/* Imagem do lado direito */}
        <motion.div
          className="w-full flex justify-center"
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          <img
            src="/assets/images/principal.webp"
            alt="Mulher sorrindo praticando exercício"
            className="w-md md:w-lg lg:max-w-lg -lg-12 lg:-mb-16"
          />
        </motion.div>

      </div>
    </section>
  );
};
