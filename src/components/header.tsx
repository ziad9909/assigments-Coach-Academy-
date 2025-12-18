import { NavLink } from 'react-router-dom';
import { FaRegHeart, FaShoppingBag } from 'react-icons/fa';
import { IoPersonOutline } from 'react-icons/io5';
import DarkMode from './mode/Dark-mode';

const Header = () => {
  return (
    <header className='flex justify-between items-center px-18 py-4 mx-auto max-w-7xl'>
      <h1 className='text-2xl font-bold'>Auréne</h1>
      <nav className='flex gap-10 items-center'>
        <NavLink
          to={'/'}
          className={({ isActive }) => (isActive ? 'text-[#D4AF37]' : '')}
        >
          Home
        </NavLink>
        <NavLink
          to={'/shop'}
          className={({ isActive }) => (isActive ? 'text-[#D4AF37]' : '')}
        >
          Shop
        </NavLink>
        <NavLink
          to={'/about'}
          className={({ isActive }) => (isActive ? 'text-[#D4AF37]' : '')}
        >
          About
        </NavLink>
        <NavLink
          to={'/contact'}
          className={({ isActive }) => (isActive ? 'text-[#D4AF37]' : '')}
        >
          Contact
        </NavLink>
      </nav>
      <div className='flex gap-4 items-center'>
        <DarkMode />
        <FaRegHeart />
        <FaShoppingBag />
        <IoPersonOutline />
      </div>
    </header>

  );
};

export default Header;