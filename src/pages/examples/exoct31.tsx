import React from "react";
import ChildInput from "../../components/examples/child-input";
import { useState } from "react";

function Exoct31() {
  const [val, setVal] = useState("some random value");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setVal(e.target.value);
  };
  return (
    <div className="container ">
      <div className="flex min-h-screen overflow-auto bg-slate-400">
        <div className="m-auto max-h-1/4 max-w-2/4 justify-center bg-white p-16 shadow-md shadow-black">
          <div className=" grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div className="m-2">
              <ChildInput value="second val" handleChange={handleChange} />
            </div>
            <div className="m-2">
              <ChildInput value={val} handleChange={handleChange} />
            </div>
            <div className="m-2">
              <ChildInput value={val} handleChange={handleChange} />
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-row">
              <div>
                <ChildInput value={val} handleChange={handleChange} />
              </div>
              <div>
                <ChildInput value={val} handleChange={handleChange} />
              </div>
            </div>
            <div className="">
              <ChildInput value={val} handleChange={handleChange} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Exoct31;
