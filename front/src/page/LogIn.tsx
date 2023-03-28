import React, { useState } from 'react';
import { Log } from '~/components/LogIn/Log';

function LogIn() {
  const [username, setUsername] = useState('');
  const [step, setStep] = useState(1);
  const [password, setPassword] = useState('');

  return (
    <Log
      username={username}
      setUsername={setUsername}
      password={password}
      setPassword={setPassword}
    />
  );
}

export default LogIn;
