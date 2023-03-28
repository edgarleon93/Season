import React, { useState } from 'react';
import Button from '../Buttons/Button';
import { ChevronLeft } from 'react-feather';
import Input from '../Inputs/Input';
import axios from 'axios';
import { Dispatch, SetStateAction } from 'react';

interface Props {
  email: string;
  setEmail: Dispatch<SetStateAction<string>>;
  setStep: Dispatch<SetStateAction<number>>;
  password: string;
  setPassword: Dispatch<SetStateAction<string>>;
  confirmPassword: string;
  setConfirmPassword: Dispatch<SetStateAction<string>>;
  username: string;
  setUsername: Dispatch<SetStateAction<string>>;
}

function StepOne({
  email,
  username,
  setUsername,
  password,
  setPassword,
  confirmPassword,
  setConfirmPassword,
  setEmail,
  setStep,
}: Props) {
  const handleRegister = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:3001/api/register', {
        username,
        email,
        password,
        confirmPassword,
      });

      if (response.data.token) {
        localStorage.setItem('token', response.data.token);
        // Redirigez l'utilisateur vers la page souhaitée après l'enregistrement réussi
      }
    } catch (error) {
      console.error(error);
    }
  };

  const BackLogIn = () => {
    window.location.href = '/LogIn';
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
            <div className="mt-12">
              <Input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                variant="username"
                placeholder="Username"
              />
              <div className="mt-5 flex-row">
                <Input
                  onChange={(e) => setUsername(e.target.value)}
                  value={username}
                  variant="email"
                  placeholder="E-mail"
                />
              </div>
              <div className="mt-5 flex-row">
                <Input
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  variant="password"
                  placeholder="Password"
                />
              </div>
              <div className="mt-5 flex-row">
                <Input
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  value={confirmPassword}
                  variant="password"
                  placeholder="Confirm Password"
                />
              </div>
            </div>
            <div className=" flex justify-center">
              <Button
                onClick={() => setStep(2)}
                disabled={!email || !password || !username || !confirmPassword}
                variant="tertiary"
              >
                Continue
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default StepOne;
