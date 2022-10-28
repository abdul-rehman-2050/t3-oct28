import React from "react";
import Sidebar1 from "../components/sidebar1";

function Test1() {
  return (
    <div className="min-h-screen bg-slate-500 shadow-lg">
      <div className="h-14 w-full bg-blue-500 p-4 text-white">hello</div>
      <div className="flex">
        <div className="hidden sm:block">
          <div className="w-64 border-b-2 bg-blue-900">
            <Sidebar1 />
          </div>
        </div>

        <div className="min-h-screen w-full bg-teal-50 p-4">hello</div>
      </div>
    </div>
  );
}

export default Test1;
