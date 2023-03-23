import react from 'react';
import classNames from 'classnames';

interface ButtonProps {
  type?: 'submit' | 'button';
  className?: string;
  disabled?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
  variant: 'primary' | 'secondary' | 'tertiary' | 'quaternary' | 'fifth';
}

const Button = ({ onClick, variant, children }: ButtonProps) => {
  const classes = classNames('text-md rounded-full', {
    'border-2 border-red text-red bg-backtext py-2.5 mt-4 px-2.5 ': variant === 'primary',
    'text-white bg-backtext py-2.5  mt-4 px-2.5': variant === 'secondary',
    'text-white border-2 border-red bg-backtext py-2 mt-12 w-72 px-14 hover:bg-red hover:text-white':
      variant === 'tertiary',
    'text-white border-2 border-white bg-backtext py-2.5  mt-4 px-2.5 ':
      variant === 'quaternary',
    'text-white underline underline-offset-2 decoration-white bg-transparent text-sm ml-40 px-2.5':
      variant === 'fifth',
  });

  const style = {
    fontFamily: "'Bebas Neue', cursive",
    lineHeight: '36px',
    letterSpacing: '0.1em',
  };

  return (
    <button className={classes} style={style} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
