import React from "react";
import Dashboar1Layout from "../../layouts/dashboard1-layout";
import FlexGridEx01 from "../../examples/tailwind-examples/flex-grid-ex01";
import FlexCardsMultiple from "../../examples/tailwind-examples/flexcards-multiple-ex01";

function Test1() {
  
  

  return (
    <Dashboar1Layout bgcolor="bg-white">      
        <div className="flex flex-wrap">
            <FlexCardsMultiple cardnum={5}/>
        </div>
        <div>
            <FlexGridEx01/>
        </div>    
    </Dashboar1Layout>
  );
}

export default Test1;
