import React from "react";
import { IChildren } from "../types/global";
import Sidebar1 from "../components/sidebar1";
import Appbar from "../components/appbar";


function Dashboar1Layout({ children }: IChildren) {
  return (
    <>
      <Appbar />
      <div className="flex bg-slate-500">
        <div className="hidden w-64 md:block ">
          <Sidebar1 />
        </div>
        <div className="w-full flex-row p-8">{children}</div>
      </div>
    </>
  );
}

export default Dashboar1Layout;
