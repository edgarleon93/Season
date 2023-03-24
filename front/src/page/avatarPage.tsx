import React from 'react';
import { ChevronLeft } from 'react-feather';
import Button from '~/components/Buttons/Button';
import Input from '~/components/Inputs/Input';

function AvatarPage() {
  const handleAvatarClick = () => {
    console.log('You chose your avatar');
  };

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
                Choose your avatar{' '}
              </h2>
              <div className="mt-10 flex flex-wrap justify-center">
                <img
                  src="./img/avatar1.webp"
                  alt=""
                  width="110"
                  height="110"
                  className=""
                  onClick={handleAvatarClick}
                />
                <img
                  src="./img/avatar2.webp"
                  alt=""
                  width="110"
                  height="110"
                  className=""
                  onClick={handleAvatarClick}
                />
                <img
                  src="./img/avatar3.webp"
                  alt=""
                  width="110"
                  height="110"
                  className=""
                  onClick={handleAvatarClick}
                />
                <img
                  src="./img/avatar4.webp"
                  alt=""
                  width="110"
                  height="110"
                  className=""
                  onClick={handleAvatarClick}
                />
                <img
                  src="./img/avatar5.webp"
                  alt=""
                  width="110"
                  height="110"
                  className=""
                  onClick={handleAvatarClick}
                />
                <img
                  src="./img/avatar6.webp"
                  alt=""
                  width="110"
                  height="110"
                  className=""
                  onClick={handleAvatarClick}
                />
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
export default AvatarPage;
