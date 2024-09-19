import React, { useState } from 'react';
import LinkButton from '../../../Components/buttons/LinkButton';
import { GoSidebarCollapse, GoSidebarExpand } from 'react-icons/go';
import { GiCardRandom, GiMuscleUp } from 'react-icons/gi';
import { TbTicTac } from 'react-icons/tb';
import { FaCalculator } from 'react-icons/fa';
import { LuListTodo } from 'react-icons/lu';
import { HiMiniUsers } from 'react-icons/hi2';

const navItems = [
  {
    buttonText: 'Sign up Form',
    buttonLink: '/SignupForm',
    icon: <HiMiniUsers size={26} />
  },
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
  },
  {
    buttonText: 'Workout Generator',
    buttonLink: '/workoutGenerator',
    icon: <GiMuscleUp size={26} />
  }
];

const SideBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);

  function toggleSidebar() {
    setIsOpen(!isOpen);
  }

  return (
    <nav
      className={`fixed top-0 left-0 h-full bg-[#29277a] transition-width duration-400 ${
        isOpen ? 'w-64' : 'w-16'
      }`}
    >
      <div
        className={`h-full ${
          isOpen ? 'w-64' : 'w-16'
        } transition-width duration-400`}
      >
        {/* Burger Button */}
        <LinkButton
          clickFunction={toggleSidebar}
          buttonLink=""
          buttonText=""
          className={`w-16 h-18 flex items-center justify-center text-[#f9f9f9] transition-opacity duration-300`}
          buttonIcon={
            isOpen ? (
              <GoSidebarCollapse size={26} />
            ) : (
              <GoSidebarExpand size={26} />
            )
          }
        />
        {/* Sidebar Menu */}
        <nav className={`mt-4 ${isOpen ? 'block' : 'hidden'}`}>
          {navItems.map(item => (
            <LinkButton
              key={item.buttonText}
              buttonLink={item.buttonLink}
              buttonText={item.buttonText}
              buttonIcon={item.icon}
              clickFunction={() => {}}
              className={`flex items-center gap-4 h-14 w-full px-4 py-2 text-[#f9f9f9] text-lg font-medium rounded-md hover:bg-[#0000004d] transition-opacity duration-300 ${
                isOpen ? 'opacity-100' : 'opacity-80'
              }`}
            >
              <span
                className={`transition-opacity duration-300 ${
                  isOpen ? 'opacity-100' : 'opacity-0'
                }`}
              >
                {item.buttonText}
              </span>
              {item.icon}
            </LinkButton>
          ))}
        </nav>
      </div>
    </nav>
  );
};

export default SideBar;
