import React from 'react';

interface Props {
  title: string;
}
export default function Sidebar(props: Props) {
  return (
    <>
      <div className=" mt-2 flex place-content-around border-t border-b border-white pt-1 pb-1">
        <button className=" rounded-full px-4 text-2xl text-white">
          <h2>{props.title}</h2>
        </button>
      </div>
    </>
  );
}
