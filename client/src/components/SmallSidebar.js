import React from 'react';
import Wrapper from '../assets/wrappers/SmallSidebar';
import { FaTimes } from 'react-icons/fa';
import { useAppContext } from '../context/appContext';
import { NavLinks, Logo } from './index';
/* import NavLinks from './NavLinks';
import Logo from './Logo';
 */
export const SmallSidebar = () => {
  const { toggleSidebar, showSidebar } = useAppContext();

  return (
    <Wrapper>
      <div
        className={
          showSidebar ? 'sidebar-container show-sidebar' : 'sidebar-container'
        }
      >
        <div className='content'>
          <button className='close-btn' onClick={toggleSidebar}>
            <FaTimes />
          </button>
          <header>
            <Logo />
          </header>
          <NavLinks toggleSidebar={toggleSidebar}></NavLinks>
        </div>
      </div>
    </Wrapper>
  );
};

export default SmallSidebar;
