import React, { useState } from 'react';
import { Heart, MessageSquare } from 'react-feather';

interface ButtonComponentProps {
  type: 'heart' | 'messageSquare';
  onClick?: () => void;
}

const IconButton: React.FC<ButtonComponentProps> = ({ type, onClick }) => {
  const [isHeartRed, setIsHeartRed] = useState<boolean>(false);

  const handleHeartClick = () => {
    setIsHeartRed(!isHeartRed);
    if (onClick) {
      onClick();
    }
  };

  const buttonStyle = 'bg-transparent px-5 py-2.5 text-white';

  if (type === 'heart') {
    return (
      <button className={buttonStyle} onClick={handleHeartClick}>
        <Heart color={isHeartRed ? 'red' : 'white'} />
      </button>
    );
  } else if (type === 'messageSquare') {
    return (
      <button className={buttonStyle} onClick={onClick}>
        <MessageSquare color="white" />
      </button>
    );
  }

  return null;
};

export default IconButton;
