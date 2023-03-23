import React from 'react';
import { ChevronLeft } from 'react-feather';
import Button from '~/components/Buttons/Button';
import Input from '~/components/Inputs/Input';

function Register() {
  return (
    <>
      <div className="sm:flex">
        <div className="">
          <img
            className="hidden h-screen w-[40vw] sm:block"
            src="./img/BgDesk.png"
            alt=""
          />
        </div>
        <div className="fixed left-0 top-0 ml-4">
          <Button variant="secondary">
            <div className="flex pr-2.5">
              <ChevronLeft className="mt-1 stroke-1" />
              Login
            </div>
          </Button>
        </div>
        <div className="sm:w-[60vw]">
          <img className="pt-32  sm:hidden" src="./img/PPhone.webp" alt="" />
          <div className="m-6 py-2">
            <div className="align-center justify-center text-center">
              <h2 className="text-3xl text-white sm:mt-36 md:text-5xl">
                create your account
              </h2>
              <p className="text-md mt-2 text-white">And start to add some seasoning! </p>
              <div className="grid-cols-start mt-12 grid ">
                <div className="mt-5 flex-row">
                  <Input variant="email" placeholder="Email" />
                </div>
                <div className="mt-5 flex-row">
                  <Input variant="username" placeholder="Username" />
                </div>
                <div className="mt-5 flex-row">
                  <Input variant="password" placeholder="Password" />
                </div>
                <div className="mt-5 flex-row">
                  <Input variant="password" placeholder="Reapeat Password" />
                </div>
              </div>
              <div className="flex justify-center">
                <Button variant="tertiary">Continue</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
