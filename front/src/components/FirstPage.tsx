import React, { useContext, useState } from 'react';
import Button from './Buttons/Button';

function FirstPage() {
  const [href, setHref] = useState('/Index');
  function handleClick() {
    setHref('/Register');
  }

  // [FIXME]: Here you have to use useLocation() hook from react-router-dom to navigate not the window.location.href
  const BackRegister = () => {
    window.location.href = '/Register';
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
          <div className="mt-28 flex justify-center max-[385px]:mt-5 sm:mt-36 sm:mb-12">
            <h1 className="text-red text-8xl md:text-9xl">Season</h1>
          </div>
          <img className="sm:hidden" src="./img/PPhone.webp" alt="" />

          <h2 className=" text-center text-3xl text-white md:text-5xl	">
            Add Flavor to your <br /> social media experience.
          </h2>
          <h2 className="mt-8 text-center text-3xl text-white md:text-5xl	">
            It's time to spice up <br /> your social life!
          </h2>

          <span className="mt-5 flex justify-center">
            <Button variant="primary">
              <h2 className="px-12 text-3xl" onClick={BackRegister}>
                Register Now !
              </h2>
            </Button>
          </span>
          <p className="mt-3 flex justify-center text-white">
            Already have an account?
            <a
              className="hover:text-red hover:decoration-red ml-2 text-white underline"
              href="/LogIn"
            >
              Log In
            </a>
          </p>

          <div className="fixed bottom-0 left-0 pb-2 text-white">
            <button className="px-2 text-[0.8rem]">Cookie policy</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default FirstPage;
