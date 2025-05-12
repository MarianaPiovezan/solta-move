import iconWhatsapp from "/assets/images/icons/whatsapp.svg";

export const Button = ({ link = "", title, primary = true, className = '', icon = false, target }) => {
  const isInternalAnchor = link.startsWith("#");

  
  
  // const handleSmoothScroll = (e) => {
  //   e.preventDefault();
  //   const targetId = e.currentTarget.getAttribute("href").replace("#", "");
  //   const targetElement = document.getElementById(targetId);
  
  //   if (targetElement) {
  //     // Espera um pouco para garantir que o layout esteja pronto
  //     setTimeout(() => {
  //       const topOffset = targetElement.getBoundingClientRect().top + window.scrollY - 80; // 80px = altura do header
  //       window.scrollTo({
  //         top: topOffset,
  //         behavior: 'smooth',
  //       });
  //     }, 100);
  //   }
  // };
  

  const commonClasses = `md:text-lg font-extrabold flex items-center justify-center gap-4 rounded-full py-3 px-4 md:px-8 border-2 border-brand-dark text-center ${primary ? "text-brand-dark bg-brand-yellow" : "text-brand-light bg-brand-blue-dark"} hover:brightness-125 duration-300 ease-in-out leading-none ${className}`;

  return isInternalAnchor ? (
    <a href={link}  className={commonClasses}>
      {title}
    </a>
  ) : (
    <a href={link} target={target} className={commonClasses}>
      {icon && <img src={iconWhatsapp} alt="Whatsapp" className="w-4 md:w-6" />}
      {title}
    </a>
  );
};