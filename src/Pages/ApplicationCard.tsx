import React, { useEffect, useState } from 'react';
import SideBar from './PageComponents/sideBar/Sidebar';
import Card from '../Components/PageCards/Cards';
import GetCotation from '../Functions/Cotation';
import ChuckNorris from '../Functions/ChuckNorrisApi';
import HomeButton from '../Components/buttons/homeButton';

interface PagesProps {
  PageView: React.ReactElement;
}

export default function ApplicationCard({ PageView }: PagesProps) {
  const [isHomePage, setIsHomePage] = useState(false);

  useEffect(() => {
    const path = window.location.pathname;
    if (path === '/') {
      setIsHomePage(true);
    } else {
      setIsHomePage(false);
    }
  }, [PageView]);
  return (
    <div className="flex flex-col w-full h-full ">
      <div>
        <SideBar />
      </div>

      <div className="flex flex-row justify-around items-center w-full h-full">
        <div className="flex flex-col ml-[-20rem] mr-[-55rem]">
          <Card ClassName=" text-start">
            <GetCotation />
          </Card>
          <Card>
            <ChuckNorris />
          </Card>
        </div>

        <div className="flex flex-col min-w-[100vh] min-h-[65vh] justify-center items-center rounded-lg shadow-2xl bg-slate-600">
          <div className="flex justify-start mb-20">
            {isHomePage ? '' : <HomeButton />}
          </div>
          {PageView}
        </div>
        <div className="flex flex-col mr-[-20rem] ml-[-55rem]">
          <Card ClassName="items-center">
            <p>on development</p>
          </Card>
          <Card ClassName="items-center">
            <p>on development</p>
          </Card>
        </div>
      </div>
    </div>
  );
}
