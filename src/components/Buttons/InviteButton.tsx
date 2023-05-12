import { useState } from 'react';
import { UserPlus, UserCheck } from 'react-feather';
import classNames from 'classnames';

interface ButtonProps {
  onClick: () => void;
}

const InviteButton: React.FC<ButtonProps> = ({ onClick }) => {
  const [icon, setIcon] = useState(<UserPlus size={16} />);

  const handleClick = () => {
    setIcon(<UserCheck size={16} />);
    onClick();
  };

  const buttonClass = classNames(
    'text-md bg-backtext mt-4 rounded-3xl border-2 border-white px-5 py-2.5 font-bold text-white',
    {
      '': icon.type === UserCheck,
    },
  );

  return (
    <button
      type="button"
      onClick={handleClick}
      disabled={icon.type === UserCheck}
      className={buttonClass}
    >
      {icon}
    </button>
  );
};

export default InviteButton;
