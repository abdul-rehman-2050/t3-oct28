import React from "react";
import Dashboar1Layout from "../layouts/dashboard1-layout";


function Test1() {
    const rows [];
for (let i = 0; i < 10; i++) {
  rows.push(
    <div className="h-64 w-64 bg-teal-500 p-10 shadow-md shadow-white">
      what is thasdfasdfasdfasdfis
    </div>
  );
}

  return <Dashboar1Layout>{rows}</Dashboar1Layout>;
}

export default Test1;
