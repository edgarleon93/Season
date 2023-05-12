import React from 'react';
import { Mail, User, Key, Search } from 'react-feather';

type InputProps = {
  variant: 'username' | 'email' | 'password' | 'search';
  placeholder: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  value: string;
};

const Input: React.FC<InputProps> = ({
  placeholder,
  variant,
  onChange,
  required,
  value,
  name,
}) => {
  const commonInputProps = {
    className:
      'bg-backtext w-78 rounded-full px-14 py-2 text-white outline-none sm:w-11/12',
    placeholder,
    onChange,
    required,
    value,
    name,
  };

  if (variant === 'username') {
    return (
      <div className="relative">
        <input {...commonInputProps} />
        <div className="absolute left-2 top-1/2 ml-14 -translate-y-1/2 transform sm:mx-8">
          <User className=" stroke-1 text-white" />
        </div>
      </div>
    );
  } else if (variant === 'email') {
    return (
      <div className="relative">
        <input {...commonInputProps} />
        <div className="absolute left-2 top-1/2 ml-14 -translate-y-1/2 transform sm:mx-8">
          <Mail className=" stroke-1 text-white" />
        </div>
      </div>
    );
  } else if (variant === 'password') {
    return (
      <div className="relative">
        <input {...commonInputProps} type="password" />
        <div className="absolute top-1/2 left-2 ml-14 -translate-y-1/2 transform sm:mx-8">
          <Key className=" stroke-1 text-white" />
        </div>
      </div>
    );
  } else if (variant === 'search') {
    return (
      <div className="relative">
        <input {...commonInputProps} type="change" />
        <div className="absolute top-1/2 left-2 -translate-y-1/2 transform sm:mx-8">
          <Search className=" stroke-1 text-white" />
        </div>
      </div>
    );
  }
};
export default Input;
