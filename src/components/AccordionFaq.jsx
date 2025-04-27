import {
  motion,
  LazyMotion,
  domAnimation,
  AnimatePresence,
} from "motion/react";

export const AccordionFaq = ({ faq = {}, open = false, onClick }) => {
  const animate = {
    height: open ? "auto" : 0,
    opacity: open ? 1 : 0.5,
    transition: { type: "tween" },
  };

  return (
    <div>
      <button
        className={` w-full text-brand-dark  py-4 md:py-6 rounded-2xl flex justify-between items-center gap-2 text-lg md:text-xl cursor-pointer leading-5`}
        type="button"
        onClick={onClick}
        aria-expanded={open}
      >
        <span className="text-left font-extrabold tracking-wider">
          {faq.pergunta}
        </span>
        <span
          className={`text-brand-dark duration-300 ease-in-out font-bold text-lg text-center`}
          aria-label={open ? "Fechar" : "Abrir"}
        >
          {open ? "-" : "+"}
        </span>
      </button>

      <LazyMotion features={domAnimation} strict>
        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              style={{ overflow: "hidden" }}
              initial={{ height: 0, opacity: 0 }}
              animate={animate}
              exit={{ height: 0, opacity: 0 }}
            >
              <div className="py-4">
                <p className="  text-brand-gray-700   mb-4 md:mb-6 text-lg md:text-xl ">
                  {faq.resposta}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </LazyMotion>
    </div>
  );
};
