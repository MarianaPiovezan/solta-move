import iconSelo from "/assets/images/icons/selo-garantia.svg";
import iconCartao from "/assets/images/icons/cartao-credito.svg";
import iconRenovacao from "/assets/images/icons/renovacao-automatica.svg";
import { Button } from "./Button";
import {
  motion,
  
} from "motion/react";
export const CardSale = ({ cards = {}, delay, inView }) => {
  return (
    <>
      {/* Fita "Mais Escolhido" */}
      <motion.div id={`${cards.category}`} className="flex flex-col items-center justify-center hover:scale-105 w-full  duration-300 ease-in-out overflow-visible "  initial={{ opacity: 0, x: -30 }}
    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
    transition={{ duration: 0.6, delay: delay * 0.5 }}>
        <div
          className={` bg-brand-pink text-sm font-semibold   text-center py-1   rounded-t-xl shadow-md max-w-[236px]  w-[85%] md:w-[80%] md:max-w-[310px] ${
            cards.category === "Anual"
              ? "block  md:visible"
              : "hidden md:invisible md:block"
          }`}
        >
          Mais Escolhido
        </div>
        <div className="p-4 bg-brand-blue-light rounded-3xl shadow-lg hover:shadow-2xl duration-300 ease-in-out md:w-full">
        <div  className="relative text-brand-dark max-w-xs mx-auto rounded-2xl  bg-brand-blue-light border border-brand-dark pt-2 w-[250px] md:w-full gap-6 md:gap-8 flex flex-col z-10  ">
          {/* Título */}
          <div>
            <h2 className="text-center md:text-2xl font-black uppercase mb-2 ">
              {cards.category}
            </h2>
            <div className="h-px bg-black mb-4" />
          </div>

          {/* Selo */}
          <div className="bg-[#DBE1FF] w-fit text-sm px-3 py-1 rounded-full text-center font-semibold  mx-auto ">
            {cards.highlight}
          </div>

          {/* Preço */}
          <div className="">
            <div className="text-center  flex items-end justify-center">
              <span className="text-4xl md:text-5xl font-black">
                R${cards.price}
              </span>
              <span className="text-base md:text-lg font-black ">
                /mês*
              </span>
            </div>
            <p className="text-center text-sm font-sm">{cards.subtitlePrice}</p>
          </div>

          <div className="flex flex-col gap-4 md:gap-6 px-3 md:px-6 pb-6">
            <Button
              title={cards.titleButton}
              link={cards.linkButton}
              className="!w-full "
              target={"_blank"}
            />
            <div className="flex justify-between text-xs leading-3.5 ">
              <figure className="flex flex-col gap-2 items-center text-center">
                <img className="w-6" src={iconSelo} alt="Selo de Garantia" loading="lazy" />
                <figcaption>
                  15 dias
                  <br />
                  de garantia
                </figcaption>
              </figure>
              <figure className="flex flex-col gap-2 items-center text-center">
                <img className="w-6" src={iconCartao} loading="lazy" alt="Cartão de Crédito" />
                <figcaption>
                  Cobrado o valor
                  <br />
                  total no cartão*
                </figcaption>
              </figure>
              <figure className="flex flex-col gap-2 items-center text-center">
                <img
                  className="w-6"
                  src={iconRenovacao}
                  alt="Renovação Automática"
                  loading="lazy"
                />
                <figcaption>
                  Renovação
                  <br />
                  automática
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
        </div>
      </motion.div>
    </>
  );
};
