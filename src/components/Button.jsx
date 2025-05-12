import iconWhatsapp from "/assets/images/icons/whatsapp.svg";

export const Button = ({ link = "", title, primary = true, className = '', icon = false, target }) => {
  const isInternalAnchor = link.startsWith("#");

  const handleClick = async (e) => {
    if (isInternalAnchor) {
      e.preventDefault();
      const id = link.replace("#", "");
      const targetElement = document.getElementById(id);

      if (targetElement) {
        // Função para rolar até o elemento
        const scrollToElement = () => {
          const offset = 80; // Aumentado para cabeçalho fixo (ajuste conforme necessário)
          const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;

          console.log("Posição do #sale:", {
            top: targetElement.getBoundingClientRect().top,
            pageYOffset: window.pageYOffset,
            elementPosition: elementPosition - offset,
            timestamp: Date.now(),
          });

          window.scrollTo({
            top: elementPosition - offset,
            behavior: "smooth",
          });
        };

        try {
          // Aguarda o próximo ciclo de renderização
          await new Promise((resolve) => requestAnimationFrame(resolve));

          // Aguarda um pequeno atraso para garantir estabilização do layout
          await new Promise((resolve) => setTimeout(resolve, 100));

          // Executa o scroll
          scrollToElement();
        } catch (error) {
          console.error("Erro ao executar scroll:", error);
          scrollToElement(); // Fallback
        }
      }
    }
  };

  const commonClasses = `md:text-lg font-extrabold flex items-center justify-center gap-4 rounded-full py-3 px-4 md:px-8 border-2 border-brand-dark text-center ${primary ? "text-brand-dark bg-brand-yellow" : "text-brand-light bg-brand-blue-dark"} hover:brightness-125 duration-300 ease-in-out leading-none ${className}`;

  return isInternalAnchor ? (
    <a href={link} onClick={handleClick} className={commonClasses}>
      {title}
    </a>
  ) : (
    <a href={link} target={target} className={commonClasses}>
      {icon && <img src={iconWhatsapp} alt="Whatsapp" className="w-4 md:w-6" />}
      {title}
    </a>
  );
};