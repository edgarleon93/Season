import React, { useEffect, useState } from 'react';
import Button from '../Buttons/Button';
import { useFetcher } from 'react-router-dom';
import { useFetch } from '~/hooks/useFetch';

export function StepThree() {
  const [token, setToken] = useState<string | null>(null);
  const { data, refetch } = useFetch('http://localhost:3001/api/Register', {
    method: 'POST',
    body: JSON.stringify({
      token,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  useEffect(() => {
    setToken(window.localStorage.getItem('token'));

    if (token) {
      refetch();
    }
  }, [token]);

  const onVerifyRegister = () => {
    window.location.href = '/home';
  };

  const onRegister = () => {
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
          <img className="pt-32  sm:hidden" src="./img/PPhone.webp" alt="" />
          <div className="m-6 py-2">
            <div className="align-center justify-center text-center">
              {token ? (
                <>
                  <h2 className="mt-24 text-3xl text-white sm:mt-36 md:mt-48 md:text-5xl">
                    Congrats! You just created your account !!{' '}
                  </h2>
                  <div className="mt-60 flex justify-center md:mt-96">
                    <Button onClick={onVerifyRegister} variant="tertiary">
                      Continue
                    </Button>
                  </div>
                </>
              ) : (
                <>
                  <h2 className="mt-24 text-3xl text-white sm:mt-36 md:mt-48 md:text-5xl">
                    Please check your e-mail
                  </h2>
                  <div className="mt-60 flex justify-center md:mt-96">
                    <Button onClick={onRegister} variant="tertiary">
                      Continue
                    </Button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default StepThree;
