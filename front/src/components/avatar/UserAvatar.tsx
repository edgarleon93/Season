import { Dispatch, SetStateAction, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import AvatarPicModif from './avatarPicModif';
import Button from '../Buttons/Button';
import { AuthContext } from '~/contexts/authContext';

interface Props {
  setAvatar: Dispatch<SetStateAction<boolean>>;
}

export function UserAvatar({ setAvatar }: Props) {
  const [userImage, setUserImage] = useState<File | null>(null);
  const navigate = useNavigate();
  const { token } = useContext(AuthContext);

  const uploadImage = async () => {
    if (!userImage) return;
    const formData = new FormData();
    formData.append('image', userImage);
    try {
      // Vous devrez remplacer {id} par l'ID réel de l'utilisateur.
      await axios.put(
        `https://season-app-hbxam.ondigitalocean.app/profile-pic/{_id}`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${token}`, // Utilisez le token de l'utilisateur
          },
        },
      );
      navigate('/Home');
    } catch (error) {
      console.error("Erreur lors de l'envoi de l'image:", error);
    }
  };

  const onClick = () => {
    setAvatar(true);
    uploadImage();
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
                Choose your profile picture
              </h2>
              <div className="mt-10 flex flex-wrap justify-center">
                <AvatarPicModif setUserImage={setUserImage} />
              </div>
              <div className="flex justify-center">
                <Button variant="tertiary" onClick={onClick}>
                  Continue
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
