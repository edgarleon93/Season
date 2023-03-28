import React from 'react';
import { ChevronLeft } from 'react-feather';
import AvatarPicModif from '~/components/avatarPicModif';
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

        <div className="sm:w-[60vw]">
          <img className="pt-32  sm:hidden" src="./img/PPhone.webp" alt="" />
          <div className="m-6 py-2">
            <div className="align-center justify-center text-center">
              <h2 className="text-3xl text-white sm:mt-36 md:text-5xl">
                Choose your profile picture{' '}
              </h2>
              <div className="mt-10 flex flex-wrap justify-center">
                <AvatarPicModif />
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
