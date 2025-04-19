export const Button = ({ link = "", title, primary = false }) => {
  return (
    <a href={link} className={`text-xs md:text-lg font-extrabold rounded-full py-2 px-4 md:px-8 border-2 border-brand-dark ${primary ? "text-brand-dark bg-brand-yellow" : "text-brand-light bg-brand-blue-dark"} hover:brightness-105 duration-300 ease-in-out `}>
      {title}
    </a>
  );
};
