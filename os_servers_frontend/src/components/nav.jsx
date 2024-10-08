
import React, { useState, useEffect, useRef } from 'react';
import { styles } from '../style';
import { terminal, user } from '../assets';
import { Link, useNavigate } from 'react-router-dom';

const Navigation = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-start mt-2 absolute top-12 right-0 bg-white shadow-lg rounded-lg p-4">
      <div
        className="w-full p-2 mb-2 text-black-500 cursor-pointer hover:bg-blue-100 rounded"
        onClick={() => navigate('/login')}
      >
        Login
      </div>
      <div
        className="w-full p-2 text-black-500 cursor-pointer hover:bg-green-100 rounded"
        onClick={() => navigate('/register')}
      >
        Register
      </div>
    </div>
  );
};

const Nav = () => {
  const [showOptions, setShowOptions] = useState(false);
  const optionsRef = useRef(null);
  const profileRef = useRef(null);

  const handleClickOutside = (event) => {
    if (
      optionsRef.current && !optionsRef.current.contains(event.target) &&
      profileRef.current && !profileRef.current.contains(event.target)
    ) {
      setShowOptions(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-2 fixed bg-[#000000] top-0 left-0 z-10`}>
      <div className='flex w-full items-center justify-between max-w-7xl mx-auto relative'>
        <Link className="items-center flex gap-2" to="/" onClick={() => { }}>
          <img src={terminal} alt='logo' className='h-8 w-8 object-contain bg-white p-1 rounded-full' />
          <p className='text-black font-bold text-white text-xl'>EDS</p>
        </Link>
        <div className='relative'>
          <img
            src={user}
            alt='profile'
            className='h-8 w-8 object-contain bg-white p-1 rounded-full cursor-pointer'
            onClick={() => setShowOptions(!showOptions)}
            ref={profileRef}
          />
          {showOptions && <div ref={optionsRef}><Navigation /></div>}
        </div>
      </div>
      {/* =======
import React from "react";
import {styles} from "../style";
      import {terminal, git} from "../assets";
      import {Link, useNavigate} from "react-router-dom";

const Nav = () => {
  const Navigate = useNavigate();
      return (
      <nav
        className={`${styles.paddingX} w-full flex items-center py-1   bg-[#000000f0] fixed  pattern t-0 z-10 pattern`}
      >
        <div className="flex w-full items-center justify-between xl:mx-40  lg:mx-32  md:mx-20   ">
          <Link className="items-center flex gap-2" to="/" onClick={() => {
            XMLDocument(0, 0)
          }}>
            <img
              src={terminal}
              alt="logo"
              className="h-8 w-8 object-contain rounded-sm bg-balck  "
            />
            <p className="font-bold text-white text-xl">EDS</p>
          </Link>
          {localStorage.getItem("acessToken") ? (
            <></>

          ) : (

            <button onClick={() => { Navigate("/login") }} className="px-2 py-1 m-1  cursor-pointer flex justify-between
            opacity-85 hover:opacity-100 items-center  text-white   rounded-sm bg-[#121212] border ">
              <img src={git} alt="login with git hub " width="25px" className="pr-1 " />
              Login</button>

          )}


        </div>

>>>>>>> origin/main */}
    </nav>
  );
};


export default Nav;
