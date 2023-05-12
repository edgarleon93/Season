import axios from 'axios';
import React, { useContext, useState } from 'react';
import { ChevronLeft } from 'react-feather';
import { useNavigate } from 'react-router-dom';
import Button from '~/components/Buttons/Button';
import Input from '~/components/Inputs/Input';
import { register } from '~/services/auth';
import { AuthContext } from '~/contexts/authContext';

interface RegisterProps {
  onRegisterSucces: (token: string) => void;
}
export function Register({ onRegisterSucces }: RegisterProps) {
  const [values, setValues] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const { setUserId } = useContext(AuthContext); // Ajoutez cette ligne pour obtenir setUserId à partir du contexte

  const navigate = useNavigate();
  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setValues((prev) => {
      const updatedValues = { ...prev, [name]: value };
      return updatedValues;
    });
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const { token } = await register(values, setUserId); // Passez setUserId à la fonction register
      console.log('Login successful:', token);
      onRegisterSucces(token);
      navigate('/avatar');
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  const BackLogIn = () => {
    navigate('/LogIn');
  };

  return (
    <>
      <div className="fixed left-0 top-0 ml-4">
        <Button variant="secondary" onClick={BackLogIn}>
          <div className="flex pr-2.5">
            <ChevronLeft className="mt-1 stroke-1" />
            Login
          </div>
        </Button>
      </div>

      <div className="sm:w-[60vw]">
        <img className="pt-32 sm:hidden" src="./img/PPhone.webp" alt="" />
      </div>
      <div className="align-center grid place-content-center gap-4 text-center sm:mr-10 sm:grid-cols-2">
        <div className="text-center">
          <img
            className="hidden h-screen w-[40vw] sm:block"
            src="./img/BgDesk.png"
            alt=""
          />
        </div>
        <div className="flex items-center justify-center">
          <div className="mx-auto max-w-lg">
            <h2 className="text-3xl text-white md:text-5xl">CREATE YOUR ACCOUNT</h2>

            <p className="text-md mx-9 mt-2 text-center text-white md:mt-4 md:text-xl">
              And start to add some seasoning to your social life!
            </p>
            <form onSubmit={handleSubmit}>
              <div className="mt-12">
                <Input
                  value={values.username}
                  name="username"
                  variant="username"
                  placeholder="Username"
                  onChange={handleInput}
                  required
                />

                <div className="mt-5 flex-row">
                  <Input
                    value={values.email}
                    name="email"
                    variant="email"
                    placeholder="E-mail"
                    onChange={handleInput}
                    required
                  />
                </div>
                <div className="mt-5 flex-row">
                  <Input
                    value={values.password}
                    name="password"
                    variant="password"
                    placeholder="Password"
                    onChange={handleInput}
                    required
                  />
                </div>
                <div className="mt-5 flex-row">
                  <Input
                    value={values.confirmPassword}
                    name="confirmPassword"
                    variant="password"
                    placeholder="Confirm Password"
                    onChange={handleInput}
                    required
                  />
                </div>
              </div>
            </form>
            <div className=" flex justify-center">
              <Button onClick={handleSubmit} variant="tertiary">
                Continue
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
