import react from 'react';
import Button from '~/components/Buttons/Button';

function FirstPage() {
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
          <div className="mt-28 flex justify-center sm:mt-36 sm:mb-12">
            <h1 className="text-red text-8xl md:text-9xl">Season</h1>
          </div>
          <img className="sm:hidden" src="./img/PPhone.webp" alt="" />
          <h2 className=" text-center text-3xl text-white md:text-4xl	">
            Add Flavor to your <br /> social media experience.
          </h2>
          <h2 className="mt-8 text-center text-3xl text-white md:text-4xl	">
            It's time to spice up <br /> your social life!
          </h2>
          <span className="mt-16 flex justify-center">
            <Button variant="primary" onClick={() => console.log('Button clicked')}>
              <h2 className="px-12 text-3xl">register now !</h2>
            </Button>
          </span>
          <p className="mt-3 flex justify-center text-white">
            Already have an account?{' '}
            <button className="text-red ml-2 underline"> Login </button>{' '}
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
