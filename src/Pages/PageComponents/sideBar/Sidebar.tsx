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
  const [isOpen, setIsOpen] = useState(false);

  function toggleSidebar() {
    setIsOpen(!isOpen);
  }

  return (
    <nav
      className={`fixed top-0 left-0 h-full bg-[#29277a] ${
        isOpen ? 'w-64' : 'w-14'
      }`}
    >
      <div className={'flex h-full flex-col '}>
        <div className="flex mt-4 gap-4 h-12 px-4 py-2 text-[#f9f9f9]">
          <button onClick={toggleSidebar}>
            {isOpen ? (
              <GoSidebarExpand size={26} />
            ) : (
              <GoSidebarCollapse size={26} />
            )}
          </button>
        </div>
        <nav className="flex my-4 flex-col">
          {isOpen
            ? navItems.map(item => (
                <LinkButton
                  key={item.buttonText}
                  buttonLink={item.buttonLink}
                  buttonText={item.buttonText}
                  buttonIcon={item.icon}
                  clickFunction={() => {}}
                  className="flex gap-4 h-12 px-4 py-2 items-center text-[#f9f9f9] text-lg font-medium rounded-md hover:bg-[#0000004d]"
                >
                  {item.buttonText}
                </LinkButton>
              ))
            : navItems.map(item => (
                <LinkButton
                  key={item.buttonText}
                  buttonLink={item.buttonLink}
                  buttonIcon={item.icon}
                  clickFunction={() => {}}
                  className="flex gap-4 h-12 px-4 py-2 items-center text-[#f9f9f9] text-lg font-medium rounded-md hover:bg-[#0000004d]"
                >
                  {item.buttonText}
                </LinkButton>
              ))}
        </nav>
      </div>
    </nav>
  );
};

export default SideBar;
