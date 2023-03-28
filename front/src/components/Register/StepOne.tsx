import React, { useState } from 'react';
import Button from '../Buttons/Button';
import { ChevronLeft } from 'react-feather';
import Input from '../Inputs/Input';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function StepOne() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

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
        navigate('/login');
        // Redirigez l'utilisateur vers la page souhaitée après l'enregistrement réussi
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="fixed left-0 top-0 ml-4">
        <Button variant="secondary">
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
                variant="username"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <div className="mt-5 flex-row">
                <Input
                  variant="email"
                  placeholder="E-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mt-5 flex-row">
                <Input
                  variant="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="mt-5 flex-row">
                <Input
                  variant="password"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
            </div>
            <div className=" flex justify-center">
              <Button variant="tertiary" onClick={handleRegister}>
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
