import React from "react";
import Dashboar1Layout from "../../layouts/dashboard1-layout";
import FlexCardsMultiple from "../../examples/tailwind-examples/flexcards-multiple-ex01";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function Test3() {
  const notify = () => toast.info("Wow so easy!");
  return (
    <Dashboar1Layout bgcolor="bg-gray-400">
      <div>
        <button onClick={notify}>notify</button>
        <div className="flex flex-wrap">
          <FlexCardsMultiple cardnum={5} />
        </div>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"

        />
      </div>
    </Dashboar1Layout>
  );
}

export default Test3;
