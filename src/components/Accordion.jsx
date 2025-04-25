import { m, LazyMotion, domAnimation } from 'framer-motion';


export const Accordion = ({
  titleButton = '',
  open = false,
  children,
  onClick,
  backgroundColor,
  textColor,
}) => {
  const animate = {
    transition: { type: 'tween' },
    height: open ? 'auto' : 0,
    opacity: open ? 1 : 0.5,
  };

  return (
    <div>
      <button
        className={`${backgroundColor} w-full ${textColor} py-4 md:py-6 rounded-2xl flex  justify-between items-center gap-2  text-lg md:text-xl cursor-pointer leading-5`}
        type='button'
        onClick={onClick}
      >
        <p className='text-left font-extrabold tracking-wider '>{titleButton}</p>
        {
          <p
            className={`${textColor} duration-300 ease-in-out font-bold text-lg text-center`}
            aria-label={open ? 'Fechar' : 'Abrir'}
          >
            {' '}
            {open ? '-' : '+'}{' '}
          </p>
        }
      </button>
      <LazyMotion features={domAnimation} strict>
        <div className=''>
          <m.div
            style={{ overflow: 'hidden' }}
            initial={{ height: 0, opacity: 1 }}
            animate={animate}
            exit={{ height: 0, opacity: 1 }}
          >
            {open && <div>{children}</div>}
          </m.div>
        </div>
      </LazyMotion>
    </div>
  );
};
