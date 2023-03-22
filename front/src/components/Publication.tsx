import React from 'react';
import IconButton from './Buttons/IconButton';
function Publication() {
  return (
    <>
      <div className="flex  p-4">
        <img className="mr-4 h-12 w-12 rounded-full" src="" alt="Avatar" />
        <div className="flex-1">
          <div className="mb-2 flex items-center">
            <p className="mr-2 text-xl font-extrabold text-white">John Doe</p>
          </div>
          <p className="mb-4 text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis bibendum nunc et
            orci tristique, at bibendum magna cursus. Nulla porttitor massa vel ultrices
            vestibulum. Suspendisse commodo metus vel ex pellentesque ullamcorper.
          </p>
          <div className="flex items-center justify-end">
            <button className=" text-white hover:text-white">
              <IconButton type="heart" onClick={() => console.log('heart clicked')} />

              <span className="ml-1">10</span>
            </button>
            <button className="mx-4 text-white hover:text-white">
              <IconButton
                type="messageSquare"
                onClick={() => console.log('messageSquare clicked')}
              />

              <span className="ml-1">5</span>
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <span className="block w-11/12 border-t border-white"></span>
      </div>
    </>
  );
}
export default Publication;
