import { Dispatch, SetStateAction, useEffect } from 'react';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';
import FirstPage from '../FirstPage';

interface Props {
  email: string;
  username: string;
  setEmail: Dispatch<SetStateAction<string>>;
  setUsername: Dispatch<SetStateAction<string>>;
  password: string;
  setPassword: Dispatch<SetStateAction<string>>;
  confirmPassword: string;
  setConfirmPassword: Dispatch<SetStateAction<string>>;
  step: number;
  setStep: Dispatch<SetStateAction<number>>;
  avatar: boolean;
  setAvatar: Dispatch<SetStateAction<boolean>>;
}

export function StepSwitch({
  email,
  setEmail,
  username,
  setUsername,
  password,
  setPassword,
  confirmPassword,
  setConfirmPassword,
  step,
  setStep,
  avatar,
  setAvatar,
}: Props) {
  // useEffect(() => {
  //   const params = new URLSearchParams(window.location.search);
  //   const token = params.get('token');

  //   if (token) {
  //     setStep(3);
  //     window.localStorage.setItem('token', token);
  //   }
  // });

  switch (step) {
    case 1:
      return (
        <StepOne
          email={email}
          setEmail={setEmail}
          username={username}
          setUsername={setUsername}
          confirmPassword={confirmPassword}
          setConfirmPassword={setConfirmPassword}
          password={password}
          setPassword={setPassword}
          setStep={setStep}
        />
      );
    case 2:
      return <StepTwo setAvatar={setAvatar} setStep={setStep} />;
    case 3:
      return <StepThree />;
  }
}
