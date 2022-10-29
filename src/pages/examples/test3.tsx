import React from "react";
import Dashboar1Layout from "../../layouts/dashboard1-layout";
import FlexCardsMultiple from "../../examples/tailwind-examples/flexcards-multiple-ex01";
import TopAlertEx01 from "../../examples/tailwind-examples/topalert-ex01";
function Test3() {
  return (
    <Dashboar1Layout bgcolor="bg-gray-400">
      <div>
        <div className="w-full">
            <TopAlertEx01 message="something" type="bg-bs-success"/>
        </div>
        <div className="flex flex-wrap">
          <FlexCardsMultiple cardnum={5} />
        </div>
      </div>
    </Dashboar1Layout>
  );
}

export default Test3;
