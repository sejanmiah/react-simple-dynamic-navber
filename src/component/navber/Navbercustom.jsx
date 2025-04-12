import React, { useState } from 'react';
import Link from './Link';
import { Logs, X } from 'lucide-react';
const navMenuItems = [
  {
    id: 1,
    name: "Home",
    path: "/"
  },
  {
    id: 2,
    name: "About Us",
    path: "/about"
  },
  {
    id: 3,
    name: "Services",
    path: "/services"
  },
  {
    id: 4,
    name: "Portfolio",
    path: "/portfolio"
  },
  {
    id: 5,
    name: "Contact",
    path: "/contact"
  }
];

const Navbercustom = () => {
  const Links = navMenuItems.map(route => <Link key={route.id} route={route}></Link>)

  const [open, setOpen] = useState(false);
  return (
    <nav className='flex justify-between mx-10 items-center mt-5'>

      <span className='flex' >
        <span onClick={() => setOpen(!open)}>
          {open ? <X className='md:hidden'></X> : <Logs className='cursor-pointer md:hidden' />}
        </span>

        <ul className={`
          bg-amber-200 text-black md:hidden absolute duration-1000 p-4 rounded-lg
           ${open ? 'left-10 top-10' : '-left-52 top-10'}
           `}>
          {Links}
        </ul>
        <button>Logo</button>
      </span>

      <ul className='md:flex hidden'>
        {
          Links
        }
      </ul>

      <button className='btn'>Call Now</button>
    </nav>
  );
};

export default Navbercustom;