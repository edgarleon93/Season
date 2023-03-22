import react from 'react';
import classNames from 'classnames';

interface ButtonProps {
  type?: 'submit' | 'button';
  className?: string;
  disabled?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
  variant: 'primary' | 'secondary' | 'tertiary' | 'quaternary';
}

const Button = ({ onClick, variant, children }: ButtonProps) => {
  const classes = classNames('text-md mt-4 rounded-3xl px-5 py-2', {
    'border-2 border-red text-red bg-backtext': variant === 'primary',
    'text-white bg-backtext': variant === 'secondary',
    'text-white border-2 border-red bg-backtext': variant === 'tertiary',
    'text-white border-2 border-white bg-backtext': variant === 'quaternary',
  });
  return (
    <button className={classes} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
