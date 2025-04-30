import { advantages } from "../../data/advantages";
import image from "/assets/images/e-sobre-o-que-sente.webp";
import { motion } from "framer-motion";

export const Advantages = () => {
  return (
    <section
      id="advantages"
      className=" py-12 md:py-16"
      aria-label="Sugestões de aulas para você experimentar"
    >
      <div className="pb-12 md:pb-16">
        <div className="flex flex-col gap-6 md:gap-8 pb-6 md:pb-8 container-margin px-6 xl:px-0">
          <motion.h2
            className="text-3xl md:text-5xl lg:max-w-[740px] font-extrabold mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Treinar não é sobre o que você vê, é sobre o que você sente.
          </motion.h2>
        </div>
       

        <div className="relative h-[1100px] md:h-[1000px] lg:h-[900px]  ">
          {/* Imagem fixa dentro da seção */}
          <div className="sticky top-60 z-0 flex justify-center  h-[500px]  ">
            <img
              className="w-[90%] md:w-[60%] object-contain"
              src={image}
              alt="Mulher praticando exercícios"
              loading="lazy"
            />
          </div>

          {/* Cards que rolam sobre a imagem */}
          <motion.div
            className="absolute top-0 z-10 w-full container-margin grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 px-6 xl:px-0 gap-6 !max-w-[1038px] mx-auto items-stretch pt-56 left-[50%] -translate-x-[50%]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
          >
            {advantages.map((item, index) => (
              <div
                key={index}
                className="rounded-2xl md:rounded-3xl overflow-hidden border border-brand-gray-100 bg-brand-gray-100 shadow-lg p-4 md:p-6 flex flex-col gap-2 hover:brightness-105 duration-300 ease-in-out"
              >
                <h3 className="font-extrabold flex items-center border-b-2 border-brand-blue-light pb-1">
                  + {item.title}
                </h3>
                <p className="text-brand-gray-800 text-sm md:text-base font-normal leading-4 md:leading-5">
                  {item.content}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <motion.blockquote
        className="max-w-[650px] text-center mx-auto text-lg md:text-xl text-brand-gray-700 px-6 md:px-0 pt-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        Não importa se seu objetivo é ter mais saúde para fazer as tarefas do
        dia a dia sem sofrimento, para se tornar uma velhinha independente ou se
        é para fazer coisas que parecem impossíveis,{" "}
        <strong className="text-brand-dark">
          a Solta Move será sua aliada durante toda a jornada.
        </strong>
      </motion.blockquote>
    </section>
  );
};
