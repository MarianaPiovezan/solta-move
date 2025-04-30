  import { useEffect, useRef, useState } from "react";

  const frases = [
    "Treinos do iniciante ao avançado.",
    "Para o corpo todo e todos os corpos.",
    "Novos treinos adicionados toda semana.",
    "Calendário baseado no seu objetivo.",
    "Maratonas para enfrentar qualquer desafio e mais.",
    "Tudo para que você tenha uma saúde de ferro para viver seus sonhos mais ousados."
  ];

  export const HighlightEffect = () => {
    const containerRef = useRef(null);
    const [fraseAtiva, setFraseAtiva] = useState(0);

    useEffect(() => {
      const handleScroll = () => {
        if (!containerRef.current) return;

        const { top } = containerRef.current.getBoundingClientRect();
        const altura = containerRef.current.offsetHeight;
        const scroll = Math.abs(top);

        // Calcular qual frase está ativa
        const scaleFactor = 0.8; // quanto menor, mais tempo cada frase fica
        const progress = Math.min(1, scroll / altura);
        const index = frases.length - 1 - Math.floor(progress / scaleFactor);

        setFraseAtiva(index);

        // Mostrar o texto final quando chegar na última frase
     
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
      <div ref={containerRef} className="py-24 bg-brand-gray-100  flex flex-col items-center gap-2">
        <p className="text-2xl md:text-3xl font-semibold text-center gap-2 leading-relaxed flex  justify-center  px-6  flex-wrap">
          {frases.map((frase, index) => (
            <span
              key={index}
              className={`transition-all duration-300 leading-none ${
                fraseAtiva === index
                  ? "text-brand-dark font-bold opacity-100 "
                  : "text-brand-gray-700 font-bold opacity-80 "
              }`}
            >
              {frase}
            </span>
          ))}
        </p>

      
   
      </div>
    );
  };
