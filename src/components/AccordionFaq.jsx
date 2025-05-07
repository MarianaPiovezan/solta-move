import { motion, AnimatePresence } from "motion/react";

export const AccordionFaq = ({
  faq = {},
  open = false,
  onClick,
  delay = 0,
  inView,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
      transition={{ duration: 0.6, delay: delay * 0.5 }}
    >
      <button
        type="button"
        onClick={onClick}
        aria-expanded={open}
        aria-controls={`faq-answer-${faq.id}`}
        className="w-full text-brand-dark py-4 md:py-6 rounded-2xl flex justify-between items-center gap-2 text-lg md:text-xl cursor-pointer leading-5"
      >
        <span className="text-left font-extrabold tracking-wider">
          {faq.pergunta}
        </span>
        <span
          className="text-brand-dark duration-300 ease-in-out font-bold text-lg text-center"
          aria-label={open ? "Fechar" : "Abrir"}
        >
          {open ? "-" : "+"}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={`faq-answer-${faq.id}`}
            style={{ overflow: "hidden" }}
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: "auto",
              opacity: 1,
              transition: { type: "tween" },
            }}
            exit={{ height: 0, opacity: 0 }}
          >
            <div className="py-4">
              <p className="text-brand-gray-700 mb-4 md:mb-6 text-lg md:text-xl">
                {faq.resposta}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
