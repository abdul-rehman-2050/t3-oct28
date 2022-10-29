import React from "react";
import Sidebar1 from "../components/sidebar1";
import Appbar from "../components/appbar";


type Dashboard1Props = {
    children:React.ReactNode
    bgcolor:string
    childcss?:string
}

function Dashboar1Layout({ children,bgcolor,childcss }: Dashboard1Props) {
  return (
    <>
      <Appbar />
      <div className={`flex ${bgcolor}`}>
        <div className="hidden w-64 md:block">
          <Sidebar1 />
        </div>
        <div className={`w-full flex-row p-8 ${childcss}`}>{children}</div>
      </div>
    </>
  );
}

export default Dashboar1Layout;
