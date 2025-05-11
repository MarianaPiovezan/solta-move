import { motion } from "motion/react";
import { HighlightEffect } from "../HighlightEffect";

export const Welcome = () => {
  
  return (
    <section
      aria-label="Mensagem de boas-vindas"
      className="flex flex-col h-auto items-center pt-14 md:pt-24 bg-brand-gray-100 overflow-hidden justify-center relative"
    >
      <HighlightEffect />
      <div className="bg-brand-yellow py-16 w-full flex flex-col items-center gap-6 md:gap-8 text-center px-6 ">
        <motion.h2
          className="text-3xl font-extrabold "
          // initial={{ opacity: 0, y: 20 }}
          // whileInView={{ opacity: 1, y: 0 }}
          // transition={{ duration: 1 }}
          // viewport={{ once: true }}
        >
          Bem-vinda ao fitness fora do padrão
        </motion.h2>

        <motion.p
          className="text-lg md:text-xl container-margin"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          viewport={{ once: true }}
        >
          Nós acreditamos que o verdadeiro poder dos exercícios está além do
          espelho. Por isso, estamos revolucionando o fitness. Não estamos aqui
          pelo “Corpo Perfeito”.
          <strong> Estamos aqui para te mover para você mover o mundo.</strong>
        </motion.p>
      </div>
    </section>
  );
};
