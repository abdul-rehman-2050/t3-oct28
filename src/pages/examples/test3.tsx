import React from "react";
import Dashboar1Layout from "../../layouts/dashboard1-layout";
import FlexCardsMultiple from "../../examples/tailwind-examples/flexcards-multiple-ex01";

function Test3() {
  
  

  return (
    <Dashboar1Layout bgcolor="bg-gray-400">      
        <div className="flex flex-wrap">
            <FlexCardsMultiple cardnum={5}/>
        </div>
        
    </Dashboar1Layout>
  );
}

export default Test3;
