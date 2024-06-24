import React, { useState } from "react";

import { Bars3Icon } from "@heroicons/react/24/solid";

import hieloElementalProfilePicture from "../../assets/hieloelemental-profile-picture.png";

const centerLinks = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Projects",
    link: "/projects",
  },
  {
    name: "Blog",
    link: "/blog",
  },
];

const leftLinks = [
  {
    name: "Github",
    link: "https://github.com/HieloElemental",
  },
];

const navUlElements = [centerLinks, leftLinks];

const NavBar = () => {
  const [isResponsiveOpen, setIsResponsiveOpen] = useState(false);

  return (
    <nav className='bg-stone-300 dark:bg-stone-700 w-full fixed h-14 top-0 left-0 px-4 flex justify-between md:justify-center items-center font-azeret-mono text-md font-light'>
      <div className='w-full max-w-5xl h-full flex items-center justify-between'>
        <ul className='flex h-full gap-2 items-center'>
          <li className='h-full'>
            <figure className='h-full'>
              <img
                className='h-full p-2'
                src={hieloElementalProfilePicture}
                alt='Profile picture'
              />
            </figure>
          </li>
          <li className='font-bold'>HieloElemental</li>
          {
            //TODO: add Link component
          }
        </ul>
        <div
          className={`w-full max-w-md lg:max-w-2xl fixed md:static min-h-screen md:min-h-min top-14 ${
            isResponsiveOpen ? "right-0" : "-right-full"
          } flex flex-col justify-between items-center md:flex-row bg-stone-400 dark:bg-stone-600 md:bg-transparent md:dark:bg-transparent transition-all`}
        >
          {navUlElements.map((navEl, i) => {
            return (
              <ul
                key={i}
                className='flex flex-col items-center justify-center md:flex-row w-full mb-14 md:m-0'
              >
                {navEl.map(({ name, link, icon }) => {
                  return (
                    <li key={name} className='w-full'>
                      <a
                        href={link}
                        className='flex items-center justify-center h-14 px-4 w-full border-b border-stone-600 dark:border-stone-400 md:border-none md:min-w-min'
                      >
                        {icon || name}
                      </a>
                    </li>
                  );
                })}
              </ul>
            );
          })}
        </div>
      </div>
      <div className='flex h-full md:hidden items-center'>
        <Bars3Icon
          className='h-full p-4 cursor-pointer'
          onClick={() => setIsResponsiveOpen(!isResponsiveOpen)}
        />
      </div>
    </nav>
  );
};

export default NavBar;
