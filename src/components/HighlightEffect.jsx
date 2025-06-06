import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const frases = [
  "Treinos do iniciante ao avançado.",
  "Para o corpo todo e todos os corpos.",
  "Novos treinos adicionados toda semana.",
  "Calendário baseado no seu objetivo.",
  "Maratonas para enfrentar qualquer desafio e mais.",
  "Tudo para que você tenha uma saúde de ferro para viver seus sonhos mais ousados."
];

function useFraseOpacities(scrollYProgress) {
  return [
    useTransform(scrollYProgress, [0, 0.16], [0.5, 1]),
    useTransform(scrollYProgress, [0.16, 0.30], [0.5, 1]),
    useTransform(scrollYProgress, [0.30, 0.40], [0.5, 1]),
    useTransform(scrollYProgress, [0.40, 0.45], [0.5, 1]),
    useTransform(scrollYProgress, [0.45, 0.50], [0.5, 1]),
    useTransform(scrollYProgress, [0.50, 0.60], [0.5, 1])
  ];
}

export const HighlightEffect = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const opacities = useFraseOpacities(scrollYProgress);

  return (
    <motion.div
      ref={containerRef}
      className="pb-20 md:pb-24 bg-brand-gray-100 flex flex-col items-center gap-2 max-w-[1200px] px-6 relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <p className="text-2xl md:text-3xl text-center leading-snug">
        {frases.map((frase, index) => (
          <motion.span
            key={index}
            style={{ opacity: opacities[index] }}
            className={`font-bold text-brand-dark ${
              index === frases.length - 1 ? "w-full text-center block" : "mr-2"
            }`}
          >
            {frase}
          </motion.span>
        ))}
      </p>
    </motion.div>
  );
};