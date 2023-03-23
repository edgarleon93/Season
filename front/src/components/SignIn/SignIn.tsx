import React from 'react';
import Button from '../Buttons/Button';
import { ChevronLeft } from 'react-feather';
import Input from '../Inputs/Input';

function SignIn() {
  return (
    <>
      <div className="fixed left-0 top-0 ml-4">
        <Button variant="secondary">
          <div className="flex pr-2.5">
            <ChevronLeft className="mt-1 stroke-1" />
            Register
          </div>
        </Button>
      </div>
      <img className="pt-32 " src="./img/PPhone.webp" alt="" />
      <div className="m-6 py-2">
        <div className="align-center inline-block justify-center text-center">
          <h2 className="text-3xl text-white">WELCOME BACK!</h2>
          <p className="text-md mt-2 text-center text-white">
            Enter your credentials to access your account
          </p>
          <div className="grid-cols-start mt-12 grid ">
            <Input variant="username" placeholder="Username" />
            <div className="mt-10 flex-row">
              <Input variant="password" placeholder="Password" />
              <Button variant="fifth">
                <p className="text-xs">Forgot password?</p>
              </Button>
            </div>
          </div>
          <div className="flex justify-center">
            <Button variant="tertiary">Continue</Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignIn;
