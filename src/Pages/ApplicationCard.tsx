import React from 'react';
import SideBar from './PageComponents/sideBar/Sidebar';

interface PagesProps {
  PageView: React.ReactElement;
}

const ApplicationCard: React.FC<PagesProps> = ({ PageView }) => {
  return (
    <div className="flex flex-col w-full h-full ">
      <div>
        <SideBar />
      </div>
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="flex flex-col min-w-[100vh] min-h-[65vh] justify-center items-center rounded-lg shadow-2xl bg-slate-600">
          {PageView}
        </div>
      </div>
    </div>
  );
};

export default ApplicationCard;
