import { useEffect, useState } from 'react';
import Button from '../Buttons/Button';
import { Image } from '../Image/Image';
import { ChevronLeft, Key } from 'react-feather';
import Input from '../Inputs/Input';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { login } from '~/services/auth';

interface LoginFormProps {
  onLoginSuccess: (token: string) => void;
}
export function LoginForm({ onLoginSuccess }: LoginFormProps) {
  const [values, setValues] = useState({
    username: '',
    password: '',
  });

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
      const { token } = await login(values);
      console.log('Login successful:', token);
      onLoginSuccess(token);
      navigate('/Home');
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  const navigate = useNavigate();

  // [FIXME]: In react use useLocation hook to travel between routes
  // const onVerifyLogIn = () => {
  //   navigate('/home');
  // };
  const BackRegister = () => {
    console.log('BackRegister I was clicked');
    navigate('/Register');
  };

  const ForgotPassword = () => {
    navigate('/ForgotPassword');
  };

  return (
    <>
      <div className="fixed left-0 top-0 ml-4">
        <Button variant="secondary" onClick={BackRegister}>
          <div className="flex pr-2.5">
            <ChevronLeft className="mt-1 stroke-1" />
            Register
          </div>
        </Button>
      </div>

      <div className="sm:w-[60vw]">
        <img className="pt-32 sm:hidden" src="./img/PPhone.webp" alt="" />
      </div>
      <div className="align-center grid place-content-center gap-4 text-center sm:mr-10 sm:grid-cols-2">
        <div className="text-center">
          <Image
            className="hidden h-screen w-[40vw] sm:block"
            src="./img/BgDesk.png"
            alt=""
          />
        </div>
        <div className="flex items-center justify-center">
          <div className="mx-auto max-w-lg">
            <h2 className="text-3xl text-white md:text-5xl">WELCOME BACK!</h2>
            <p className="text-md mx-7 mt-2 text-center text-white md:mt-4 md:text-xl">
              Enter your credentials to access your account
            </p>

            <form onSubmit={handleSubmit} className="mt-12">
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
                  value={values.password}
                  name="password"
                  variant="password"
                  placeholder="Password"
                  onChange={handleInput}
                  required
                />
                <Button variant="fifth" onClick={ForgotPassword}>
                  <p className="ml-36 text-xs md:pl-40">Forgot password?</p>
                </Button>
              </div>
            </form>
            <div className="flex justify-center">
              <Button variant="tertiary" onClick={handleSubmit}>
                Continue
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// const handleLogin = async () => {
//   setIsLoading(true);

//   try {
//     const response = await axios.post('http://localhost:3001/api/login', {
//     const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/login`, {
//       username,
//       password,
//     });

//     if (response.data.token) {
//       localStorage.setItem('authToken', response.data.token);
//     }
//     setIsLoading(false);
//   } catch (error) {
//     console.error('Error during login:', error);
//     [FIXME]: Add a toast to display the error
//   }
// };
