/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import Sidebar1 from "../../components/sidebar1";
import Appbar from "../../components/appbar";
import Sidebar2 from "./sidebar2";
import { FaBars, FaChartBar, FaCog, FaHamburger, FaHome } from "react-icons/fa";
import Sidebartest from "../../components/examples/sidebartest";

type Dashboard1Props = {
  children: React.ReactNode;
  bgcolor?: string;
  childcss?: string;
};

type SideBarMenuItem = {
  name: string;
  icon: React.ReactNode;
  linkto?: string;
};

interface MenuColumnType<T> {
  name: string;
  icon: React.ReactNode;
  linkto?: string;
}

const navItems: MenuColumnType<SideBarMenuItem>[] = [
  {
    name: "Home",
    icon: <FaHome size={21} />,
  },
  {
    name: "Analytics",
    icon: <FaChartBar size={21} />,
  },
  {
    name: "Settings",
    icon: <FaCog size={21} />,
  },
];

function PanelLayout({
  children,
  bgcolor = "bg-white",
  childcss,
}: Dashboard1Props) {
  const [openSidebar, setOpenSidebar] = useState(false);

  return (
    <div className="flex w-full">
      
      <aside className="sticky top-0 h-screen">
        <Sidebartest isOpen={openSidebar} />
      </aside>

      <main className="flex grow flex-col">
        <div className="flex h-16 bg-teal-800 pt-4 pl-4 text-lg text-white">
          <span className="pr-2">
            <FaBars
              className={`absolute-right-3 top-9 w-7 cursor-pointer rounded-full
               border-2 border-teal-800  ${!openSidebar && "rotate-180"}`}
              onClick={() => setOpenSidebar(!openSidebar)}
              size={25}
            />
          </span>
          Header
        </div>
        <div className="paragraph flex flex-1 grow flex-col overflow-y-auto bg-gray-200 p-4">
          {children}
        </div>
      </main>
    </div>
  );
  return (
    <>
      <main className="flex h-screen flex-col bg-teal-200">
        <div className="flex flex-1 overflow-hidden">
          <div className="flex bg-gray-200  ">
            <Sidebartest isOpen={openSidebar} />
          </div>

          <div className="flex flex-1 flex-col">
            <div className="flex h-16 bg-teal-800 pt-4 pl-4 text-lg text-white">
              <span className="pr-2">
                <FaBars
                  className={`absolute-right-3 top-9 w-7 cursor-pointer rounded-full
               border-2 border-teal-800  ${!openSidebar && "rotate-180"}`}
                  onClick={() => setOpenSidebar(!openSidebar)}
                  size={25}
                />
              </span>
              Header
            </div>
            <div className="paragraph flex flex-1 grow flex-col overflow-y-auto bg-gray-200 p-4">
              {children}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default PanelLayout;
