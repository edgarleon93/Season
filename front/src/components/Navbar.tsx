import React, { useState } from 'react';
import userImg from '../../public/img/avatar1.webp';

export function Navbar() {

return (

<nav className="bg-bg border-b-2 border-solid border-white px-2 py-5 "> 
  <div className="container mx-auto flex items-center justify-center"> 
    <img src={userImg} className="absolute left-10 mr-3 h-9" alt="Flowbite Logo" /> 
    <a href="/home"> <h1 className="text-red">Season</h1> </a> 
  </div> 
</nav> ); }