import SideBar from './PageComponents/sideBar/Sidebar';
import HomePage from './homePage';
import useIsHomePage from '../hooks/useIsHomePage';
interface PagesProps {
  PageView: React.ReactElement;
}

export default function ApplicationCard({ PageView }: PagesProps) {
  const isHomePage = useIsHomePage();

  return (
    <div className="flex flex-col w-full h-full ">
      <div>
        <SideBar />
      </div>
      <div className="flex flex-row justify-around items-center w-full h-full">
        {isHomePage ? (
          <div className="flex flex-col p-20 min-w-[50%] min-h-[80vh] justify-center items-center rounded shadow-2xl text-white bg-[#40382C]">
            <HomePage />
          </div>
        ) : (
          <div className="flex flex-col p-20 min-w-[70%] min-h-[80vh] justify-center items-center rounded shadow-2xl text-white bg-[#40382C]">
            {PageView}
          </div>
        )}
      </div>
    </div>
  );
}
