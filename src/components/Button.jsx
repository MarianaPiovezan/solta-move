import iconWhatsapp from "/assets/images/icons/whatsapp.svg";

export const Button = ({
  link = "",
  title,
  primary = true,
  className = "",
  icon = false,
  target,
}) => {
  const commonClasses = `md:text-lg font-extrabold flex items-center justify-center gap-4 rounded-full py-3 px-4 md:px-8 border-2 border-brand-dark text-center ${
    primary
      ? "text-brand-dark bg-brand-yellow"
      : "text-brand-light bg-brand-blue-dark"
  } hover:brightness-125 duration-300 ease-in-out leading-none ${className}`;

  return (
    <a href={link} target={target} className={commonClasses}>
      {icon && <img src={iconWhatsapp} alt="Whatsapp" className="w-4 md:w-6" />}
      {title}
    </a>
  );
};
