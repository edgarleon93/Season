import React, { useState } from 'react';
import defaultProfilePic from '/img/avatar1.webp';

interface Props {
  setUserImage: (image: File | null) => void;
}

function AvatarPicModif({ setUserImage }: Props) {
  const [picture, setPicture] = useState(defaultProfilePic);

  const handlePictureUpload = (event) => {
    const uploadedPicture = URL.createObjectURL(event.target.files[0]);
    setPicture(uploadedPicture);
    setUserImage(event.target.files[0]);
  };

  return (
    <div>
      <div className="flex justify-center">
        <img
          src={picture}
          alt="Profile"
          //   style={{ width: '150px', height: '150px' }}
          className="mb-10 h-[150] w-[150px] rounded-full md:h-[250px] md:w-[250px] lg:h-[300px] lg:w-[300px]"
        />
      </div>
      <div>
        <label className="hover:bg-red border-red mt-5 rounded-full border py-2 px-4 font-bold text-white">
          Upload Photo
          <input type="file" onChange={handlePictureUpload} className="hidden" />
        </label>
      </div>
    </div>
  );
}

export default AvatarPicModif;
