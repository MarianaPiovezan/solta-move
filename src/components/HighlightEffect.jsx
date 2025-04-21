import { useEffect, useRef, useState } from "react";

const frases = [
    "Treinos do iniciante ao avançado.",
    "Para o corpo todo e todos os corpos.",
    "Novos treinos adicionados toda semana.",
    "Calendário baseado no seu objetivo.",
    "Maratonas para enfrentar qualquer desafio e mais."
  ];

export const HighlightEffect = () => {

  const containerRef = useRef(null);
  const [fraseAtiva, setFraseAtiva] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.dataset.index);
            setFraseAtiva(index);
          }
        });
      },
      { threshold: 0.6 }
    );

    const sections = containerRef.current.querySelectorAll("section");
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className=" pb-24 snap-y snap-mandatory "
    >
      {frases.map((frase, index) => (
        <section
          key={index}
          data-index={index}
          className={`snap-start  flex items-center justify-center transition-opacity duration-500 ${
            fraseAtiva === index ? "opacity-100" : "opacity-50"
          }`}
        >
          <p className="text-3xl font-bold text-center">{frase}</p>
        </section>
      ))}
    </div>
  );
}
