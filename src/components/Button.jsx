import iconWhatsapp from "/assets/images/icons/whatsapp.svg";

export const Button = ({
  link = "",
  title,
  primary = true,
  className = '',
  icon = false,
  target
}) => {
  const isInternalAnchor = link.startsWith("#");

  const handleClick = (e) => {
    if (isInternalAnchor) {
      e.preventDefault(); // Previne o comportamento padrão de navegação

      const id = link.replace("#", "");
      const targetElement = document.getElementById(id); // Obtém o elemento de destino

      if (targetElement) {
        // Usamos o requestAnimationFrame para garantir que o scroll seja executado no momento certo
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
          });
        });
      }
    }
  };

  const commonClasses = `md:text-lg font-extrabold flex items-center justify-center gap-4 rounded-full py-3 px-4 md:px-8 border-2 border-brand-dark text-center ${
    primary
      ? "text-brand-dark bg-brand-yellow"
      : "text-brand-light bg-brand-blue-dark"
  } hover:brightness-125 duration-300 ease-in-out leading-none ${className}`;

  return isInternalAnchor ? (
    <a href={link} onClick={handleClick} className={commonClasses}>
      {title}
    </a>
  ) : (
    <a href={link} target={target} className={commonClasses}>
      {icon && (
        <img
          src={iconWhatsapp}
          alt="Whatsapp"
          loading="lazy"
          className="w-4 md:w-6"
        />
      )}
      {title}
    </a>
  );
};
