import React from 'react';
import { ChevronLeft } from 'react-feather';
import Button from '~/components/Buttons/Button';
import Input from '~/components/Inputs/Input';
import NavBar from '~/components/Navbar';

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
