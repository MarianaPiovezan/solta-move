import { useState } from "react";
import { faq } from "../../data/faq";
import { AccordionFaq } from "../AccordionFaq";
import { Button } from "../Button";
import { motion } from "motion/react";
import { useInView } from "react-intersection-observer";

export const Faq = () => {
  const [openAccordion, setOpenAccordion] = useState(null);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const handleAccordionClick = (index) => {
    setOpenAccordion((prevOpenAccordion) =>
      prevOpenAccordion === index ? null : index
    );
  };

  return (
    <section
      id="faq"
      aria-label="Fique por dentro da plataforma"
      className="overflow-hidden py-12 md:py-16"
    >
      <div className="container-margin flex px-6 flex-col gap-8 justify-center">
        <motion.h2
          className="text-3xl md:text-5xl font-extrabold"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Ainda com dúvida? <br />A resposta pode estar aqui.
        </motion.h2>

        <div
          ref={ref}
          className="divide-y-2 divide-gray-300 border-y-2 border-gray-300"
        >
          {faq.map((question, index) => (
            <AccordionFaq
              key={index}
              faq={question}
              onClick={() => handleAccordionClick(index)}
              open={index === openAccordion}
              inView={inView}
              delay={index * 0.15}
            />
          ))}
        </div>

        <motion.div className="flex flex-col md:flex-row md:gap-8 gap-6" initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}>
          <Button className="w-full" title={"Escolher plano"} scrollId={"Anual"} offset={300} />
          <Button
            className="w-full !bg-whatsapp"
            title={"Tirar dúvida no Whatsapp"}
            icon={true}
            link="https://wa.me/5527999055514?text=Ol%C3%A1%20gostaria%20de%20saber%20informa%C3%A7%C3%B5es%20sobre%20a%20Solta%20Move."
            target={"_blank"}
          />
        </motion.div>
      </div>
    </section>
  );
};
