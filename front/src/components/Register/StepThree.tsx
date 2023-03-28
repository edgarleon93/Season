import React from 'react';
import Button from '../Buttons/Button';

function StepThree() {
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
              <h2 className="mt-24 text-3xl text-white sm:mt-36 md:mt-48 md:text-5xl">
                Congrats! You just created your account !!{' '}
              </h2>
              <div className="mt-60 flex justify-center md:mt-96">
                <Button variant="tertiary">Continue</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default StepThree;
