import React from "react";
import ChildInput from "../../components/examples/child-input";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { FakeUsers } from "../../__mocks__/fakeusers";

const dummyObject={
    id: "2039x0923",
    name:"random name",

}

function Nov2() {
  const [val, setVal] = useState("some random value");
  const { handleSubmit, control } = useForm();
  console.log(FakeUsers[0])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setVal(e.target.value);
  };
  return (
    <div className="flex flex-wrap min-h-screen overflow-auto bg-slate-400 ">
      <div className="flex flex-wrap m-auto justify-center bg-white p-5 ">
        
        <form onSubmit={handleSubmit((data) => console.log(data))}>
          <div className="m-2">
            <Controller
              control={control}
              name="testinput"
              render={({ field: { onChange, onBlur, value, ref } }) => (
                <ChildInput
                  value={value}
                  handleChange={onChange}
                  placeholder="value is "
                  label={val}
                />
              )}
            />
          </div>{" "}
          {/*--------------------------------------------*/}
          <div className="flex flex-wrap gap-2">
            <div className="">
              <button type="submit" className="btn-primary block">
                Submit
              </button>
            </div>
            <div className="">
              <button type="submit" className="btn-default">
                Submit
              </button>
            </div>
            <div className="">
              <button type="submit" className="btn-nude">
                Submit
              </button>
            </div>

            <div className="flex-full-row">
              <button type="submit" className="btn-green col-span-3 w-full">
                Submit
              </button>
            </div>
          </div>
          {/*--------------------------------------------*/}
        </form>

        <div className="flex-full-row">
          <div className="flex flex-col gap-2 bg-red-300 p-2">
            Left
            <div className="m-2 bg-green-200">Big Pic</div>
            <div className="m-2 flex flex-row">
              <div className="bg-blue-200">photo-1</div>
              <div className="bg-blue-400">photo-2</div>
            </div>
          </div>
          <div className="flex flex-col bg-red-300">
            Right
            <div className="flex flex-row ">
              <div className="bg-pink-200">photo-1</div>
              <div className="bg-pink-400">Heading</div>
            </div>
            <div className="bg-yellow-200">More info</div>
            <div className="bg-orange-200">Contact</div>
            <div className="bg-amber-500">Social</div>
          </div>
        </div>
      </div>
      <div className="flex flex-row w-full bg-teal-200 m-5 p-5">
                    hello
      </div>
    </div>
  );
}

export default Nov2;
