import { FC } from "react";
import Link from "next/link";
const isLoggedIn: boolean = false;
const Header = () => {
  return (
    <header className='bg-gray-800 text-white sticky top-0 flex items-center justify-between px-4 py-5'>
      <nav className='flex justify-between w-full'>
        <ul className='flex space-x-8'>
          <li>
            <Link href='/'>Home</Link>
          </li>
          <li>
            <Link href='/about'>About</Link>
          </li>
          <li>
            <Link href='/solution'>Solution</Link>
          </li>
        </ul>
        <ul className='flex space-x-8'>
          <li>
            <Link href='/Login' className='hover:underline'>
              Login
            </Link>
          </li>
          <li>
            <Link href='/request-demo' className='hover:underline'>
              Request for Demo
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
