import React, { useState } from 'react';
import Menu from './Menu';
import { FaSearch } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";

const Header = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className='h-[20vh] w-full flex items-center gap-5'>
      <Menu />
      
        <div className='h-full flex items-center'>
          <img src={'/Logo2.jpg'} className='h-full' alt='logo' />
        </div>

        <FaSearch className="text-zinc-400 text-3xl ml-24" />
        <input
          onChange={handleSearchChange}
          value={searchTerm}
          className="w-[50%] text-black mx-10 p-5 text-xl outline-none border-none bg-transparent"
          type="text"
          placeholder="search anything"
        />
      <FaUserAlt className='text-3xl ml-7'/>

      <div className='ml-7 text-2xl rounded-lg bg-[#ff4900] text-[white] px-5 py-2'>
        User Name
      </div>

      
    </div>
  );
}

export default Header;
