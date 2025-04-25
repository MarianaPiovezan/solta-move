import { useState } from "react";
import { faq } from "../../data/faq";
import { Accordion } from "../accordion";
import { Button } from "../Button";

export const Faq = () => {
  const [openAccordion, setOpenAccordion] = useState(null);

  const handleAccordionClick = (index) => {
    setOpenAccordion((prevOpenAccordion) =>
      prevOpenAccordion === index ? null : index
    );
  };

  return (
    <section
      id="faq"
      aria-label="Fique por dentro da plataforma"
      className="overflow-hidden py-12 md:py-16  "
    >
      <div className=" container-margin flex px-6 flex-col gap-8 justify-center">
        <h2 className="text-3xl md:text-5xl font-extrabold ">
          Ainda com dúvida? <br />A resposta pode estar aqui.
        </h2>
      

      <div className="divide-y-2 divide-gray-300 border-y-2 border-gray-300">
        {faq.map((question, index) => {
          return (
            <Accordion
              key={index}
              titleButton={`${question.pergunta}`}
              onClick={() => handleAccordionClick(index)}
              open={index === openAccordion}
              textColor="duvidas-text"
              className="relative z-20  "
            >
              <p className="  text-brand-gray-700   mb-4 md:mb-6 text-lg md:text-xl ">
                {question.resposta}
              </p>
            </Accordion>
          );
        })}
      </div>
      <div className="flex flex-col md:flex-row md:gap-8 gap-6">
        <Button className="w-full" title={"Escolher plano"} link="#sale" />
        <Button className="w-full !bg-whatsapp" title={"Tirar dúvida no Whatsapp"} icon={true} />
      </div>
      </div>
    </section>
  );
};
