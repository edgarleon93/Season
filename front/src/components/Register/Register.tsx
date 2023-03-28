import Button from '../Buttons/Button';
import { ChevronLeft } from 'react-feather';
import Input from '../Inputs/Input';

function Register() {
  return (
    <>
      <div className="fixed left-0 top-0 ml-4">
        <Button variant="secondary">
          <div className="flex pr-2.5">
            <ChevronLeft className="mt-1 stroke-1" />
            Login
          </div>
        </Button>
      </div>

      <div className="sm:w-[60vw]">
        <img className="pt-32 sm:hidden" src="./img/PPhone.webp" alt="" />
      </div>
      <div className="align-center grid place-content-center gap-4 text-center sm:mr-10 sm:grid-cols-2">
        <div className="text-center">
          <img
            className="hidden h-screen w-[40vw] sm:block"
            src="./img/BgDesk.png"
            alt=""
          />
        </div>
        <div className="flex items-center justify-center">
          <div className="mx-auto max-w-lg">
            <h2 className="text-3xl text-white md:text-5xl">CREATE YOUR ACCOUNT</h2>
            <p className="text-md mx-9 mt-2 text-center text-white md:mt-4 md:text-xl">
              And start to add some seasoning to your social life!
            </p>
            <div className="mt-12">
              <Input variant="username" placeholder="Username" />
              <div className="mt-5 flex-row">
                <Input variant="email" placeholder="E-mail" />
              </div>
              <div className="mt-5 flex-row">
                <Input variant="password" placeholder="Password" />
              </div>
              <div className="mt-5 flex-row">
                <Input variant="password" placeholder="Confirm Password" />
              </div>
            </div>
            <div className=" flex justify-center">
              <Button variant="tertiary">Continue</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
