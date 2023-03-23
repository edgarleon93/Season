import React from 'react';
import { Mail, User, Key } from 'react-feather';

type InputProps = {
  variant: 'username' | 'email' | 'password' | 'comment';
  placeholder: string;
  // value: string;
  // onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input: React.FC<InputProps> = ({ placeholder, variant }) => {
  if (variant === 'username') {
    return (
      <div className="relative">
        <input
          className="bg-backtext w-78 rounded-full px-14 py-2 text-white outline-none sm:w-11/12"
          placeholder={placeholder}
        />
        <div className="absolute left-2 top-1/2 ml-8 -translate-y-1/2 transform">
          <User className=" stroke-1 text-white" />
        </div>
      </div>
    );
  } else if (variant === 'email') {
    return (
      <div className="relative">
        <input
          className="bg-backtext w-78 rounded-full px-14 py-2 text-white outline-none sm:w-11/12"
          placeholder={placeholder}
        />
        <div className="absolute left-2 top-1/2 ml-8 -translate-y-1/2 transform">
          <Mail className=" stroke-1 text-white" />
        </div>
      </div>
    );
  } else if (variant === 'password') {
    return (
      <div className="relative">
        <input
          className="bg-backtext w-78 rounded-full px-14 py-2 text-white outline-none sm:w-11/12"
          placeholder={placeholder}
        />
        <div className="absolute left-2 top-1/2 ml-8 -translate-y-1/2 transform">
          <Key className=" stroke-1 text-white" />
        </div>
      </div>
    );
  }
};
export default Input;
