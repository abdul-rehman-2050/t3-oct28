/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import {
  FaCalendar,
  FaChartBar,
  FaCog,
  FaDatabase,
  FaFolder,
  FaHamburger,
  FaInbox,
  FaLandmark,
  FaSearch,
  FaTools,
} from "react-icons/fa";

type SidebarProps = {
  isOpen: boolean;
};

function Sidebartest({ isOpen }: SidebarProps) {
  //const [open, setOpen] = React.useState(true);

  const Menus = [
    { title: "Dashboard", src: <FaDatabase size={20} /> },
    { title: "Inbox", src: <FaInbox size={20} /> },
    { title: "Accounts", src: <FaChartBar size={20} />, gap: false },
    { title: "Schedule ", src: <FaCalendar size={20} /> },
    { title: "Search", src: <FaSearch size={20} /> },
    { title: "Analytics", src: <FaChartBar size={20} /> },
    { title: "Files ", src: <FaFolder size={20} />, gap: false },
    { title: "Settings", src: <FaCog size={20} />, linkto: "/admin/cred" },
  ];

  return (
    <div className="flex ">
      <div
        className={` ${
          isOpen ? "w-72" : "w-20 "
        } relative h-screen bg-sidebar-black  p-5 pt-8 text-white duration-300`}
      >
        <div className="flex items-center gap-x-4">
          <FaTools
            className={`cursor-pointer font-black text-white duration-500 ${
              isOpen && "rotate-[360deg]"
            }`}
            size={30}
          />
          <h1
            className={`origin-left text-xl font-black font-medium text-white duration-200 ${
              !isOpen && "scale-0"
            }`}
          >
            RepairB
          </h1>
        </div>

        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <Link key={index} href={Menu.linkto ? Menu.linkto : "/"}>
              <li
                
                className={`flex  cursor-pointer items-center gap-x-4  p-2 text-sm font-black text-white hover:border-l-4 hover:border-white hover:bg-light-white
                ${Menu.gap ? "mt-9" : "mt-2"} ${
                  index === 0 && "bg-light-white"
                } `}
              >
                {Menu.src}

                <span
                  className={`${!isOpen && "hidden"} origin-left duration-200`}
                >
                  {Menu.title}
                </span>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Sidebartest;
