import React, { useState } from 'react';
import { LoginForm } from '~/components/LogIn/LoginForm';

function LogIn(username, setUsername, password, setPassword) {
  // const [username, setUsername] = useState('');
  // const [step, setStep] = useState(1);
  // const [password, setPassword] = useState('');

  return (
    <LoginForm
      username={username}
      setUsername={setUsername}
      password={password}
      setPassword={setPassword}
    />
  );
}

export default LogIn;
