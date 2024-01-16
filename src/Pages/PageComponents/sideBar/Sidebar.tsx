import React, { useState } from 'react';
import './styles.css';
import Button from '../../../Components/buttons/button';
import { GoSidebarCollapse, GoSidebarExpand } from 'react-icons/go';
import { GiCardRandom } from 'react-icons/gi';
import { TbTicTac } from 'react-icons/tb';
import { FaCalculator } from 'react-icons/fa';
import { LuListTodo } from 'react-icons/lu';

const navItems = [
  {
    buttonText: '21 Card Game',
    buttonLink: '/21CardGame',
    icon: <GiCardRandom size={26} />
  },
  {
    buttonText: 'JogodaVelha',
    buttonLink: '/JogodaVelha',
    icon: <TbTicTac size={26} />
  },
  {
    buttonText: 'Calculadora',
    buttonLink: '/Calculadora',
    icon: <FaCalculator size={26} />
  },
  {
    buttonText: 'To Do List',
    buttonLink: '/TodoList',
    icon: <LuListTodo size={26} />
  }
];

const SideBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);

  function toggleSidebar() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <nav className={`sidebar ${isOpen ? '' : 'open'}`}>
        <div className="sidebar-inner">
          <Button
            clickFunction={toggleSidebar}
            buttonLink=""
            buttonText=""
            className={'sidebar-burger'}
            buttonIcon={
              isOpen ? (
                <GoSidebarCollapse size={26} />
              ) : (
                <GoSidebarExpand size={26} />
              )
            }
          />
          <nav className={'sidebar-menu'}>
            {isOpen
              ? navItems.map(item => (
                  <Button
                    key={item.buttonText}
                    buttonLink={item.buttonLink}
                    buttonText={item.buttonText}
                    buttonIcon={item.icon}
                    type="button"
                    className={'sidebar-button'}
                  >
                    {item.icon}
                  </Button>
                ))
              : navItems.map(item => (
                  <Button
                    key={item.buttonText}
                    buttonLink={item.buttonLink}
                    buttonText={item.buttonText}
                    buttonIcon={item.icon}
                    type="button"
                    className={'sidebar-button'}
                  >
                    {item.icon}
                  </Button>
                ))}
          </nav>
        </div>
      </nav>
    </>
  );
};

export default SideBar;
