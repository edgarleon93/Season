import React, { useState } from 'react';
import { StepSwitch } from '~/components/Register/StepSwitch';

function Register() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [avatar, setAvatar] = useState(false);
  const [password, setPassword] = useState('');
  const [step, setStep] = useState(1);
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <StepSwitch
      email={email}
      setEmail={setEmail}
      username={username}
      setUsername={setUsername}
      confirmPassword={confirmPassword}
      setConfirmPassword={setConfirmPassword}
      password={password}
      setPassword={setPassword}
      setAvatar={setAvatar}
      avatar={avatar}
      step={step}
      setStep={setStep}
    />
  );
}

export default Register;
