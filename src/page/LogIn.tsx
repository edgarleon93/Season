import React, { useState } from 'react';
import { LoginForm } from '~/components/LoginForm';

interface LogInProps {
  onLoginSuccess: (token: string) => void;
}

function LogIn({ onLoginSuccess }: LogInProps) {
  return <LoginForm onLoginSuccess={onLoginSuccess} />;
}

export default LogIn;
